import React from 'react';
import { Link } from 'react-router-dom';


function Categories() {
  return (
    <>
    <h1 className="flex justify-center align-center pt-32 bg-gray-50 text-6xl font-bold">Categorias</h1>
    <div className="flex justify-center align-center pt-8 bg-gray-50">
      <Link to={`/category/Hombre`}>
        <button className="mx-4 rounded text-white p-2 bg-slate-500">Hombre</button>
      </Link>
      <Link to={`/category/Mujer`}>
        <button className="mx-4 rounded text-white p-2 bg-slate-500">Mujer</button>
      </Link>
      <Link to={`/category/Chicos`}>
        <button className="mx-4 rounded text-white p-2 bg-slate-500">chicos</button>
      </Link>
    </div>
    </>
  )
}

export default Categories