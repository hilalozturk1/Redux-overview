import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactSlice";
import { Link } from "react-router-dom";

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
      <Link to={`/edit/${item.id}`}>Edit</Link>
      <button onClick={() => handleDelete(item.id)}>Delete</button>
    </div>
  );
}

export default Item;
