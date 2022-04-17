import React, { useState, useEffect } from 'react';
import customFetch from '../../Utils/customFetch';
import { products } from '../../Utils/products';
import ItemList from './ItemList';

function ItemListContainer() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        customFetch(1000, products)
            .then(resultado => setItems(resultado))
            .catch(error => console.log(error));
    }, [items])
    
    return (
      <>
        <div class="fondo -mt-16 min-h-screen"></div>
          <div className="w-screen bg-gray-50">
            <div className="z-10 grid mx-auto py-40 p-2 sm:grid-cols-1 md:grid-cols-2 md:max-w-2xl lg:grid-cols-3 lg:max-w-4xl xl:grid-cols-4 xl:max-w-7xl">
              <ItemList products={items} class="" />
            </div>
          </div>
      </>
    );
}

export default ItemListContainer;