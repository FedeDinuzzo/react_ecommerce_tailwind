import React, { useContext, useState } from 'react'
import { Context } from '../../CartContext/ContextProvider';
import ItemCount from './ItemCount';
import ItemCart from './ItemCart';
import "./item.css";
import ScrollToTop from '../ScrollToTop';

function ItemDetail({ product }) {
    let { addToCart } = useContext(Context);
    const [count, setCount] = useState(0);

    const onAdd = (product, count) => {
        setCount(count);
        addToCart(product, count);
    };
    
    //Use the index of the thumb image, which is in an array. Big images are in another array
    const [index, setIndex] = useState(0);
    
    //Set Big image based in the index of the thumb images. Since the indexes of the arrays correspond to each other
    const bigImage = (index) => {
        setIndex(index);
    };

    return (        
    <>
    <ScrollToTop />
    <div className="fondo -m-16 h-16 mb-4 lg:mb-20"></div>
        <div key={product.id} className="grid lg:grid-cols-2 justify-center mx-auto xl:max-w-7xl lg:-mt-16 mb-12">
            <div className="m-4">
                <h3 className="lg:hidden text-gray-400 text-2xl md:text-3xl">{product.name}</h3>
                <h3 className="lg:hidden text-slate-700 md:text-xl">{product.subtitle}</h3>
                <div className="py-2 md:py-6">
                    <img src={product.img[index]} alt="" load="lazy" className="w-screen px-2 md:px-60 lg:px-24" />
                </div>
                <div className="grid grid-cols-3 md:grid-cols-6">
                {product.imgMin.map((img, index)=> ( 
                    <img src={img} key={index} alt="" load="lazy"
                    onClick={() => bigImage(index)}
                    className="hover:bg-gray-200 mx-auto my-1 border-2 cursor-pointer" />
                ))}
                </div>
            </div>
            <div class="flex flex-col justify-center mx-6 md:mx-10">
                <h3 className="hidden lg:block text-gray-400 text-3xl">{product.name}</h3>
                <h3 className="hidden lg:block text-xl text-slate-700 mb-4">{product.subtitle}</h3>
                <h3 className="text-gray-500 font-bold text-2xl mb-4">${product.price}</h3>
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

