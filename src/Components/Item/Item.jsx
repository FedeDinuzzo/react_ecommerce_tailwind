import React from 'react';
import { Link } from 'react-router-dom';
import "./item.css"

function Item({id, name, price, img}) {

  return (
    <div>
      <div class="m-4 flex flex-col justify-center">
        <div class=" relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-green-300 to-gray-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"/>
          <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-xl leading-none flex items-top justify-start space-x-6">
            <div key={id} className="h-96 justify-center text-center m-auto">
              <img src={img[0]} alt="producto" loading="lazy" className="m-auto h-72" />
              <h3 className="my-2 text-gray-500 font-bold">${price}</h3>
              <h3 className="text-gray-400">{name}</h3>
              <Link to={`/item/${id}`}>
                <button class="fondo flex rounded px-3 py-1 justify-center align-centent text-white text-lg mx-auto mt-4"
                >VIEW DETAIL</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default Item