import React, { useState } from 'react';
import "./item.css"

const COMMON_STYLES = " flex justify-center align-center h-10 w-10 rounded-full bg-[#240347] text-white "; 

const ItemCount = ({initial, stock, onAdd}) => {
    
    const [count, setCounter] = useState(initial);

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
        <div className="flex justify-center text-center text-3xl text-white">
            <div className="flex flex-wrap justify-center w-56 m-2">
                <button onClick={decrease} className={COMMON_STYLES}>-</button>
                <div class="mx-2 h-10 w-14 rounded bg-white text-slate-800">{count}</div>
                <button onClick={increase} className={COMMON_STYLES}>+</button>
                <button onClick={() => onAdd(count)}
                className="fondo flex w-full rounded px-2 py-1 m-auto justify-center align-center text-white text-2xl"
                >Add to Cart</button>
            </div>   
        </div>
        </>
    );
}

export default ItemCount;