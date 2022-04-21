import React from 'react'

function Hero() {
  return (
    <section className="fondo -mt-16 min-h-screen">
      <div className="grid lg:grid-cols-2 h-screen mx-auto justify-center align-center xl:max-w-7xl">
        <div className='my-auto pt-16 xl:pt-0 px-8 xl:px-4'>
          <h1 className="font-bold text-7xl md:text-8xl text-white">Tienda Online NFT Market</h1>
          <button className="p-2 rounded mt-12 text-3xl bg-white">Ver Productos</button>
        </div>
        <img className=" m-auto px-8 xl:px-4 rounded" src="https://cdn.mos.cms.futurecdn.net/cQxWKLFpJYCFdJgc4276ag.jpg" alt=""/>
      </div>
    </section>
  )
}

export default Hero;