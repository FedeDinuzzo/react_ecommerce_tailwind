import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../../CartContext/ContextProvider';
import ItemCount from './ItemCount';
import ItemCart from './ItemCart';
import "./item.css";

function ItemDetail({ product }) {

    let { addToCart } = useContext(Context);

    const [count, setCount] = useState(0);

    const onAdd = (product, count) => {
        setCount(count);
        addToCart(product, count);
    }
    
    const [index, setIndex] = useState(0);
    
    const bigImage = (index) => {
        setIndex(index) 
    }
    
    /*useEffect(() => {
        
        .then((index) => setIndex(index))
        .catch(error => console.log(error))
    }, [index]);*/

    return (        
    <>
    <div className="fondo -m-16 h-16 mb-16"></div>
        <div key={product.id} className="grid lg:grid-cols-2 justify-center text-center mx-auto xl:max-w-7xl">
            <div className="m-4 ">
                <div className="h-96 lg:h-auto">
                    <img src={product.img[index]} alt="" className="w-1/2 m-auto sm:w-72" />
                </div>
                <div className="flex">
                {product.imgMin.map((img, index)=> ( 
                    <img src={img} key={index} alt="" 
                    onClick={() => bigImage(index)}
                    className="m-auto" />
                ))}
                </div>
            </div>
            <div class="m-4 mt-20">
                <h3 className="">${product.price}</h3>
                <h3 className="">{product.name}</h3>
                <h3 className="">{product.subtitle}</h3>
                <p className="">{product.description}</p>
                { count === 0 ? 
                    <ItemCount initial={1} stock={product.stock} onAdd={onAdd} product={product} />
                    : <ItemCart product={product} />
                }
            </div>
        </div>
    </>
    )
}

export default ItemDetail

