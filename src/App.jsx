import './App.css'; 
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartProvider from './Context/CartContext';

export const CartContext = React.createContext([]);
console.log ('CartContext:', CartContext)


function App() {
  return ( 
  <>
  <BrowserRouter>
  <CartProvider>
  <NavBar />
  <Routes>
  <Route path='/' element={ <ItemListContainer/>} />
  <Route path='/categoria/:categoriaId' element={ <ItemListContainer/>} />
  <Route path='/detalle/:detalleId' element={ <ItemDetailContainer/>} />
  <Route path='/cart' element={<Cart/> } />
  </Routes>
  </CartProvider>
  </BrowserRouter>
  </>
  );
}

export default App;
