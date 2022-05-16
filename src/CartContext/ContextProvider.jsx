import React, {createContext, useState } from 'react';

export const Context = createContext();

export default function ContextProvider({children}) {
  
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    product.quantity = quantity;
    const productIndex = cart.findIndex(item => item.id === product.id);
    
    if (productIndex === -1) {
      setCart([...cart, product]);
    } else {
      const newCart = [...cart];
      newCart[productIndex].quantity += quantity;
      setCart(newCart);
    }   
    console.log(product)
  }

  const removeItem = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  }

  function clear() {
    setCart([]);
  }
  
  return (
    <>
      <Context.Provider value={{ cart, setCart, addToCart, removeItem, clear }}>
        {children}
      </Context.Provider>
    </>
  )
}