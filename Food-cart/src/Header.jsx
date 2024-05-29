import { Link } from 'react-router-dom';
import "./Header.css"
export const Header = ({Cart}) => {
  return (
    <div className='navbar'>
      <div className="logo">
        Food cart
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Cart"><span className='cart-count'>{Cart.length}</span>View Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
