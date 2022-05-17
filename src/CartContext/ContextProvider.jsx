import React, { createContext, useState, useEffect } from 'react';
import { toast } from "react-toastify";

export const Context = createContext();

export default function ContextProvider({children}) {
  
  const [cart, setCart] = useState([]);
  const cartfromlocalstorage = JSON.parse(localStorage.getItem('cart')) || '[]';
  console.log(cartfromlocalstorage)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart]);

  const addToCart = (product, quantity) => {
    product.quantity = quantity;
    const productIndex = cart.findIndex(item => item.id === product.id);
    
    if (productIndex === -1) {
      setCart([...cart, product]);
      toast.info("increased product quantity", {position: "bottom-left"});
    } else {
      const newCart = [...cart];
      newCart[productIndex].quantity += quantity;
      setCart(newCart);
      toast.success(`added a new product to cart`, {position: "bottom-left"});
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
      <Context.Provider value={{ cart, setCart, addToCart, removeItem, clear, cartfromlocalstorage}}>
        {children}
      </Context.Provider>
    </>
  )
}