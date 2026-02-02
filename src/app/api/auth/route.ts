import { NextRequest, NextResponse } from "next/server";

/**
 * OAuth authorization endpoint for Decap CMS
 * Redirects users to GitHub's OAuth authorization page
 */
export async function GET(request: NextRequest) {
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;

  if (!clientId) {
    return NextResponse.json(
      { error: "GitHub OAuth Client ID not configured" },
      { status: 500 },
    );
  }

  const searchParams = request.nextUrl.searchParams;
  const scope = searchParams.get("scope") || "repo,user";

  // Build GitHub OAuth URL
  const authUrl = new URL("https://github.com/login/oauth/authorize");
  authUrl.searchParams.set("client_id", clientId);
  authUrl.searchParams.set("scope", scope);
  authUrl.searchParams.set(
    "redirect_uri",
    `${request.nextUrl.origin}/api/callback`,
  );

  return NextResponse.redirect(authUrl.toString());
}
