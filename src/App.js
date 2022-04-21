import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import ItemListContainer from "./Components/Item/ItemListContainer";
import ItemDetailContainer from "./Components/Item/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "./Components/NotFoundPage";
import "./App.css"

export default function App() {
  return (
    <>  
      <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>   
          <Route path="/category/:category" element={<ItemListContainer />}/>      
          <Route path="/item/:id" element={<ItemDetailContainer />}/> 
          <Route path="/cart" element={<ItemDetailContainer />}/> 
          <Route path="*" element={<NotFoundPage />}/>    
        </Routes>

        {/*<Footer />*/}
      </BrowserRouter>
    </>
  );
}
