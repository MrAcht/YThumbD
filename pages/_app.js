import "../styles/index.css";
import { Fragment } from "react";
import Script from "next/script";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Script
        id="adsense-script"
        strategy="afterInteractive"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4717830307729484"
        crossOrigin="anonymous"
      />
      <DefaultSeo
        title="YouTube Thumbnail Downloader - Free HD Thumbnail Images | YThumbD"
        titleTemplate="%s | YThumbD"
        description="Download YouTube thumbnails in HD, SD, and multiple resolutions for free. Extract high-quality thumbnail images from any YouTube video URL. Fast, secure, and easy to use thumbnail downloader."
        canonical="https://www.youtubethumbnailgrabbing.com/"
        additionalMetaTags={[
          {
            name: "keywords",
            content: "youtube thumbnail downloader, download youtube thumbnails, youtube thumbnail extractor, free thumbnail downloader, youtube thumbnail grabber, hd youtube thumbnails, youtube thumbnail saver"
          },
          {
            name: "author",
            content: "YThumbD"
          },
          {
            name: "robots",
            content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          },
          {
            name: "googlebot",
            content: "index, follow"
          }
        ]}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico"
          },
          {
            rel: "apple-touch-icon",
            href: "/apple-touch-icon.png",
            sizes: "180x180"
          },
          {
            rel: "manifest",
            href: "/manifest.json"
          }
        ]}
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://www.youtubethumbnailgrabbing.com/",
          title: "YouTube Thumbnail Downloader - Free HD Thumbnail Images",
          description: "Download YouTube thumbnails in HD, SD, and multiple resolutions for free. Extract high-quality thumbnail images from any YouTube video URL.",
          site_name: "YThumbD - YouTube Thumbnail Downloader",
          images: [
            {
              url: "https://www.youtubethumbnailgrabbing.com/og-image.jpg",
              width: 1200,
              height: 630,
              alt: "YouTube Thumbnail Downloader - Free HD Thumbnail Images"
            }
          ]
        }}
        twitter={{
          handle: "@ythumbd",
          site: "@ythumbd",
          cardType: "summary_large_image"
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
