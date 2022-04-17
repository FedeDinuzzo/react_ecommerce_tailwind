import React from 'react';
import { Link } from 'react-router-dom';
import "./item.css"

function Item({id, name, price, image}) {

  return (
    <div>
      <div class="m-4 flex flex-col justify-center">
        <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"/>
          <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-xl leading-none flex items-top justify-start space-x-6">
            <div key={id} className="flex-col justify-center text-center m-auto">
              <img src={image} alt="producto" className="m-auto " />
              <h3 className="my-2">${price}</h3>
              <h3 className="">{name}</h3>
              <Link to={`/item`}>
                <button class="fondo flex rounded px-3 py-1 justify-center align-centent text-white text-2xl mx-auto mt-4"
                >View Detail</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default Item