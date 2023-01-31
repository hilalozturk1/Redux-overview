import React from "react";
import { contactSelectors } from "../../redux/contactSlice";
import { useSelector } from "react-redux";
import Item from "./Item";

function List() {
  const contacts = useSelector(contactSelectors.selectAll);

  return (
    <div>
      {contacts.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default List;
