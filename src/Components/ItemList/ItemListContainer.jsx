import React, { useState, useEffect } from 'react';
import customFetch from '../Utils/customFetch';
import products from '../Utils/products';
import ItemList from './ItemList';


function ItemListContainer() {

    const [items, setItems] = useState([]);

    useEffect(() => {
      customFetch(2000, products)
      .then(resultado => setItems(resultado))
      .catch(error => console.log(error));
      }, [items])
    
    return (
        <>
            <div className="grid m-auto p-2 sm:grid-cols-1 md:grid-cols-2 md:max-w-2xl lg:grid-cols-3 lg:max-w-4xl xl:grid-cols-4 xl:max-w-7xl">
                <ItemList products={items} />
            </div>
        </>
    );
}

export default ItemListContainer;