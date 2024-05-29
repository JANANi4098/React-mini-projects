import React from 'react';
import './Product.css';
import { useContext } from 'react';
import { cartContext } from './App';
export const Product = ({ product }) => {
    const {Cart,setCart}=useContext(cartContext);

  const addCart = () => {
    setCart([...Cart, product]);
  };

  const removeCart = () => {
    setCart(Cart.filter((c) => c.id !== product.id));
  };

  const isInCart = Cart.some((c) => c.id === product.id);

  return (
    <div className="product">
      <div className="image">
        <img src={product.pic} alt={product.name} />
      </div>
      <div className="details">
        <h3>{product.name}</h3>
        <p>Price Rs: {product.amt}</p>
        {isInCart ? (
          <button className='btn-remove' onClick={removeCart}>
            Remove from Cart
          </button>
        ) : (
          <button className='btn-add' onClick={addCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};
