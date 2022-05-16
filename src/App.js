import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import ItemListContainer from "./Components/Item/ItemListContainer";
import ItemDetailContainer from "./Components/Item/ItemDetailContainer";
import Cart from "./Components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "./Components/NotFoundPage";
import "./App.css"
import ContextProvider from "./CartContext/ContextProvider";
import Form from "./Components/Form";

export default function App() {
  return (
    <>  
      <ContextProvider>
        <BrowserRouter>
          <NavBar />
        
          <Routes>
          <Route path="/Form" element={<Form />}/>   
            <Route path="/" element={<ItemListContainer />}/>   
            <Route path="/category/:category" element={<ItemListContainer />}/>      
            <Route path="/item/:id" element={<ItemDetailContainer />}/> 
            <Route path="/cart" element={<Cart />}/>
            <Route path="*" element={<NotFoundPage />}/>    
          </Routes>

          {/*<Footer />*/}
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}
