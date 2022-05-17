import React, { useContext } from 'react';
import { Context } from '../../CartContext/ContextProvider';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';

const COMMON_STYLES = " flex justify-center items-center rounded-full text-white"; 

export default function CartWidget({ className }) {

    let location = useLocation();
    let { cart } = useContext(Context);
    
    const allQuantity = cart.map((product) => product.quantity).reduce((a, b) => a + b, 0)

    return (
        <>
        <Link to={`/cart`}>
        <button className = {className + COMMON_STYLES + "w-6 h-7 bg-slate-600"}>
            <AiOutlineShoppingCart class="text-white w-5 h-5 mx-1"/>
            {cart.length === 0 ? "" 
            : (<div className = {COMMON_STYLES + " w-6 h-6 bg-slate-800 text-xs font-semibold text-white"}>
                {location.pathname === "/cart" ? allQuantity : cart.length }
            </div>)}
        </button>
        </Link>
        </>
    );
}
