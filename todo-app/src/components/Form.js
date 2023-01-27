import React, { useState } from "react";
import { addTodo } from "../redux/todos/todosSlice";
import { useDispatch } from "react-redux";

function Form() {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if (!title) {
      return;
    }
    e.preventDefault();

    dispatch(addTodo({ title }));

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        autoFocus
      />
    </form>
  );
}

export default Form;
