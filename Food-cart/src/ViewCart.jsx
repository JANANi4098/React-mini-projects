import { cartContext } from './App';
import './Cart.css';
import { useEffect, useState,useContext } from 'react';


const ViewCart = () => {
  const [total, setTotal] = useState(0);
const{Cart,setCart}=useContext(cartContext);
  useEffect(() => {
    setTotal(Cart.reduce((acc, curr) => acc + parseInt(curr.amt, 10), 0));
  }, [Cart]);

  return (
    <>
      <h1 className='cart-heading'>Cart Products</h1>
      <div className="cart-container">
        {Cart.length === 0 ? (
          <p>No products in the cart.</p>
        ) : (
          Cart.map((product) => (
            <div className="cart-product" key={product.id}>
              <div className="img">
                <img src={product.pic} alt={product.name} />
              </div>
              <div className="cart-product-details">
                <h3>{product.name}</h3>
                <p>Price: Rs {product.amt}</p>
                <button onClick={() => setCart(Cart.filter((c) => c.id !== product.id))}>
                  Remove from Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <h3 className='cart-amount'>Total Amount is: Rs {total}</h3>
    </>
  );
};

export default ViewCart;
