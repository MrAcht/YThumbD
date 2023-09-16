import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="Download Youtube Thumbnail"
        description="Download high-quality YouTube and Vimeo thumbnail images for free Our application allows you to easily fetch thumbnails of various qualities Simply paste the video's URL into the input field below and click 'Get Thumbnail Images' to retrieve it"
        canonical="https://www.youtubethumbnailgrabbing.com/"
        openGraph={{
          url: "https://www.youtubethumbnailgrabbing.com/",
          title: "Download Youtube Thumbnail",
          description: "Download high-quality YouTube and Vimeo thumbnail images for free Our application allows you to easily fetch thumbnails of various qualities Simply paste the video's URL into the input field below and click 'Get Thumbnail Images' to retrieve it",
          site_name: "Download Youtube Thumbnail",
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
