import React from 'react'

function Categories() {
  return (
    <>
    <h1 className="flex justify-center align-center pt-32 bg-gray-50 text-6xl font-bold">Categorias</h1>
    <div className="flex justify-center align-center pt-8 bg-gray-50">
    <button className="mx-4 rounded text-white p-2 bg-slate-500">Hombre</button>
    <button className="mx-4 rounded text-white p-2 bg-slate-500">Mujer</button>
    <button className="mx-4 rounded text-white p-2 bg-slate-500">chicos</button>
    </div>
    </>
  )
}

export default Categories