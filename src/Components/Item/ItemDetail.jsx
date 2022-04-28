import React, { useContext } from 'react'
import { Context } from '../../CartContext/ContextProvider';
import ItemCount from './ItemCount';
import ItemCart from './ItemCart';
import "./item.css"

function ItemDetail({ product }) {

    let { cart, addToCart } = useContext(Context);

    return (        
    <>
    <div className="fondo -m-16 h-16 mb-16"></div>
        <div key={product.id} className="grid grid-cols-2 justify-center text-center m-8">
            <img src={product.image} alt="producto" className="m-auto" />
            <div>
                <h3 className="">${product.price}</h3>
                <h3 className="">{product.name}</h3>
                <p className="">{product.description}</p>
                
                     <ItemCount initial={1} stock={product.stock} onAdd={addToCart} product={product} /> 
                     <ItemCart />  
            </div>
        </div>
    </>
    )
}

export default ItemDetail
