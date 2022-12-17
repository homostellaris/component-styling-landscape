export default function Todo({ title, detail }) {
  return (
    <li style={{ listStyleType: "none" }}>
      <input type={"checkbox"}></input>
      <div>{title}</div>
      <div>{detail}</div>
    </li>
  );
}
