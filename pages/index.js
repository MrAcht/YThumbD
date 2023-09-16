import React, { useState, useEffect } from "react";
import copy from "copy-to-clipboard";

const Index = () => {
  const [videoURL, setVideoURL] = useState("");
  const [thumbnailOptions, setThumbnailOptions] = useState([]);

  const getYouTubeThumbnail = (url) => {
    let regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    let match = url.match(regExp);

    if (match && match[1].length === 11) {
      const videoURL = match[1];
      const thumbnailBaseUrl = "http://img.youtube.com/vi/";

      const options = [
        { resolution: "HD (1280x720)", code: "maxresdefault" },
        { resolution: "SD (640x480)", code: "sddefault" },
        { resolution: "Normal (480x360)", code: "hqdefault" },
        { resolution: "Medium (320x180)", code: "mqdefault" },
        { resolution: "Low (120x90)", code: "default" },
      ];

      const thumbnailOptions = options.map((option) => ({
        resolution: option.resolution,
        url: `${thumbnailBaseUrl}${videoURL}/${option.code}.jpg`,
        downloadText: `Download ${option.resolution} Thumbnail Image`,
      }));

      setThumbnailOptions(thumbnailOptions);
      setVideoURL("");
    } else {
      setThumbnailOptions([]);
    }
  };

  const handleDownloadClick = (url, downloadText) => {
    const link = document.createElement("a");
    link.href = url;
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

  return (
    <div>
      {/* Navigation Container */}
      <nav className="nav">
        <div className="nav-container" style={{ width: "100%", maxWidth: "100%", paddingLeft: "20px" }}>
          <a href="/">
            <h2 className="nav-title">Download YouTube Thumbnail</h2>
          </a>
          <ul style={{ paddingRight: "20px" }}>
            <li><a href="/posts">Posts</a></li>
            <li><a href="../../posts/privacypolicy/">Privacy Policy</a></li>
          </ul>
        </div>
      </nav>
      {/* End of Navigation Container */}

      <div className="container mx-auto px-4 py-8">
        <header className="text-center">
          <p className="text-gray-600">
            Download YouTube and Vimeo thumbnail images of all quality for free.
            This application allows you to download thumbnails of all qualities.
            Just paste the URL of the thumbnail video in the 
            input below and click Get Thumbnail Image.
          </p>
        </header>

        <div className="text-center">
          <input
            type="text"
            className="w-full md:w-1/2 px-4 py-2 border rounded"
            placeholder="Enter YouTube URL"
            value={videoURL}
            onChange={(e) => setVideoURL(e.target.value)}
          />
          <button
            className="btn-blue mt-2"
            onClick={() => getYouTubeThumbnail(videoURL)}
          >
            Get Thumbnail Images
          </button>
        </div>

        {thumbnailOptions.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Thumbnail Options</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {thumbnailOptions.map((option, index) => (
                <div key={index} className="thumbnail-option">
                  <button
                    className="btn-blue mt-2"
                    onClick={() =>
                      handleDownloadClick(option.url, option.downloadText)
                    }
                  >
                    {option.downloadText}
                  </button>
                  <img src={option.url} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
