import React from 'react'
import Item from './Item'

function ItemList({products}) {

  return (
    <>
    {products.map((p, id) => 
        <Item key={id} {...p} />
    )}
    </>
  )
}

export default ItemList