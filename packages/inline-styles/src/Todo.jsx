export default function Todo({ title, description, first, last }) {
  const style = {
    alignItems: "center",
    border: "solid 1px black",
    borderBottom: "none",
    display: "flex",
    listStyleType: "none",
  };

  if (last) style.borderBottom = "solid 1px black";

  return (
    <li style={style}>
      <button
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          height: "50px",
          padding: "0",
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
      <div style={{ padding: "0.5rem 0" }}>
        <div
          style={{
            fontWeight: "400",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontWeight: "200",
            fontSize: "0.8rem",
          }}
        >
          {description}
        </div>
      </div>
    </li>
  );
}
