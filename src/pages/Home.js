import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <h2>Products</h2>

      <div className="container">
        {data.map((element) => {
          return <ProductCard element={element} />;
        })}
      </div>
    </>
  );
}
export default Home;
