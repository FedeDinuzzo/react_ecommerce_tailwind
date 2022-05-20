import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../CartContext/ContextProvider';
import { Link } from 'react-router-dom';

export default function PurchaseComplete() {
  const { orderId, setOrderId } = useContext(Context);
  const [showOrderId, setShowOrderId] = useState(orderId);

  //Delete the order to be able to generate a new one
  function clearOrder() {
    setOrderId('');
  }

  //Because of navBar and Footer we reset de order at any interaction
  window.addEventListener('click', clearOrder)

  //Keeps the orderId visible for the user
  useEffect(() => {
    setShowOrderId(orderId)
  }, [])
  
  return (
    <>
    <div className="fondo -m-16 h-16 mb-0"></div>
    <div className="pb-72">
        <h1 className="pt-60 text-center text-green-400 text-4xl">PURCHASED COMPLETED</h1>
        <p className="pt-4 text-center text-slate-700 text-3xl">YOUR ORDER ID: {showOrderId} </p>
        <Link to="/"><button className="mt-6 block m-auto fondo w-52 text-center rounded px-2 py-2 text-white text-xl shadow-lg hover:shadow-blue-900/30 transition ease-in hover:-translate-y-1 hover:scale-105 duration-200">BACK TO HOME</button></Link>
    </div>
    </>
  )
}