import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import ItemListContainer from "./Components/Item/ItemListContainer";
import ItemDetailContainer from "./Components/Item/ItemDetailContainer";

export default function App() {
  return (
    <>  
      <NavBar />
      <ItemDetailContainer />
      <ItemListContainer />
    </>
  );
}
