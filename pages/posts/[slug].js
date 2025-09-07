import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const PostPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Post data - in a real app, this would come from a CMS or database
  const posts = {
    'privcaypolicy': {
      title: "Privacy Policy",
      date: "May 1, 2020",
      content: `
# Privacy Policy for Youtube thumbnail grabber

At Youtube thumbnail grabber, accessible from https://youtube-thumbnail-grabber.com/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Youtube thumbnail grabber and how we use it.

If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.

This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Youtube thumbnail grabber. This policy is not applicable to any information collected offline or via channels other than this website.

## Consent

By using our website, you hereby consent to our Privacy Policy and agree to its terms.

## Information we collect

The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.

If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.

When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.

## How we use your information

* Find and prevent fraud

## Google DoubleClick DART Cookie

Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – https://policies.google.com/technologies/ads

## Advertising Partners Privacy Policies

You may consult this list to find the Privacy Policy for each of the advertising partners of Youtube thumbnail grabber.

Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Youtube thumbnail grabber, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.

Note that Youtube thumbnail grabber has no access to or control over these cookies that are used by third-party advertisers.

## Third Party Privacy Policies

Youtube thumbnail grabber's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.

You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.

## CCPA Privacy Rights (Do Not Sell My Personal Information)

Under the CCPA, among other rights, California consumers have the right to:

Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.

Request that a business delete any personal data about the consumer that a business has collected.

Request that a business that sells a consumer's personal data, not sell the consumer's personal data.

If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.

## GDPR Data Protection Rights

We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:

The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.

The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.

The right to erasure – You have the right to request that we erase your personal data, under certain conditions.

The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.

The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.

The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.

If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.

## Children's Information

Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.

Youtube thumbnail grabber does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
      `
    },
    'advent-of-code-day2': {
      title: "Advent of Code Day2 Question 1",
      date: "December 9, 2018",
      content: `
# Advent of Code Day 2 Question 1 Answer

The below code is done in javascript.

\`\`\`javascript
var fs = require("fs");
fs.readFile("./input.js", "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  let twoCount = 0, threeCount = 0;
  data = data.split("\\n");
  for (let loop = 0; loop < data.length; loop++) {
    let word = data[loop];
    let obj = {};
    let count3 = false, count2 = false, count2Word;
    for (let loop2 = 0; loop2 < word.length; loop2++) {
      let char = word[loop2];
      if (obj[char]) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
    for (let key in obj) {
      if (obj[key] === 2 && !count2) {
        count2 = true;
        twoCount++;
      }
      if (obj[key] === 3 && !count3) {
        count3 = true;
        threeCount++;
      }
    }
  }
  console.log(twoCount * threeCount);
});
\`\`\`
      `
    },
    'hugo-netlify-hosting': {
      title: "Hugo + Netlify for hosting webpages",
      date: "December 8, 2018",
      content: `
# Hugo + Netlify for hosting webpages

Moving from free hosting to netlify, and using Hugo for these blogs. When i first started i was using firebase which provides decent bandwidth and storage space simple enough to host the website. As the functionality like downloading instagram photos and videos grow we moved to blogspot.com for hosting as it is free, which also provides free hosting and customdomain and ssl cert for free. But the themes and customization options are very much limited.

## Why Hugo?

Hugo is a fast and modern static site generator that allows for:

* Fast build times
* Easy content management
* Flexible theming
* Great performance

## Why Netlify?

Netlify provides:

* Free hosting
* Custom domains
* SSL certificates
* Continuous deployment
* Form handling
      `
    },
    'chrome-extension': {
      title: "Chrome Extension",
      date: "November 26, 2018",
      content: `
# Chrome extension to simplify download of youtube/vimeo thumbnails

You can download the extension from this link Which has more than 3000 users. On installing users can see the option to download the thumbnail beside the video. Which in turns save time of copy/paste the video url to the respective download sites. Which has multiple download options varying from Full HD to all sizes.

## Features

* One-click thumbnail download
* Multiple resolution options
* Works on YouTube and Vimeo
* No need to copy/paste URLs
* Over 3000 active users

## Installation

1. Visit the Chrome Web Store
2. Search for "YouTube Thumbnail Downloader"
3. Click "Add to Chrome"
4. Start downloading thumbnails instantly!
      `
    },
    'extension-features': {
      title: "Features of youtube thumbnail Extension",
      date: "November 10, 2018",
      content: `
# Features of Download thumbnail extension

You don't need to copy the url and paste it in some other website to download the thumbnails of the video you would like. Just head towards the youtube/Vimeo video you would like to download on its respective websites and in the youtube video page you could see the Download image button as seen in the below image. Once you click on the download thumbnails button you would be taken to a website giving you the options to download thumbnails of different sizes.

## How it works

1. Navigate to any YouTube or Vimeo video
2. Look for the "Download Thumbnail" button
3. Click the button to see all available sizes
4. Choose your preferred resolution
5. Download instantly!

## Available Sizes

* HD (1280x720)
* SD (640x480)
* Normal (480x360)
* Medium (320x180)
* Low (120x90)
      `
    }
  };

  const post = posts[slug];

  if (!post) {
    return (
      <div>
        <Head>
          <title>Post Not Found - YouTube Thumbnail Downloader</title>
        </Head>
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
        <main className="container mx-auto px-4 py-4">
          <h1>Post Not Found</h1>
          <p>The post you're looking for doesn't exist.</p>
          <Link href="/posts">← Back to Posts</Link>
        </main>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Head>
        <title>{post.title} - YouTube Thumbnail Downloader</title>
        <meta name="description" content={post.title} />
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
          <div className="post-meta text-center mb-2">
            <span>Written by</span>
          </div>
          <div className="post-meta text-center mb-6">
            on {post.date}
          </div>
          
          <h1 className="post-main-title text-center mb-6">{post.title}</h1>
          <hr className="post-title-underline" />
          
          <div className="post-content">
            {post.content.split('\n').map((line, index) => {
              if (line.startsWith('# ')) {
                return <h1 key={index} className="post-h1">{line.substring(2)}</h1>;
              } else if (line.startsWith('## ')) {
                return <h2 key={index} className="post-h2">{line.substring(3)}</h2>;
              } else if (line.startsWith('### ')) {
                return <h3 key={index} className="post-h3">{line.substring(4)}</h3>;
              } else if (line.startsWith('```')) {
                return null; // Skip code block markers
              } else if (line.startsWith('* ')) {
                return <li key={index} className="post-li">{line.substring(2)}</li>;
              } else if (line.trim() === '') {
                return <br key={index} />;
              } else if (line.trim()) {
                return <p key={index} className="post-p">{line}</p>;
              }
              return null;
            })}
          </div>
          
          <div className="mt-8 pt-4 border-t border-gray-200">
            <Link href="/posts" className="back-link">
              ← Top
            </Link>
          </div>
        </div>

        <footer>
          <p>&copy; 2025 YThumbD - YouTube Thumbnail Downloader. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default PostPage;
