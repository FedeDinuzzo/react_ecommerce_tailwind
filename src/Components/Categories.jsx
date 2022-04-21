import React from 'react';
import { Link } from 'react-router-dom';

function Categories() {

  const COMMON_STYLES = " fondo w-24 mx-3 rounded text-white p-2"; 

  return (
    <>
    <h1 className="flex justify-center align-center pt-20 bg-gray-50 text-6xl font-bold">Categorias</h1>
    <div className="flex justify-center align-center pt-8 bg-gray-50">
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
    </>
  )
}

export default Categories