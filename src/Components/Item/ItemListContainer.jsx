import React, { useState, useEffect } from 'react';
import customFetch from '../../Utils/customFetch';
import { products } from '../../Utils/products';
import ItemList from './ItemList';
import Hero from '../Hero'
import { useParams } from 'react-router-dom';
import Categories from '../Categories';
import {collection, getDocs, getFirestore, query, where } from 'firebase/firestore';


function ItemListContainer() {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const { category } = useParams()

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = category ?
      query(collection(db, 'products'), where('category', '==', category))
    :
      query(collection(db, 'products'))
    getDocs(queryCollection)
    .then((res) => setItems(res.docs.map(res => ({id: res.id, ...res.data()}))))     
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  }, [category]);
    
    return (
      <>
        <Hero />
        <Categories /> 
        {loading ? <h1>cargando</h1> :  
          <div className=" bg-gray-50">
            <div className="z-10 grid mx-auto py-20 p-2 sm:grid-cols-1 md:grid-cols-2 md:max-w-2xl lg:grid-cols-3 lg:max-w-4xl xl:grid-cols-4 xl:max-w-7xl">
              <ItemList products={items} />
            </div>
          </div>
        }
      </>
    );
}

export default ItemListContainer;