import React, { useState, useEffect, useContext } from "react";
import { Context } from '../CartContext/ContextProvider';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  let { cart, setTotal } = useContext(Context);

  function finishBuying(){
    let buyer = {
        buyer: { name, phone, email },
        items: cart,
        setTotal,
      };

    if (false) return
    //console.log(buyer)
    //alert('quiere terminar la compra' + name + email + phone)
  }

  //debugging
  useEffect(() => {
    console.log(name, email, phone)
  }, [name, email, phone])

  return (
    <>
      <input type="text" value={name} onChange={(e) => {setName(e.currentTarget.value)}} className=""/>
      <input type="text" value={email} onChange={(e) => {setEmail(e.currentTarget.value)}} className=""/>
      <input type="text" value={phone} onChange={(e) => {setPhone(e.currentTarget.value)}} className=""/>
      <button onClick={() => {finishBuying()}} className="">BUY</button>
    </>
  )
}

export default Form