import React, { useState } from 'react';

const ItemCount = ({initial, stock}) => {
    
    const [count, setCounter] = useState(initial);

    const increase = () => {
        if (count < stock){
            setCounter(count + 1)}
    }
    const decrease = () => {
        if (count > initial){
            setCounter(count - 1)}
    }
    const onAdd = () => {
        alert('Agregaste ' + count + ' productos al carrito');
    }

    return (
        <> 
        <div class="flex justify-center h-screen bg-gradient-to-r from-slate-600 text-center text-3xl text-white">
            <div class="flex m-2">
                <button onClick={decrease}
                class="flex justify-center align-center h-10 w-10 rounded-full bg-slate-500 text-white"
                >-</button>

                <div class="mx-2 h-10 w-14 rounded bg-white text-slate-800"
                >{count}</div>

                <button onClick={increase}
                class="flex justify-center align-center h-10 w-10 rounded-full bg-slate-500 text-white"
                >+</button>

                <div>
                <button onClick={onAdd}
                class="flex ml-4 rounded px-2 py-1 justify-center align-center bg-slate-900 text-white text-2xl"
                >Agregar Al Carrito</button>
                </div>  
            </div>   
        </div>
        </>
    );
}

export default ItemCount;