import "./App.css";
import Box from "./components/Box";
import NoteBox from "./components/NoteBox";
import { useSelector } from "react-redux";
import { useState } from "react";

function App() {
  const todoList = useSelector((state) => state.todos.items);
  const [search, setSearch] = useState("");
  console.log(search);

  const todo = todoList.filter((item) => item.title.includes(search));

  console.log("todo:",todo);
  console.log("todolist: ", todoList);
  return (
    <div className="App">
      <h2>NotesApp</h2>
      <input
        type="text"
        placeholder="Search.."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <Box />
      <br />
      <div className="container">
        {todo.map((item) => (
          <NoteBox key={item.id} title={item.title} color={item.color}></NoteBox>
        ))}
      </div>
    </div>
  );
}

export default App;
