export default function Todo({ title, detail }) {
  return (
    <li className="list-style-type-none">
      <input type={"checkbox"}></input>
      <div>{title}</div>
      <div>{detail}</div>
    </li>
  );
}
