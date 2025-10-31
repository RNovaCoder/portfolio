import "css/tailwind.css";
import "pliny/search/algolia.css";
import "../components/video-react/video-react.css"; // import css
import { renderToStaticMarkup } from "react-dom/server";

import { Noto_Sans } from "next/font/google";
import Header from "@/components/Header";
import SectionContainer from "@/components/SectionContainer";
import Footer from "@/components/Footer";
import siteMetadata from "@/data/siteMetadata";
import { ThemeProviders } from "./theme-providers";
import { Metadata } from "next";
 

const circuitTileSVGlight = 'url("/static/images/title.png")';
const circuitTileSVGdark = 'url("/static/images/titledark.webp")';

const circuitTileSVGToggle = `
    :root { --bg-tile: ${circuitTileSVGlight}; }
    .dark { --bg-tile: ${circuitTileSVGdark}; }
  `;

const pt_sans = Noto_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: "./",
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: siteMetadata.locale,
    type: "website",
  },
  alternates: {
    canonical: "./",
    types: {
      "application/rss+xml": `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: "summary_large_image",
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang={siteMetadata.language}
      className={`${pt_sans.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link
        rel="icon"
        type="image/svg+xml"
        href="/static/favicons/NCoderLogo.svg"
      />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#ffffff"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#000000"
      />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <body
        className="min-h-screen
          bg-repeat bg-[length:340px_340px] dark:bg-[length:450px_450px]
          bg-[image:var(--bg-tile)] bg-white text-black antialiased dark:bg-[#1B1B1B] dark:text-white transition-colors duration-200"
      >
        <style
          dangerouslySetInnerHTML={{
            __html: circuitTileSVGToggle,
          }}
        />
        <ThemeProviders>
          <SectionContainer>
            <div className="flex h-screen flex-col justify-between font-sans">
              <Header />
              <main className="mb-auto">{children}</main>
              <Footer />
            </div>
          </SectionContainer>
        </ThemeProviders>
      </body>
    </html>
  );
}
