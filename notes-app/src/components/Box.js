import React from "react";
import ButtomLine from "./ButtomLine";

function Box() {
  return (
    <div className="box">
      <textarea cols="75" rows="10" placeholder="Enter your note here.."></textarea>
      <br />
      <div className="buttom">
        <ButtomLine />
      </div>
    </div>
  );
}

export default Box;
