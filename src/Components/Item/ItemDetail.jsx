import React from 'react';
import ItemCount from './ItemCount';

function ItemDetail({product}) {

    const onAdd = (count) => {
        alert('Agregaste ' + count + ' productos al carrito');
    }

    return (
        
    <div>
        <div key={product.id} className="grid grid-cols-2 justify-center text-center m-8">
            <img src={product.image} alt="producto" className="m-auto" />
            <div>
                <h3 className="">${product.price}</h3>
                <h3 className="">{product.name}</h3>
                <p className="">{product.description}</p>
                <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
            </div>
        </div>
    </div>
    )
}

export default ItemDetail
