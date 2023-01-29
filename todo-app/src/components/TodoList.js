import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodoAsycn } from "../redux/todos/todosSlice";

import {
  toggle,
  removeItem,
  selectFilteredTodos,
  getTodosAsync,
  toggleTodoAsync,
} from "../redux/todos/todosSlice";

function TodoList() {
  const dispatch = useDispatch();

  const handleClick = async (itemId) => {
    if (window.confirm("Are you sure?")) {
      await dispatch(removeTodoAsycn(itemId));
    }
  };

  const filtered = useSelector(selectFilteredTodos);
  const isLoading = useSelector((state) => state.todos.isLoading);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error : {error}</div>;
  }

  return (
    <ul className="todo-list">
      {filtered.map((item, idx) => (
        <li className={item.completed ? "completed" : ""} key={idx}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={async () =>
                await dispatch(toggleTodoAsync({ id: item.id, completed: !item.completed }))
              }
            />
            <label>{item.title}</label>
            <button className="destroy" onClick={() => handleClick(item.id)}></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
