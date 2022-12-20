import styles from "./TodoList.module.sass";

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
      <div className={styles.detail}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </li>
  );
}
