export default function Todo({ title, description }) {
  return (
    <li className="flex items-center">
      <button className="w-12 h-12 p-0 bg-transparent border-none cursor-pointer">
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
      <div className="px-0 py-2">
        <div className="font-normal">{title}</div>
        <div className="text-sm font-extralight">{description}</div>
      </div>
    </li>
  );
}
