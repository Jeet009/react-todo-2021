import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || [
      { todo: "Hi Jeet, hope you're good ..." },
    ]
  );
  const [todo, setTodo] = useState();
  const captureTodo = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    todos.push({ todo });
    localStorage.setItem("todos", JSON.stringify(todos));
    setTodos(JSON.parse(localStorage.getItem("todos")));
    setTodo("");
  };
  const handleDelete = (name) => {
    localStorage.setItem(
      "todos",
      JSON.stringify(todos.filter((todo) => todo.todo !== name))
    );
    setTodos(JSON.parse(localStorage.getItem("todos")));
  };

  return (
    <main>
      <div className="form-view">
        <div className="form-container">
          <form>
            <input
              type="text"
              placeholder="Enter Todo ..."
              value={todo}
              onChange={captureTodo}
            />
            <button className="btn btn-custom " onClick={handleSubmit}>
              <span className="fa fa-check"></span>
            </button>
          </form>
        </div>
        <div className="todo-container">
          {todos.map((todo) => (
            <div className="todo">
              <h5 onClick={() => handleDelete(todo.todo)}>{todo.todo}</h5>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
