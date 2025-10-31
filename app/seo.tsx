import { Metadata } from "next";
import siteMetadata from "@/data/siteMetadata";

interface PageSEOProps {
  title: string;
  description?: string;
  image?: string | {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    images?: string[];
    creator?: string;
  };
  openGraph?: {
    type?: string;
    title?: string;
    description?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
    locale?: string;
    siteName?: string;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export function genPageMetadata({
  title,
  description,
  image,
  twitter,
  openGraph,
  ...rest
}: PageSEOProps): Metadata {
  // Procesar imagen para diferentes formatos
  const processImage = (img: string | { url: string; width?: number; height?: number; alt?: string }) => {
    if (typeof img === 'string') {
      return img;
    }
    return img.url;
  };

  const processImageArray = (img: string | { url: string; width?: number; height?: number; alt?: string }) => {
    if (typeof img === 'string') {
      return [img];
    }
    return [img.url];
  };

  const processImageObject = (img: string | { url: string; width?: number; height?: number; alt?: string }) => {
    if (typeof img === 'string') {
      return [{ url: img }];
    }
    return [img];
  };

  return {
    title,
    description: description || siteMetadata.description,
    openGraph: {
      title: openGraph?.title || `${title} | ${siteMetadata.title}`,
      description: openGraph?.description || description || siteMetadata.description,
      url: "./",
      siteName: openGraph?.siteName || siteMetadata.title,
      images: image ? processImageObject(image) : [siteMetadata.socialBanner],
      locale: openGraph?.locale || siteMetadata.language,
      type: openGraph?.type || "website",
      ...openGraph,
    },
    twitter: {
      title: twitter?.title || `${title} | ${siteMetadata.title}`,
      card: twitter?.card || "summary_large_image",
      images: image ? processImageArray(image) : [siteMetadata.socialBanner],
      creator: twitter?.creator,
      description: twitter?.description || description || siteMetadata.description,
      ...twitter,
    },
    ...rest,
  };
}
