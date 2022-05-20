import React from 'react';
import { Link } from 'react-router-dom';
import "./item.css"

const COMMON_STYLES = " block m-auto lg:inline  fondo w-48 rounded px-2 py-2 text-white text-xl shadow-lg hover:shadow-blue-900/30 transition ease-in hover:-translate-y-1 hover:scale-105 duration-200"; 

function ItemCart () { 
    //When the user adds the product to the cart, they have the option to go to the cart or return to the store
    return (
        <> 
        <div className="mt-4">
            <div className="grid lg:grid-cols-2">
                <Link to={`/cart`}>
                    <button className={COMMON_STYLES}>SEE ON CART</button>
                </Link> 
                <Link to={`/`}>
                    <button className={COMMON_STYLES + " mt-4 lg:mt-0 lg:-ml-4 xl:-ml-12"}>KEEP SHOPPING</button>
                </Link>              
            </div>   
        </div>
        </>
    );
}

export default ItemCart;
