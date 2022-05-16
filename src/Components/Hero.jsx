import React from 'react'
import watch from '../Images/watch.png';

function Hero() {
  return (
    <section className="fondo -mt-16 min-h-screen pb-20">
      <div className="grid lg:pt-40 lg:grid-cols-2 h-auto mx-auto xl:max-w-7xl">
        <div className='lg:my-32 pt-32 lg:pt-0 px-8 xl:px-4'>
          <p className=" text-white">TAG HEUER QUALITY EVERYWHERE</p>
          <h1 className="font-bold text-5xl md:text-8xl text-white">The watch you need</h1>
          <button className="py-2 px-6 rounded my-8 text-xl fondo text-white"><a href="#shop">GO SHOPPING</a></button>
        </div>
        <div className="m-auto max-w-2xl px-8 xl:px-4">
        <img className="w-64  md:w-auto" src={watch} alt=""/>
      </div>
      </div>
    </section>
  )
}

export default Hero;