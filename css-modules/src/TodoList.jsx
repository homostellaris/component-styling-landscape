import Todo from "./Todo";
import todos from "./todos.json";

export default function TodoList() {
  return (
    <>
      <header>
        <h1>Mars Colonisation Project</h1>
      </header>
      <ol>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
          />
        ))}
      </ol>
    </>
  );
}
