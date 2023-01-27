import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle, removeItem, selectFilteredTodos, getTodosAsync } from "../redux/todos/todosSlice";

function TodoList() {
  const dispatch = useDispatch();

  const handleClick = (itemId) => {
    if (window.confirm("Are you sure?")) {
      dispatch(removeItem({ id: itemId }));
    }
  };
  const filtered = useSelector(selectFilteredTodos);
  
  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  return (
    <ul className="todo-list">
      {filtered.map((item, idx) => (
        <li className={item.completed ? "completed" : ""} key={idx}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() => dispatch(toggle({ id: item.id }))}
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
