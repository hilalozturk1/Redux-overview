import React from "react";
import { contactSelectors, removeAllContact } from "../../redux/contactSlice";
import { useSelector, useDispatch } from "react-redux";
import Item from "./Item";

function List() {
  const contacts = useSelector(contactSelectors.selectAll);
  const total = useSelector(contactSelectors.selectTotal);
  const dispatch = useDispatch();
  const handleDeleteAll = () => {
    if (window.confirm("are you sure")) {
      dispatch(removeAllContact());
    }
  };
  return (
    <div>
      {total > 0 && <div onClick={handleDeleteAll}>Remove All</div>}
      {contacts.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default List;
