import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle, removeItem } from "../redux/todos/todosSlice";

function TodoList() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.todos.items);
  const handleClick = (itemId) => {
    if (window.confirm("Are you sure?")) {
      dispatch(removeItem({ id: itemId }));
    }
  };
  console.log(items);
  return (
    <ul className="todo-list">
      {items.map((item, idx) => (
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
