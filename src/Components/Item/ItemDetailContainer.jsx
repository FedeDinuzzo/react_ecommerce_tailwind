import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import {doc, getDoc, getFirestore } from 'firebase/firestore';
import Loader from '../Loader';

function ItemDetailContainer() {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        const db = getFirestore();
        const queryDb = doc(db, 'products', id);
        getDoc(queryDb)
        .then((res) => setItem({id: res.id, ...res.data()}))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [id]);

    return (
    <>
        {loading ? <div className="h-96 grid justify-center mt-48 pb-96"><Loader /></div> 
        : <ItemDetail product={item} /> }
    </>
    )
}

export default ItemDetailContainer