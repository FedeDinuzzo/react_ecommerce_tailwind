import React from 'react';
import Item from './Item';

function ItemList({ products, visible }) {

  return (
    <>
    {products.slice(0, visible).map((item, id) => 
        <Item key={id} {...item} />
    )} 
    </>
  )
};

export default ItemList