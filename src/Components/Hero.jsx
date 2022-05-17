import React, { useRef, useEffect } from 'react'
import watch from '../Images/watch.png';
import { Link } from "react-scroll";
import { gsap } from 'gsap';

function Hero() {
  let tl = gsap.timeline();
  let cursor = useRef(null);
  let posX = 0;
  let posY = 0;
  let mouseX = 0;
  let mouseY = 0;

  useEffect(() => {
    tl.to({},0.016,{
      repeat: -1,
      onRepeat: function() {
        posX += (mouseX - posX) / 10;
        posY += (mouseY - posY) / 10;
        tl.set(cursor, {
          css: {
          left: posX / 8,
          top: posY / 8,
          }
        })
      }
    })
    document.addEventListener("mousemove", function(e){
      mouseX = e.pageX;
      mouseY = e.pageY;
    })  
  })

  return (
    <section id="top" className="fondo -mt-16 min-h-screen pb-20">
      <div className="grid lg:pt-40 lg:grid-cols-2 h-auto mx-auto xl:max-w-7xl">
        <div className='lg:my-32 pt-32 lg:pt-0 px-8 xl:px-4'>
          <p className=" text-white">TAG HEUER QUALITY EVERYWHERE</p>
          <h1 className="font-bold text-5xl md:text-8xl text-white">The watch you need</h1>
          <Link to="shop" smooth={true}><button className="py-2 px-6 rounded my-8 text-xl fondo text-white shadow-inner transition ease-in hover:translate-y-1 hover:scale-105 shadow-white/20  duration-300">GO SHOPPING</button></Link>
        </div>
        <div className="m-auto max-w-2xl px-8 xl:px-4">
        <img ref={el => cursor = el} className="w-64 h-auto md:w-auto relative cover" src={watch} alt=""/>
      </div>
      </div>
    </section>
  )
}

export default Hero;