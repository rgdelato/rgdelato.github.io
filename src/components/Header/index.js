import React from "react";
import Link from "gatsby-link";
import { css } from "emotion";

const Header = () => (
  <div
    className={css`
      background: rebeccapurple;
      margin-bottom: 1.45rem;
    `}
  >
    <div
      className={css`
        margin: 0 auto;
        max-width: 960px;
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
          `}
        >
          Gatsby
        </Link>
      </h1>
    </div>
  </div>
);

export default Header;
