import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactSlice";

function Item({ item }) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    if (window.confirm("are you sure?")) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <div>
      <span>{item.name}</span> <span>{item.phone_number}</span>
      <button onClick={() => handleDelete(item.id)}>Delete</button>
    </div>
  );
}

export default Item;
