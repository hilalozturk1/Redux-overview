import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact, addContacts } from "../../redux/contactSlice";
import { nanoid } from "@reduxjs/toolkit";

function Form() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      return false;
    }
    const names = name.split(",");
    dispatch(addContacts(names.map((name) => ({ id: nanoid(), name }))));
    {
      /*dispatch(addContact({ id: nanoid(), name }));*/
    }
    setName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="name"
        />
      </form>
    </div>
  );
}

export default Form;
