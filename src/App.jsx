import { useState,createContext } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import Home from './Home';
import ViewCart from './ViewCart';
export const cartContext=createContext();
function App() {
  const [Cart, setCart] = useState([]);
  
  return (
   <cartContext.Provider value={{Cart,setCart}}>
     <BrowserRouter>
      <Header Cart={Cart}/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home  />} />
          <Route path='/cart' element={<ViewCart/>} />
        </Routes>
      </div>
    </BrowserRouter>
   </cartContext.Provider>
  );
}

export default App;
