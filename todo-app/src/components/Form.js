import React, { useState } from "react";
import { addTodo, addTodoAsync } from "../redux/todos/todosSlice";
import { useDispatch, useSelector } from "react-redux";

function Form() {
  const [title, setTitle] = useState("");
  const isLoading = useSelector((state) => state.todos.addNewTodoLoading);
  const error = useSelector((state) => state.todos.addNewTodoError);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    if (!title) {
      return;
    }
    e.preventDefault();

    await dispatch(addTodoAsync({ title }));

    setTitle("");
  };

  if (error) {
    alert(error);
    return;
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center" }}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        autoFocus
        disabled={isLoading}
      />
      {isLoading && <span style={{ paddingRight: 10 }}>Loading..</span>}
    </form>
  );
}

export default Form;
