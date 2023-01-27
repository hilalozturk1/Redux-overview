import React from "react";
import { useSelector } from "react-redux";

function TodoList() {
  const items = useSelector((state) => state.todos.items);
  console.log(items);
  return (
    <ul className="todo-list">
      <li className="completed">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>Learnjs</label>
          <button className="destroy"></button>
        </div>
      </li>
      <li className="completed">
        <div className="view">
          <input type="checkbox" className="toggle" />
          <label>Learncss</label>
          <button className="destroy"></button>
        </div>
      </li>
    </ul>
  );
}

export default TodoList;
