import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import Hero from '../Hero'
import { useParams } from 'react-router-dom';
import Categories from '../Categories';
import {collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import Loader from '../Loader';

function ItemListContainer() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
  const [visible, setVisible] = useState(8);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 8) ;
  };

  const showLessItems = () => {
    setVisible((prevValue) => prevValue - visible + 8) ;
  };

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
        {loading ? <div className="bg-gray-50 h-screen grid justify-center pt-40"><Loader /></div> :  
          <div className="bg-gray-50">
            <div className="z-10 grid mx-auto pt-20 pb-16 p-2 sm:grid-cols-1 md:grid-cols-2 md:max-w-2xl lg:grid-cols-3 lg:max-w-4xl xl:grid-cols-4 xl:max-w-7xl">
              <ItemList products={items} visible={visible} />
            </div>
            <div className="pb-28">
              {items.length < visible ? <button onClick={showLessItems} className="hover:shadow-lg hover:shadow-blue-900/30 grid mx-auto fondo w-36 rounded text-white text-xl p-2 transition ease-in hover:-translate-y-1 hover:scale-105 duration-200">SHOW LESS</button>
              : <button onClick={showMoreItems} className="hover:shadow-lg hover:shadow-blue-900/30 grid mx-auto fondo w-36 rounded text-white text-xl p-2 transition ease-in hover:-translate-y-1 hover:scale-105 duration-200">LOAD MORE</button>}
            </div>
          </div>
        }
      </>
    );
}

export default ItemListContainer;