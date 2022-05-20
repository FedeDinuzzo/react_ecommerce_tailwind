import React from 'react';
import Item from './Item';

function ItemList({ products, visible }) {
  //Maps the products to render them with the Item layout, in the itemList or in the ItemCategory
  //Also slices the prodcuts map to limit the visible amount and improve rendering times
  return (
    <>
    {products.slice(0, visible).map((item, id) => 
        <Item key={id} {...item} />
    )} 
    </>
  )
};

export default ItemList