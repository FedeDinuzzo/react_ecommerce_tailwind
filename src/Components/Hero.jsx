import React from 'react'

function Hero() {
  return (
    <section className="fondo -mt-16 min-h-screen">
      <div className="grid grid-cols-2 pt-48 justify-center align-center xl:max-w-7xl mx-auto">
        <div className=''>
          <h1 className="pt-16 font-bold text-8xl text-white">Tienda Online NFT Market</h1>
          <button className="p-2 rounded mt-16 text-3xl bg-white">Ver Productos</button>
        </div>
        <img className="m-auto rounded max-h-96" src="https://cdn.mos.cms.futurecdn.net/cQxWKLFpJYCFdJgc4276ag.jpg" alt=""/>
      </div>
    </section>
  )
}

export default Hero;