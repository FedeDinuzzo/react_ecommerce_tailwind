import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import ItemListContainer from "./Components/Item/ItemListContainer";
import ItemDetailContainer from "./Components/Item/ItemDetailContainer";
import Cart from "./Components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "./Components/NotFoundPage";
import "./App.css";
import ContextProvider from "./CartContext/ContextProvider";
import Footer from "./Components/Footer"
import Checkout from "./Components/Checkout";
import PurchaseComplete from "./Components/PurchaseComplete";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return ( 
    <>  
      <ContextProvider>
        <BrowserRouter>
          <NavBar />
          <ToastContainer />  

          <Routes>   
            <Route path="/" element={<ItemListContainer />}/>   
            <Route path="/category/:category" element={<ItemListContainer />}/>   
            <Route path="/item/:id" element={<ItemDetailContainer />}/> 
            <Route path="/cart" element={<Cart />}/>
            <Route path="/checkout" element={<Checkout />}/>
            <Route path="/purchase-id" element={<PurchaseComplete />}/>
            <Route path="*" element={<NotFoundPage />}/>    
          </Routes>

          <Footer />
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}
