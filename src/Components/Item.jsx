import React from 'react'
import ItemCount from './ItemCount';

function Item({id, name, description, price, image}) {
  return (
    <div>
        <div key={id} className="flex-col justify-center text-center m-2">
            <h3 className="">{name}</h3>
            <p className="">{description}</p>
            <h3 className="">{price}</h3>
            <img src={image} alt="producto" className="m-auto" />
            <ItemCount initial={1} stock={6} />
        </div>
    </div>
  )
}

export default Item