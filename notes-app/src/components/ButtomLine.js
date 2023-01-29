import React from "react";

function ButtomLine() {
  return (
    <>
      <div>
        <span className="dot" style={{ backgroundColor: "pink" }}></span>
        <span className="dot" style={{ backgroundColor: "yellow" }}></span>
        <span className="dot" style={{ backgroundColor: "green" }}></span>
      </div>
      <button className="button">Add</button>
    </>
  );
}

export default ButtomLine;
