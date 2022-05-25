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
    
    //const imgMap = (product.img.map((img, index)=> ( 
    //    <img src={img} key={index} alt="" load="lazy"    
    //    className="hover:bg-gray-200 mx-auto my-1 border-2 cursor-pointer hidden" />
    //)));

    //Use the index of the thumb image, which is in an array. Big images are in another array
    
    
    //Set Big image based in the index of the thumb images. Since the indexs of the arrays correspond to each other
    //const bigImage = (index) => {
    //    setIndex(index);
    //};

    const [index, setIndex] = useState(0);
    const [img, setImg] = useState(product.img[0]);
    const [loaded, setLoaded] = useState(false);

    const newImg = (index, next = true) => {
        setLoaded(false);
        const condition = next ? index < product.img.length - 1 : index > 0;
        const nextIndex = next ? (condition ? index + 1 : 0) : (condition ? index - 1 : product.img.length - 1);
        setImg(product.img[nextIndex]);
        setIndex(nextIndex);
    };

    const previous = () => {
        newImg(index, false);
    };   

    const next = () => {
        newImg(index);
    };

    return (        
    <>
    <ScrollToTop />
    <div className="fondo -my-16 h-16 mb-6"></div>
        <div key={product.id} className="lg:grid lg:grid-cols-2 justify-center mx-auto lg:-mt-16 mb-12">
            <div className="px-4 mt-4 block xl:max-w-4xl">
                <h3 className="lg:hidden text-gray-400 text-2xl md:text-3xl">{product.name}</h3>
                <h3 className="lg:hidden text-slate-700 md:text-xl">{product.subtitle}</h3>
                <div className="relative flex items-center -mx-4 my-2 lg:my-0 md:py-6">
                    <button onClick={previous} className="opacity-40 hover:opacity-100 absolute top-center m-4 text-[fondo] text-3xl p-1 bg-gray-100 rounded-full">{'<'}</button>
                    <img src={img} alt="" onLoad={() => setLoaded(true)} 
                    className={(loaded ? 'transition duration-200 opacity-100' : 'transition duration-200 opacity-0') + " object-cover h-[30rem] md:h-[40rem] w-screen m-auto block"} />
                    <button onClick={next} className="opacity-40 hover:opacity-100 absolute top-center right-4 fondotext-[fondo] text-3xl p-1 bg-gray-100 rounded-full">{'>'}</button>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-6 my-2 m-auto w-80 md:w-3/4 lg:w-full xl:max-w-2xl">
                {product.imgMin.map((img, index)=> ( 
                    <img src={img} key={index} alt=""
                    onClick={() => setImg(product.img[index])}
                    className="hover:bg-gray-200 mx-auto h-20 md:h-auto my-1 border-2 cursor-pointer rounded-md" />
                ))}
                </div>
            </div>
            <div class="flex flex-col justify-center mx-4 md:mx-10 lg:my-48 px-6 xl:px-8 lg:py-6 lg:bg-gray-50 lg:shadow-md shadow-gray-400/30 rounded-2xl xl:ml-28 xl:max-w-xl">
                <h3 className="hidden lg:block text-gray-400 text-3xl">{product.name}</h3>
                <h3 className="hidden lg:block text-xl text-slate-700 mb-4">{product.subtitle}</h3>
                <h3 className="text-gray-500 font-bold text-2xl my-4">${product.price}</h3>
                <p className="mb-2">{product.description}</p>
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

