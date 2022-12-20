/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Todo from "./Todo";
import todos from "./todos.json";

export default function TodoList() {
  return (
    <div
      css={css`
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
        max-width: 600px;
        margin: 0 auto;
      `}
    >
      <header
        css={css`
          margin: 1rem;
          text-align: center;
        `}
      >
        <h1>Mars Colonisation Project</h1>
      </header>
      <ol
        css={css`
          list-style-type: none;
          padding: 0;
          box-shadow: 3px 3px 3px #999;
        `}
      >
        {todos.map((todo, index) => (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
            first={index === 0}
            last={index === todos.length - 1}
          />
        ))}
      </ol>
    </div>
  );
}
