import React, { useState } from 'react';
import "./item.css"

const COMMON_STYLES = " fondo text-center h-9 w-9 rounded-full text-white"; 

const ItemCount = ({initial, stock, onAdd, product}) => {
    const [count, setCounter] = useState(initial);

    //
    const increase = () => {
        if (count < stock){
            setCounter(count + 1)}
    }
    const decrease = () => {
        if (count > initial){
            setCounter(count - 1)}
    }

    return (
        <> 
        <div className="text-center flex justify-center lg:justify-start text-3xl text-white">
            <div className="mt-4 flex flex-wrap lg:ml-0 w-56 m-2 justify-center lg:justify-start">
                <button onClick={decrease} className={COMMON_STYLES + " lg:ml-6"}>-</button>
                <div class="h-10 w-14 rounded bg-white text-black">{count}</div>
                <button onClick={increase} className={COMMON_STYLES}>+</button>
                <button onClick={() => onAdd(product, count)}
                className="fondo mt-4 flex rounded px-6 py-2 text-white text-xl shadow-lg hover:shadow-blue-900/30 transition ease-in hover:-translate-y-1 hover:scale-105 duration-200"
                >ADD TO CART</button>
            </div>   
        </div>
        </>
    );
}

export default ItemCount;