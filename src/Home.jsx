import data from "./assets/Products.json"
import { useState } from "react";
import { Product } from "./Product";
import './Home.css';
const Home = () => {
  console.log(data);
  const [products]=useState(data);
    return (

      <div className="product-container">
      { products.map((product)=>(<Product key={product.id} product={product}></Product>))}
      </div>
    );
  };
  
  export default Home;
  