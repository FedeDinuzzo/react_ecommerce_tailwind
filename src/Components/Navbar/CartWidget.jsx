import React, { useContext } from 'react'
import { Context } from '../../CartContext/ContextProvider';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';

const COMMON_STYLES = " flex justify-center items-center rounded-full text-white"; 

export default function CartWidget({ className }) {

    let { cart } = useContext(Context);

    return (
        <>
        <Link to={`/cart`}>
        <button className = {className + COMMON_STYLES + "w-6 h-7 bg-violet-600"}>
            <AiOutlineShoppingCart class="w-5 h-5 mx-1"/>
            <div className = {COMMON_STYLES + "w-5 h-5 p-1 bg-violet-900 text-xs font-semibold"}>
                {cart.length <= 9 ? cart.length : "9+"}
            </div>
        </button>
        </Link>
        </>
    );
}
