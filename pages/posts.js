import React from "react";
import Head from "next/head";
import Link from "next/link";

const Posts = () => {
  const posts = [
    {
      id: 1,
      slug: "privcaypolicy",
      date: "May 1, 2020",
      title: "Privacy Policy",
      content: "Privacy Policy for Youtube thumbnail grabber At Youtube thumbnail grabber, accessible from https://youtube-thumbnail-grabber.com/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Youtube thumbnail grabber and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Youtube thumbnail grabber.",
      excerpt: "Privacy Policy for Youtube thumbnail grabber..."
    },
    {
      id: 2,
      slug: "advent-of-code-day2",
      date: "December 9, 2018",
      title: "Advent of Code Day2 Question 1",
      content: "Advent of Code Day 2 Question 1 Answer Advent of Code Day2 Question 1 The below code is done in javascript. var fs = require(\"fs\"); fs.readFile(\"./input.js\", \"utf8\", (err, data) => { if (err) { throw err; } let twoCount = 0, threeCount = 0; data = data.split(\"\\n\"); for (let loop = 0; loop < data.length; loop++) { let word = data[loop]; let obj = {}; let count3 = false, count2 = false, count2Word; for (let loop2 = 0; loop2 < word...",
      excerpt: "Advent of Code Day 2 Question 1 Answer..."
    },
    {
      id: 3,
      slug: "hugo-netlify-hosting",
      date: "December 8, 2018",
      title: "Hugo + Netlify for hosting webpages",
      content: "Moving from free hosting to netlify, and using Hugo for these blogs. When i first started i was using firebase which provides decent bandwidth and storage space simple enough to host the website. As the functionality like downloading instagram photos and videos grow we moved to blogspot.com for hosting as it is free, which also provides free hosting and customdomain and ssl cert for free. But the themes and customization options are very much limited.",
      excerpt: "Moving from free hosting to netlify, and using Hugo for these blogs..."
    },
    {
      id: 4,
      slug: "chrome-extension",
      date: "November 26, 2018",
      title: "Chrome Extension",
      content: "Chrome extension to simplify download of youtube/vimeo thumbanails You can download the extension from this link Which has more than 3000 users. On installing users can see the option to download the thumanil beside the video. Which in turns save time of copy/paste the video url to the respective download sites. Which has multiple download options varying from Full HD to all sizes.",
      excerpt: "Chrome extension to simplify download of youtube/vimeo thumbnails..."
    },
    {
      id: 5,
      slug: "extension-features",
      date: "November 10, 2018",
      title: "Features of youtube thumbnail Extension",
      content: "Features of Download thumbnail extension You don't need to copy the url and paste it in some other website to download the thumbnails of the video you would like. Just head towards the youtube/Vimeo video you would like to download on its respective websites and in the youtube video page you could see the Download image button as seen in the below image. Once you click on the download thumbnails button you would be taken to a website giving you the options to download thumbnails of different sizes.",
      excerpt: "Features of Download thumbnail extension..."
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Head>
        <title>Posts - YouTube Thumbnail Downloader</title>
        <meta name="description" content="Latest posts and updates about YouTube thumbnail downloading tools and extensions." />
      </Head>

      {/* Navigation Container */}
      <nav className="nav">
        <div className="nav-container" style={{ width: "100%", maxWidth: "100%", paddingLeft: "20px" }}>
          <Link href="/">
            <h2 className="nav-title">Download Youtube Thumbnail</h2>
          </Link>
          <ul>
            <li><a href="#convert">Convert Video to Music</a></li>
            <li><a href="#tags">Find youtube video tags</a></li>
            <li><a href="/posts">Posts</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>
      </nav>
      {/* End of Navigation Container */}

      <main className="container mx-auto px-4 py-4" style={{ flex: 1 }}>
        <div className="max-w-4xl mx-auto">
          {posts.map((post, index) => (
            <article key={post.id} className="post-item">
              <div className="post-meta">
                <time>{post.date}</time>
              </div>
              <h2 className="post-title">
                <Link href={`/posts/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              <p className="post-content">
                {post.content}
              </p>
              {index < posts.length - 1 && <hr className="post-separator" />}
            </article>
          ))}
        </div>

        <footer>
          <p>&copy; 2025 YThumbD - YouTube Thumbnail Downloader. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default Posts;
