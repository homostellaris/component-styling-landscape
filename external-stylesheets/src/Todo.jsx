export default function Todo({ title, description }) {
  return (
    <li>
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
      <div className="detail">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </li>
  );
}
