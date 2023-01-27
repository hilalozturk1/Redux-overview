import React from "react";

function TodoList() {
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
