import React, { useEffect, useState } from 'react'
import customFetch from '../../Utils/customFetch'
import { product } from '../../Utils/products'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        customFetch(2000, product)
            .then(resultado => setItem(resultado))
            .catch(error => console.log(error))
            .finally(() => {
                setLoading(false);
            })
    }, [])

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