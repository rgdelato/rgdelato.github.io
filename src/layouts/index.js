import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { css } from "emotion";

import Header from "../components/Header";
import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <div
      className={css`
        margin: 0 auto;
        max-width: 960px;
        padding: 0px 1.0875rem 1.45rem;
        padding-top: 0px;
      `}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
