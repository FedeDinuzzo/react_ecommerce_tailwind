import React from 'react'
import Item from './Item'

function ItemList({ products }) {

  return (
    <>
    {products.map((item, id) => 
        <Item key={id} {...item} />
    )}
    </>
  )
}

export default ItemList