import React, { useState, useEffect } from 'react';
import customFetch from '../../Utils/customFetch';
import { products } from '../../Utils/products';
import ItemList from './ItemList';
import Hero from '../Hero'
import { useParams } from 'react-router-dom';
import Categories from '../Categories'


function ItemListContainer() {

    const [items, setItems] = useState([])
    const [filterItems, setFilterItems] = useState([])
    const { category } = useParams()
    const filterCat = products.filter((product) => product.category === category)

    useEffect(() => {
        customFetch(1000, products)
          .then(res => setItems(res))
          .catch(error => console.log(error));
    }, [items])
    
    return (
      <>
        <Hero />
        <Categories />    
        <div class="min-h-screen">
          <div className="w-screen bg-gray-50">
            <div className="z-10 grid mx-auto py-40 p-2 sm:grid-cols-1 md:grid-cols-2 md:max-w-2xl lg:grid-cols-3 lg:max-w-4xl xl:grid-cols-4 xl:max-w-7xl">
            <ItemList products={items} />
            </div>
          </div>
        </div>  
      </>
    );
}

export default ItemListContainer;