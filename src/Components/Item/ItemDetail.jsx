import React from 'react';
import ItemCount from './ItemCount';
import ItemCart from './ItemCart';
import { useState } from 'react';

function ItemDetail({product}) {

    const [number, setNumber] = useState(0)

    const addToCart = (count) => {
        setNumber(count);
    }

    return (        
    <>
        <div key={product.id} className="grid grid-cols-2 justify-center text-center m-8">
            <img src={product.image} alt="producto" className="m-auto" />
            <div>
                <h3 className="">${product.price}</h3>
                <h3 className="">{product.name}</h3>
                <p className="">{product.description}</p>
                { number === 0 ? <ItemCount initial={1} stock={product.stock} onAdd={addToCart} /> : <ItemCart /> }                
            </div>
        </div>
    </>
    )
}

export default ItemDetail
