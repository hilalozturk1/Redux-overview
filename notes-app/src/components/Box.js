import React, { useState } from "react";
import ButtomLine from "./ButtomLine";

function Box() {
  const [item, setItem] = useState("");
  console.log(item);
  return (
    <div className="box">
      <textarea
        cols="75"
        rows="10"
        placeholder="Enter your note here.."
        value={item}
        onChange={(e) => setItem(e.target.value)}
      ></textarea>
      <br />
      <div className="buttom">
        <ButtomLine item={item} />
      </div>
    </div>
  );
}

export default Box;
