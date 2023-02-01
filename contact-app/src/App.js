import "./App.css";
import Contacts from "./components/Contacts";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Edit from "./components/Contacts/Edit";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Contacts />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
