import Todo from "./Todo";
import todos from "./todos.json";

export default function TodoList() {
  return (
    <div
      style={{
        boxSizing: "border-box",
        fontFamily: "'Inter', sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <header style={{ margin: "1rem", textAlign: "center" }}>
        <h1>Mars Colonisation Project</h1>
      </header>
      <ol
        style={{
          listStyleType: "none",
          padding: "0",
          boxShadow: "3px 3px 3px #999",
        }}
      >
        {todos.map((todo, index) => (
          <Todo
            key={todo.id}
            title={todo.title}
            detail={todo.detail}
            first={index === 0}
            last={index === todos.length - 1}
          />
        ))}
      </ol>
    </div>
  );
}
