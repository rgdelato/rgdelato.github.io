import React from "react";
import Link from "gatsby-link";
import { css } from "emotion";

const MaxWidth = ({ children, className = "", ...props }) => (
  <div
    {...props}
    className={`${css`
      margin: 0 auto;
      max-width: 960px;
    `} ${className}`}
  >
    {children}
  </div>
);

export default MaxWidth;
