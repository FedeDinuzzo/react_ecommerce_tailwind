import React, {createContext, useState } from 'react';

export const Context = createContext();

export default function ContextProvider({children}) {
  
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {

      setCart(...cart, product);
    
  }

  const removeItem = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  }

  function clear() {
    setCart([]);
  }

  function buyAll(product) {
    console.log(product)
  }
  
  return (
    <>
      <Context.Provider value={{ cart, setCart, addToCart, removeItem, clear, buyAll }}>
        {children}
      </Context.Provider>
    </>
  )
}