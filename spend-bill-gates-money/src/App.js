import "./App.css";
import Header from "./components/Header";
import ProductCardContainer from "./components/ProductCardContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <ProductCardContainer />
      </div>
    </div>
  );
}

export default App;
