import React from 'react';
import { Link } from 'react-router-dom';
import "./item.css"

function ItemCart () { 
    return (
        <> 
        <div className="flex justify-center text-center text-3xl text-white">
            <div className="flex flex-wrap justify-center w-56 m-2">
                <Link to={`/cart`}>
                    <button className="fondo flex w-full rounded px-2 py-1 m-auto justify-center align-center text-white text-2xl">See On Cart</button>
                </Link> 
                <Link to={`/`}>
                    <button className="fondo flex w-full rounded px-2 py-1 mt-4 m-auto justify-center align-center text-white text-xl">Continue Shopping</button>
                </Link>              
            </div>   
        </div>
        </>
    );
}

export default ItemCart;
