import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import ItemListContainer from "./Components/Item/ItemListContainer";
import ItemDetailContainer from "./Components/Item/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>  
      <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route exact path="/" element={<ItemListContainer />}/>        
          <Route exact path="/item" element={<ItemDetailContainer />}/>  

        </Routes>

        {/*<Footer />*/}
      </BrowserRouter>
    </>
  );
}
