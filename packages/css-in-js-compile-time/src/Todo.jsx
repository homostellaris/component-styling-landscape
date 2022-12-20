export default function Todo({ title, description, first, last }) {
  return (
    <li
      css={{
        alignItems: "center",
        border: "solid 1px black",
        borderBottom: last ? "solid 1px black" : "none",
        display: "flex",
        listStyleType: "none",
      }}
    >
      <button
        css={{
          background: "none",
          border: "none",
          cursor: "pointer",
          height: "50px",
          padding: 0,
          width: "50px",
        }}
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
        css={{
          padding: "0.5rem 0",
        }}
      >
        <div
          css={{
            fontWeight: 400,
          }}
        >
          {title}
        </div>
        <div
          css={{
            fontWeight: 200,
            fontSize: "0.8rem",
          }}
        >
          {description}
        </div>
      </div>
    </li>
  );
}
