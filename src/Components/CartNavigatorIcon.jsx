import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const COMMON_STYLES =
    " flex justify-center items-center rounded-full text-teal-200 ";

export default function CartNavigatorIcon({ count, className}) {
    return (
        <> 
        <button className = {className + COMMON_STYLES + " relative w-8 h-8 bg-teal-600 "}>
            <AiOutlineShoppingCart />
            <div className = {COMMON_STYLES + " w-6 h-6 bg-blue-500 text-xs absoulte -top-2 -right-2 font-semibold"}>
                {count  <= 9 ? count : "9+"}
            </div>
        </button>
        </>
    );
}
