import { useGetTodosQuery } from "../../services/todos";
import { useState } from "react";
import "./todolist.css";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const {data: todos, error, isError, isLoading, isSuccess} = useGetTodosQuery()

  const handleSubmit = (e) => {
    e.preventDefault();
    //addTodo
    setNewTodo("");
  };

  const newItemSection = (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Enter a new todo item</label>
      <div className="new-todo">
        <input
          type="text"
          id="new-todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo"
        />
      </div>
      <button className="todolist__button todolist__button--submit">
        Submit
      </button>
    </form>
  );

  let content;
  if (isLoading) {
    content = "Loading...";
  } else if (isSuccess) {
    content = todos.map((todo) => {
      return (
        <article key={todo.id}>
          <div className="todo">
            <input type="checkbox" checked={todo.completed} id={todo.id} />
            <label htmlFor={todo.id}>{todo.title}</label>
          </div>
          <button className="todolist__button todolist__button--trash">
            Delete
          </button>
        </article>
      );
    });
  } else if (isError) {
    content = <p>{error.error}</p>;
  }

  return (
    <main>
      <h1>Todo List</h1>
      {newItemSection}
      {content}
    </main>
  );
};
export default TodoList;
