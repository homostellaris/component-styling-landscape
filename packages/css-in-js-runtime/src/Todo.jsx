/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Todo({ title, description, first, last }) {
  return (
    <li
      css={css`
        align-items: center;
        border: solid 1px black;
        border-bottom: ${last ? "solid 1px black" : "none"};
        display: flex;
        list-style-type: none;
      `}
    >
      <button
        css={css`
          background: none;
          border: none;
          cursor: pointer;
          height: 50px;
          padding: 0;
          width: 50px;
        `}
      >
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="50"
            cy="50"
            r="15"
            fill="none"
            stroke="black"
            strokeWidth="2px"
          />
        </svg>
      </button>
      <div
        css={css`
          padding: 0.5rem 0;
        `}
      >
        <div
          css={css`
            font-weight: 400;
          `}
        >
          {title}
        </div>
        <div
          css={css`
            font-weight: 200;
            font-size: 0.8rem;
          `}
        >
          {description}
        </div>
      </div>
    </li>
  );
}
