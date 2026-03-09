const BASE_URL = "https://blog.superlend.xyz";

function safeJsonLd(obj: Record<string, unknown>): string {
  return JSON.stringify(obj).replace(/<\/script/gi, "<\\/script");
}

export function SiteSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Superlend",
    url: "https://app.superlend.xyz",
    logo: `${BASE_URL}/favicon/apple-touch-icon.png`,
    sameAs: [
      "https://x.com/SuperlendHQ",
      "https://discord.com/invite/superlend",
      "https://github.com/superlend",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Superlend Blog",
    url: BASE_URL,
    publisher: {
      "@type": "Organization",
      name: "Superlend",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(websiteSchema) }}
      />
    </>
  );
}
