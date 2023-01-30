import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/todosSlice";

function ButtomLine({ item }) {
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState("white");

  return (
    <>
      <div>
        <button
          className={selectedColor === "pink" ? "dot active" : "dot"}
          style={{ backgroundColor: "pink" }}
          onClick={() => {
            setSelectedColor("pink");
          }}
        ></button>
        <button
          className={selectedColor === "yellow" ? "dot active" : "dot"}
          style={{ backgroundColor: "yellow" }}
          onClick={() => {
            setSelectedColor("yellow");
          }}
        ></button>
        <button
          className={selectedColor === "green" ? "dot active" : "dot"}
          style={{ backgroundColor: "green" }}
          onClick={() => {
            setSelectedColor("green");
          }}
        ></button>
        <button
          className={selectedColor === "blue" ? "dot active" : "dot"}
          style={{ backgroundColor: "blue" }}
          onClick={() => {
            setSelectedColor("blue");
          }}
        ></button>
        <button
          className={selectedColor === "purple" ? "dot active" : "dot"}
          style={{ backgroundColor: "purple" }}
          onClick={() => {
            setSelectedColor("purple");
          }}
        ></button>
      </div>
      <button
        className="button"
        onClick={() => {
          if (!item) {
            return;
          }
          dispatch(addTodo({ title: item, color: selectedColor }));
        }}
      >
        Add
      </button>
    </>
  );
}

export default ButtomLine;
