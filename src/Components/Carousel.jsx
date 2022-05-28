import React, { useState } from 'react';

function Carousel({ product }) {
    const [index, setIndex] = useState(0);

    //Unified logic to use in prev and next buttons
    const newImg = (index, next = true) => {
            const condition = next ? index < product.img.length - 1 : index > 0;
            const nextIndex = next ? (condition ? index + 1 : 0) : (condition ? index - 1 : product.img.length - 1);
            setIndex(nextIndex);    
    };

    const previous = () => {
        newImg(index, false);
    };   

    const next = () => {
        newImg(index);
    };

    //Change the image according to the small one and update the index to keep it when using newImg
    const NewImgThumb = (index) => {
        setIndex(index);
    };

    //Since the TTFB response lasts 1 second and we are not using CDN or paid firebase, we are going to bring all the images at once, so that the carousel works quickly
    const imgCarousel = product.img.map((img, indexx)=> ( 
        <img src={img} key={indexx} alt="" load="lazy"
        className={index === indexx ? 'object-cover h-[30rem] md:h-[40rem] w-screen m-auto block' : 'hidden'} />
    ));

  return (
    <>
        <div className="relative flex items-center -mx-4 my-2 lg:my-0 md:py-6">
            <button onClick={previous} className="opacity-40 hover:opacity-100 absolute top-center m-4 text-[fondo] text-3xl p-1 bg-gray-100 rounded-full">{'<'}</button>
            {imgCarousel}
            <button onClick={next} className="opacity-40 hover:opacity-100 absolute top-center right-4 fondotext-[fondo] text-3xl p-1 bg-gray-100 rounded-full">{'>'}</button>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 my-2 m-auto w-80 md:w-3/4 lg:w-full xl:max-w-2xl">
            {product.imgMin.map((img, index)=> ( 
            <img src={img} key={index} alt="" height="80" width="80"
            onClick={() => NewImgThumb(index)}
            className="hover:bg-gray-200 mx-auto h-20 md:h-auto my-1 border-2 cursor-pointer rounded-md" />
            ))}
        </div>
    </>
  )
}

export default Carousel