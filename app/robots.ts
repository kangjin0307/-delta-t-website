import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap:
      "https://delta-t-manufacturing-sdn-bhd.vercel.app/sitemap.xml",
  };
}