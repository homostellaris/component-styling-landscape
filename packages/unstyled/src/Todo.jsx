export default function Todo({ title, description }) {
  return (
    <li>
      <button>
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
      <div>
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </li>
  );
}
