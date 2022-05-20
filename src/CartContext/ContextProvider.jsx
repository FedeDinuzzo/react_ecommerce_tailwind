import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export const Context = createContext();
export default function ContextProvider({children}) {
  
  const localCart = JSON.parse(localStorage.getItem('cart') || '[]');
  const [cart, setCart] = useState(localCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart]);

  const addToCart = (product, quantity) => {
    product.quantity = quantity;
    const productIndex = cart.findIndex(item => item.id === product.id);
    
    if (productIndex === -1) {
      setCart([...cart, product]);
      toast.success(`${product.name} added to cart`, {
        position: "bottom-left",
        width: "200px",
      })
    } else {
      const newCart = [...cart];
      newCart[productIndex].quantity += quantity;
      setCart(newCart);
      toast.info(`increased ${product.name} cart quantity`, {
        position: "bottom-left",
      })
    }   
  }

  const removeItem = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  }

  function clear() {
    setCart([]);
  }
  
  const finalPrice = cart.map((product) => Number(product.price * product.quantity)).reduce((a, b) => a + b, 0);

  const [orderId, setOrderId] = useState('');
  
  return (
    <>
      <Context.Provider value={{ cart, setCart, addToCart, removeItem, clear, finalPrice, orderId, setOrderId }}>
        {children}
      </Context.Provider>
    </>
  )
}