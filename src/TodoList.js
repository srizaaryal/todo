import { useState } from "react";
import { v4 as uuid } from "uuid";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todo, setTodo] = useState([]);

  const addTodo = (input) => {
    setTodo((todo) => [...todo, input]);
  };

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      {todo.map((v) => (
        <Todo key={uuid()} value={v} />
      ))}
    </div>
  );
}

export default TodoList;
