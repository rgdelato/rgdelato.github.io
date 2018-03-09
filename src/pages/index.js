import React from "react";
import Link from "gatsby-link";

const IndexPage = () => (
  <div>
    <h1>Home Page</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      <li>Marketing - Test with normal markdown files</li>
      <li>Marketing - Test with headless CMS, such as Contentful</li>
      <li>Marketing - Test image performance with `gatsby-image`</li>
      <li>App - Test API calls in componentDidMount</li>
      <li>App - Test React context plugins, such as Redux, Intl, Theme</li>
      <li>App - Test auth login/logout</li>
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default IndexPage;
