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
    <div>
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
            <h2 className="nav-title">Download YouTube Thumbnail</h2>
          </a>
        </div>
      </nav>
      {/* End of Navigation Container */}

      <main className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            YouTube Thumbnail Downloader
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Download high-quality YouTube thumbnail images for free in multiple resolutions
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Extract HD, SD, and standard quality thumbnails from any YouTube video. 
            Simply paste the video URL below and get instant access to all available thumbnail sizes.
          </p>
        </header>

        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            How to Download YouTube Thumbnails
          </h2>
          <div className="max-w-2xl mx-auto">
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Paste YouTube video URL here (e.g., https://youtube.com/watch?v=...)"
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
            {errorMessage && <p className="text-red-600 mt-2">{errorMessage}</p>}
          </div>
        </section>

        {thumbnailOptions.length > 0 && (
          <section className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Available Thumbnail Resolutions
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {thumbnailOptions.map((option, index) => (
                <article key={index} className="thumbnail-option bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {option.resolution}
                  </h3>
                  <img 
                    loading="lazy" 
                    src={option.url} 
                    alt={`YouTube thumbnail ${option.resolution}`}
                    className="w-full h-auto rounded-lg mb-4"
                  />
                  <button
                    className="btn-blue w-full py-3 font-semibold"
                    onClick={() =>
                      handleDownloadClick(option.url, option.downloadText)
                    }
                  >
                    {option.downloadText}
                  </button>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="mt-16 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Use Our YouTube Thumbnail Downloader?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Free & Fast</h3>
              <p className="text-gray-600">Download YouTube thumbnails instantly without any cost or registration required.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Multiple Resolutions</h3>
              <p className="text-gray-600">Get thumbnails in HD (1280x720), SD (640x480), and other quality options.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Secure & Private</h3>
              <p className="text-gray-600">Your data is processed securely. We don't store any video URLs or personal information.</p>
            </div>
          </div>
        </section>

        <footer className="text-center text-gray-500 mt-16 pb-8">
          <p>&copy; 2024 YThumbD - YouTube Thumbnail Downloader. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
