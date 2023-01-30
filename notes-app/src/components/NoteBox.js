import React from "react";

function NoteBox({ title, color }) {
  return (
    <div className="noteBox" style={{ backgroundColor: color }}>
      {title}
    </div>
  );
}

export default NoteBox;
