import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const COMMON_STYLES =
    //separar el texto de las comillas en las variables de estilos para el correcto funcionamiento
    " flex justify-center items-center rounded-full text-white "; 

export default function CartWidget({ count, className }) {
    return (
        <> 
        <button className = {className + COMMON_STYLES + "relative w-7 h-7 bg-slate-700"}>
            <AiOutlineShoppingCart class="w-5 h-5"/>
            <div className = {COMMON_STYLES + "w-5 h-5 bg-slate-900 text-xs absolute -top-2 -right-2 font-semibold"}>
                {count  <= 9 ? count : "9+"}
            </div>
        </button>
        </>
    );
}
