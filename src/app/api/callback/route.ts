import { NextRequest, NextResponse } from "next/server";

/**
 * OAuth callback endpoint for Decap CMS
 * Exchanges GitHub authorization code for access token
 * and sends it back to the CMS via postMessage
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

    // Return HTML that posts the token back to Decap CMS
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Authorizing...</title>
        </head>
        <body>
          <script>
            (function() {
              const token = "${tokenData.access_token}";
              const provider = "github";
              
              // Send message to parent window (Decap CMS)
              if (window.opener) {
                window.opener.postMessage(
                  'authorization:' + provider + ':success:' + JSON.stringify({ token, provider }),
                  window.location.origin
                );
                window.close();
              }
            })();
          </script>
          <p>Authorizing... If this window doesn't close automatically, please close it manually.</p>
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

    // Return HTML that posts error back to Decap CMS
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Authentication Error</title>
        </head>
        <body>
          <script>
            (function() {
              if (window.opener) {
                window.opener.postMessage(
                  'authorization:github:error:' + JSON.stringify({ message: "${errorMessage}" }),
                  window.location.origin
                );
                window.close();
              }
            })();
          </script>
          <p>Authentication failed: ${errorMessage}</p>
        </body>
      </html>
    `;

    return new NextResponse(html, {
      headers: { "Content-Type": "text/html" },
    });
  }
}
