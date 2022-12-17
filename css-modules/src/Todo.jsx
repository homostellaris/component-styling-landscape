import styles from "./Todo.module.css";

export default function Todo({ title, detail }) {
  return (
    <li className={styles.listStyleTypeNone}>
      <input type={"checkbox"}></input>
      <div>{title}</div>
      <div>{detail}</div>
    </li>
  );
}
