export default function Todo({ title, detail }) {
  return (
    <li>
      <input type={"checkbox"}></input>
      <div>{title}</div>
      <div>{detail}</div>
    </li>
  );
}
