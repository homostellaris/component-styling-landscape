import Todo from "./Todo";
import todos from "./todos.json";

export default function TodoList() {
  return (
    <div className="max-w-xl m-0 mx-auto">
      <header className="m-4 text-2xl font-bold text-center">
        <h1>Mars Colonisation Project</h1>
      </header>
      <ol className="p-0 list-none divide-y divide-gray-200 shadow-lg">
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
