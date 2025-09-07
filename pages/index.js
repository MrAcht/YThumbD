import React, { useState, useEffect } from "react";
import Head from "next/head";

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);
  const [errorMessage, setErrorMessage] = useState(""); // New state for error message

  const getYouTubeThumbnail = async (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoURL = match[1];
      const thumbnailBaseUrl = "https://img.youtube.com/vi/";

      const base = `${thumbnailBaseUrl}${videoURL}/`;
      const options = [
        { resolution: "HD (1280x720)", code: "maxresdefault" },
        { resolution: "SD (640x480)", code: "sddefault" },
        { resolution: "Normal (480x360)", code: "hqdefault" },
        { resolution: "Medium (320x180)", code: "mqdefault" },
        { resolution: "Low (120x90)", code: "default" },
      ];

      // Check if maxres is available; if not, drop it from options
      let hasMaxRes = true;
      try {
        const headResp = await fetch(`/api/thumbnails?url=${encodeURIComponent(`${base}maxresdefault.jpg`)}`, { method: "HEAD" });
        hasMaxRes = headResp.ok;
      } catch (e) {
        hasMaxRes = false;
      }

      const filtered = hasMaxRes ? options : options.filter(o => o.code !== "maxresdefault");
      const thumbnailOptions = filtered.map((option) => ({
        resolution: option.resolution,
        url: `${base}${option.code}.jpg`,
        downloadText: `Download ${option.resolution} Thumbnail Image`,
      }));

      setThumbnailOptions(thumbnailOptions);
      setVideoURL("");
      setErrorMessage(""); // Clear any previous error messages
    } else {
      setThumbnailOptions([]);
      setErrorMessage("Invalid YouTube URL. Please enter a valid URL.");
    }
  };

  const handleDownloadClick = (url, downloadText) => {
    const apiUrl = `/api/thumbnails?url=${encodeURIComponent(url)}`;

    const link = document.createElement("a");
    link.href = apiUrl;
    link.download = "thumbnail.jpg";
    link.click();
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        getYouTubeThumbnail(videoURL);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [videoURL]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "YouTube Thumbnail Downloader",
    "description": "Download YouTube thumbnails in HD, SD, and multiple resolutions for free. Extract high-quality thumbnail images from any YouTube video URL.",
    "url": "https://www.youtubethumbnailgrabbing.com/",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "YThumbD"
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      {/* Navigation Container */}
      <nav className="nav">
        <div className="nav-container" style={{ width: "100%", maxWidth: "100%", paddingLeft: "20px" }}>
          <a href="/">
            <h2 className="nav-title">Download Youtube Thumbnail</h2>
          </a>
          <ul>
            <li><a href="/posts">Posts</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>
      </nav>
      {/* End of Navigation Container */}

      <main className="container mx-auto px-4 py-4" style={{ flex: 1, marginBottom: '60px' }}>
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Free Thumbnail Downloader
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Download youtube and vimeo thumbnail images of all quality for free. This application let you download thumbnails of all quality. Just paste the URL of the thumbnail video in the below input and click Get Thumbnail Image
          </p>
        </header>

        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <input
              type="text"
              className="w-full max-w-lg px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Paste YouTube video URL here"
              value={videoURL}
              onChange={(e) => setVideoURL(e.target.value)}
              aria-label="YouTube video URL"
            />
            <button
              className="btn-blue mt-4 px-8 py-3 text-lg font-semibold"
              onClick={() => getYouTubeThumbnail(videoURL)}
            >
              Get Thumbnail Images
            </button>
            {errorMessage && <p className="text-red-600 mt-4">{errorMessage}</p>}
          </div>
        </section>

        {thumbnailOptions.length > 0 && (
          <section className="mt-8">
            <p className="text-center text-gray-600 mb-6">
              <strong>Right Click and click on 'Save Image As..' to save the images.</strong>
            </p>
            <div className="max-w-4xl mx-auto">
              {thumbnailOptions.map((option, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                    {option.resolution}
                  </h3>
                  <div className="text-center mb-4">
                    <img 
                      loading="lazy" 
                      src={option.url} 
                      alt={`YouTube thumbnail ${option.resolution}`}
                      className="max-w-full h-auto mx-auto border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div className="text-center">
                    <button
                      className="btn-blue px-6 py-2 font-semibold"
                      onClick={() =>
                        handleDownloadClick(option.url, option.downloadText)
                      }
                    >
                      Download {option.resolution} Thumbnail Image
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}


        <footer>
          <p>&copy; 2025 YThumbD - YouTube Thumbnail Downloader. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
