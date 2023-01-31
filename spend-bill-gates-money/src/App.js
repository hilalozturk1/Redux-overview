import "./App.css";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Receipt from "./components/Receipt";

function App() {
  const item = {
    image: "https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg",
    productName: "ds",
    productPrice: 3232,
  };

  return (
    <div className="App">
      <Header />
      <ProductCard item={item} />
      <ProductCard item={item} />
      <ProductCard item={item} />
      <Receipt item={item} />
    </div>
  );
}

export default App;
