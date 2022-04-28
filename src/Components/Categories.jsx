import React from 'react';
import { Link } from 'react-router-dom';

const COMMON_STYLES = " fondo w-24 mx-3 rounded text-white p-2 my-2"; 

function Categories() {
  return (
    <>
    <div className="max-w-screen px-12 bg-gray-50">
      <h1 className="flex justify-center align-center pt-20 text-4xl md:text-6xl font-bold">Categorias</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-lg m-auto place-items-center pt-8">
        <Link to={`/`}>
          <button className={COMMON_STYLES}>Todos</button>
        </Link>
        <Link to={`/category/Hombre`}>
          <button className={COMMON_STYLES}>Hombre</button>
        </Link>
        <Link to={`/category/Mujer`}>
          <button className={COMMON_STYLES}>Mujer</button>
        </Link>
        <Link to={`/category/Chicos`}>
          <button className={COMMON_STYLES}>Chicos</button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default Categories