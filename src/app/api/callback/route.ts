import { NextRequest, NextResponse } from "next/server";

/**
 * OAuth callback endpoint for Decap CMS
 * Exchanges GitHub authorization code for access token
 * and sends it back to the CMS via postMessage or localStorage fallback
 */
export async function GET(request: NextRequest) {
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return NextResponse.json(
      { error: "GitHub OAuth credentials not configured" },
      { status: 500 },
    );
  }

  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json(
      { error: "No authorization code received" },
      { status: 400 },
    );
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code,
        }),
      },
    );

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      throw new Error(tokenData.error_description || tokenData.error);
    }

    const token = tokenData.access_token;
    const provider = "github";
    const origin = request.nextUrl.origin;

    // Return HTML that attempts postMessage first, then falls back to localStorage
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Authorizing...</title>
        </head>
        <body>
          <p id="status">Authorizing...</p>
          <script>
            (function() {
              const token = "${token}";
              const provider = "${provider}";
              const origin = "${origin}";
              const content = JSON.stringify({ provider, token });
              const statusEl = document.getElementById('status');
              
              let messageReceived = false;
              
              // Method 1: Try postMessage with handshake (works if opened as popup)
              if (window.opener) {
                window.addEventListener('message', function(event) {
                  if (event.data === 'authorizing:' + provider) {
                    messageReceived = true;
                    window.opener.postMessage(
                      'authorization:' + provider + ':success:' + content,
                      event.origin
                    );
                    setTimeout(function() { window.close(); }, 100);
                  }
                });
                
                // Initiate handshake
                window.opener.postMessage('authorizing:' + provider, '*');
                
                // Give postMessage 2 seconds to work
                setTimeout(function() {
                  if (!messageReceived) {
                    fallbackToRedirect();
                  }
                }, 2000);
              } else {
                // No opener, use redirect method immediately
                fallbackToRedirect();
              }
              
              function fallbackToRedirect() {
                // Method 2: Store in localStorage and redirect to admin
                // Decap CMS checks localStorage for 'netlify-cms-user' key
                try {
                  const userData = {
                    token: token,
                    backendName: provider
                  };
                  localStorage.setItem('netlify-cms-user', JSON.stringify(userData));
                  statusEl.textContent = 'Authorization successful! Redirecting...';
                  window.location.href = origin + '/admin/index.html#/';
                } catch (e) {
                  statusEl.textContent = 'Authorization successful! Please close this window and refresh the admin page.';
                }
              }
            })();
          </script>
        </body>
      </html>
    `;

    return new NextResponse(html, {
      headers: { "Content-Type": "text/html" },
    });
  } catch (error) {
    console.error("OAuth error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Authentication failed";

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Authentication Error</title>
        </head>
        <body>
          <h1>Authentication Failed</h1>
          <p>${errorMessage}</p>
          <p><a href="/admin/index.html">Return to Admin</a></p>
        </body>
      </html>
    `;

    return new NextResponse(html, {
      headers: { "Content-Type": "text/html" },
    });
  }
}
