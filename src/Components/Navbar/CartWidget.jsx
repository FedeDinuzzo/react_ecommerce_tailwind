import React, { useContext } from 'react'
import { Context } from '../../CartContext/ContextProvider';
import { AiOutlineShoppingCart } from "react-icons/ai";

const COMMON_STYLES = " flex justify-center items-center rounded-full text-white"; 

export default function CartWidget({ className }) {

    let { cart } = useContext(Context);

    return (
        <>
        <button className = {className + COMMON_STYLES + "w-7 h-7 bg-violet-600"}>
            <AiOutlineShoppingCart class="w-5 h-5"/>
            <div className = {COMMON_STYLES + "w-5 h-5 bg-violet-900 text-xs font-semibold"}>
                {cart <= 9 ? cart : "9+"}
            </div>
        </button>
        </>
    );
}
