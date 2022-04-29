import React, { useContext } from 'react'
import { Context } from '../CartContext/ContextProvider';

const Cart = () => {
    let { cart, removeItem, clear, buyAll } = useContext(Context);

  return (
    <>
    <div className="fondo -m-16 h-16 mb-16"></div>
    <h3 className="">Productos en carrito: {cart.length}</h3>
    {cart.map((product, index) => (
        <div key={index} className="grid grid-cols-2 justify-center text-center m-8">
            <img src={product.image} alt="producto" className="m-auto" />
            <div>
                <h3 className="">${product.price}</h3>
                <h3 className="">{product.name}</h3>
                <h3 className="">{product.quantity}</h3>
                <button onClick={() => removeItem(product.id)}>Remove Product</button>
            </div>
        </div>
    ))}
    <button onClick={buyAll}>buy all</button>
    <button onClick={() => clear(cart.id)}>Remove all</button>
    </>
  )
}

export default Cart;

