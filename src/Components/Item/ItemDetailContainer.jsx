import React, { useEffect, useState } from 'react';
import customFetch from '../../Utils/customFetch';
import { products } from '../../Utils/products';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    const filterId = products.filter(item => item.id === Number(id))

    useEffect(() => {
        customFetch(1000, filterId)
            .then(res => setItem(res))
            .catch(error => console.log(error))
            .finally(() => { 
                setLoading(false);
            })
    }, [id])

    console.log(item)

    return (
    <>
        {loading ? (
            <h1>cargando</h1>
        ) : (
            <ItemDetail product={item} />
        )}
    </>
    )
}

export default ItemDetailContainer