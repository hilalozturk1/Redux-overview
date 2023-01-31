import "./App.css";
import Header from "./components/Header";
import ProductCardContainer from "./components/ProductCardContainer";
import Receipt from "./components/Receipt";
import { useSelector } from "react-redux";

function App() {
  const items = useSelector((state) => state.products.items);

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
