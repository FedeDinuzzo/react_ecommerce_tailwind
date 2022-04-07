import React from 'react';
import ItemCount from './ItemCount';

function ItemListContainer() {

    const onAdd = () => {
        alert('Agregaste ' + count + ' productos al carrito');
    }

    return (
        <> 
            <ItemCount initial={1} stock={6} onAdd={onAdd} />
        </>
    );
}

export default ItemListContainer;