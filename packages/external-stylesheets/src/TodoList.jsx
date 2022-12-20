import Todo from "./Todo";
import todos from "./todos.json";

export default function TodoList() {
  return (
    <div className="todo-list">
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
    </div>
  );
}
