import Todo from "./Todo";
import todos from "./todos.json";

export default function TodoList() {
  return (
    <div>
      <header>
        <h1>Mars Colonisation Project</h1>
      </header>
      <ol>
        {todos.map((todo, index) => (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
            first={index === 0}
            last={index === todos.length - 1}
          />
        ))}
      </ol>
    </div>
  );
}
