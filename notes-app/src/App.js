import "./App.css";
import Box from "./components/Box";
import NoteBox from "./components/NoteBox";

function App() {
  return (
    <div className="App">
      <h2>NotesApp</h2>
      <input type="text" placeholder="Search.." />
      <Box />
      <br />
      <div className="container">
        <NoteBox /><NoteBox /><NoteBox /><NoteBox /><NoteBox /><NoteBox />  
      </div>
    </div>
  );
}

export default App;
