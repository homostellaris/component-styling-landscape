import styles from "./Todo.module.css";

export default function Todo({ title, description }) {
  return (
    <li className={styles.listStyleTypeNone}>
      <input type={"checkbox"}></input>
      <div>{title}</div>
      <div>{description}</div>
    </li>
  );
}
