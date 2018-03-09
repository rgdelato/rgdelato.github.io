import React from "react";
import Link from "gatsby-link";
import { css } from "emotion";

import MaxWidth from "./MaxWidth.js";

const Header = () => (
  <div
    className={css`
      background: #21252b;
      margin-bottom: 1.45rem;
    `}
  >
    <MaxWidth
      className={css`
        padding: 1.45rem 1.0875rem;
      `}
    >
      <h1
        className={css`
          margin: 0;
        `}
      >
        <Link
          to="/"
          className={css`
            color: white;
            text-decoration: none;

            &:hover {
              color: white;
            }
          `}
        >
          Ryan's Radius
        </Link>
      </h1>
    </MaxWidth>
  </div>
);

export default Header;
