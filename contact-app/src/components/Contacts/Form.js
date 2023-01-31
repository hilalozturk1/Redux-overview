import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact, addContacts } from "../../redux/contactSlice";
import { nanoid } from "@reduxjs/toolkit";

function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) {
      return false;
    }
    const names = name.split(",");
    dispatch(addContacts(names.map((name) => ({ id: nanoid(), name, phone_number: number }))));
    {
      /*dispatch(addContact({ id: nanoid(), name }));*/
    }
    setName("");
    setNumber("");
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
        <input
          type="number"
          value={number}
          placeholder="phone number"
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form;
