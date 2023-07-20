import { useState } from "react";

function NewTodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Add your Todo's here</label>
      <input
        type="text"
        placeholder="Enter your Todo's here!"
        name="todo"
        value={input}
        onChange={handleChange}
      />
      <button>Add todo's</button>
    </form>
  );
}

export default NewTodoForm;
