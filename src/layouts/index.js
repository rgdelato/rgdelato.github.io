import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { css } from "emotion";

import Header from "../components/Header.js";
import MaxWidth from "../components/MaxWidth.js";
import "typeface-montserrat";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Ryan's Radius"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <MaxWidth
      className={css`
        padding: 0 1.45rem 1.0875rem;
      `}
    >
      {children()}
    </MaxWidth>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
