import React from 'react'
import Item from '../Item'

function ItemList({products}) {
  return (
    products.map(p => (
        <Item
        key={p.id}
        name={p.name}
        description={p.description}
        price={p.price}
        image={p.image} 
        />
    ))
  )
}

export default ItemList