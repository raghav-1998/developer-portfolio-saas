import type { Metadata } from "next";
import { SITE } from "@/constants/site";

interface PageMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

export function createMetadata({
  title,
  description,
  path = "",
  image,
}: PageMetadataOptions = {}): Metadata {
  const pageTitle = title ? `${title} | ${SITE.name}` : SITE.title;
  const pageDescription = description ?? SITE.description;
  const url = `${SITE.url}${path}`;
  const ogImage = image ?? `${SITE.url}/og-image.png`;

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      type: "website",
      url,
      title: pageTitle,
      description: pageDescription,
      images: [{ url: ogImage, width: 1200, height: 630, alt: pageTitle }],
      siteName: SITE.name,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}
