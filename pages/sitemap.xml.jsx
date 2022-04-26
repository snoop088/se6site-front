import React from "react";
import * as fs from "fs";
import { BLOG_POSTS_SLIM } from "../api/mockdata/blog";
import { CASE_STUDIES_SLIM } from "../api/mockdata/case-studies";
import { SHOWCASE_ITEMS } from "../api/mockdata/showcase-data";
import { FEATURES_SLIM } from "../api/mockdata/features";

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = "https://streameye.com";

  const staticPaths = [
    `${BASE_URL}/`,
    `${BASE_URL}/blog/`,
    `${BASE_URL}/case-studies/`,
    `${BASE_URL}/showcase/`,
    `${BASE_URL}/features/`,
    `${BASE_URL}/about/`,
    `${BASE_URL}/contact/`,
    `${BASE_URL}/cookie-policy/`,
  ];

  const blogPosts = BLOG_POSTS_SLIM.map((post) => {
    return `${BASE_URL}/blog/${post.id}/`;
  });

  const caseStudies = CASE_STUDIES_SLIM.map((post) => {
    return `${BASE_URL}/case-studies/${post.id}/`;
  });

  const showcases = SHOWCASE_ITEMS.map((post) => {
    return `${BASE_URL}/showcase/${post.id}/`;
  });

  const features = FEATURES_SLIM.map((post) => {
    return `${BASE_URL}/features/${post.id}/`;
  });

  const allPaths = [
    ...staticPaths,
    ...features,
    ...showcases,
    ...caseStudies,
    ...blogPosts,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>2022-04-26T10:00:00.000Z</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
