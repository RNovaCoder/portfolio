import { Authors, allAuthors } from "contentlayer/generated";
import { MDXLayoutRenderer } from "pliny/mdx-components";
import AuthorLayout from "@/layouts/AuthorLayout";
import { coreContent } from "pliny/utils/contentlayer";
import { genPageMetadata } from "app/seo";
import siteMetadata from "@/data/siteMetadata";

export const metadata = genPageMetadata({ 
  title: "Sobre mí | Portfolio NovaCoder",
  description: "Acerca de NovaCoderDev",
  image: {
    url: siteMetadata.socialBanner,
    width: siteMetadata.socialBannerWidth,
    height: siteMetadata.socialBannerHeight,
    alt: siteMetadata.socialBannerLabel
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre mí | Portfolio NovaCoder",
    description: "Acerca de NovaCoderDev",
    images: [siteMetadata.socialBanner],
    creator: "@rdevcode"
  },
  openGraph: {
    type: "profile",
    title: "Sobre mí | Portfolio NovaCoder",
    description: "Acerca de NovaCoderDev",
    images: [
      {
        url: siteMetadata.socialBanner,
        width: siteMetadata.socialBannerWidth,
        height: siteMetadata.socialBannerHeight,
        alt: siteMetadata.socialBannerLabel
      }
    ],
    locale: "es_PE",
    siteName: "Portfolio NovaCoder"
  }
});

export default function Page() {
  const author = allAuthors.find((p) => p.slug === "ricardo") as Authors;
  const mainContent = coreContent(author);

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
    </>
  );
}
