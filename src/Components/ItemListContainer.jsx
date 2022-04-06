import React from 'react';
import ItemCount from './ItemCount';

function ItemListContainer() {
    
    
    return (
        <> 
            <ItemCount initial={1} stock={6} />
        </>
    );
}

export default ItemListContainer;