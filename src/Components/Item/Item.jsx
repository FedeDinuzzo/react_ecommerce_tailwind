import React from 'react'

function Item({id, name, price, image}) {

  return (
    <div>
        <div key={id} className="flex-col justify-center text-center m-2">
            <img src={image} alt="producto" className="m-auto" />
            <h3 className="">${price}</h3>
            <h3 className="">{name}</h3>
        </div>
    </div>
  )
}

export default Item