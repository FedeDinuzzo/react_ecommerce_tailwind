import React, { useContext } from 'react'
import { Context } from '../CartContext/ContextProvider';
import { Link } from 'react-router-dom';

const Cart = () => {
  let { cart, removeItem, clear, buyAll } = useContext(Context);

  return (
    <>
    <div className="fondo -m-16 h-16 mb-16"></div>
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
    <p><button onClick={buyAll}>buy all</button></p>
    <p><button onClick={() => clear(cart.id)}>Remove all</button></p>
    { cart.length === 0 ? <Link to={`/`}><button onClick={buyAll}>Back to Shop</button></Link> : <button onClick={buyAll}>Finish Checkout</button> }
    </>
  )
}

export default Cart;

