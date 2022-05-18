import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../CartContext/ContextProvider';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function Form({ product}) {

  const [orderId, setOrderId] = useState('') 
  const { cart, finalPrice } = useContext(Context);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const cartOrder = cart.map(prod => ("name: " + prod.name + " price: $" + prod.price + " quantity: " + prod.quantity + " id: " + prod.id));

  function finishBuying(){
    const db = getFirestore();
    const order = collection(db, 'orders')

    let buyer = {
      buyer: { name, phone, email },
      items: cartOrder,
      finalPrice,
    };

    addDoc(order, buyer).then(({ id }) => {
      setOrderId(id)
    })
  }

  return (
    <>
      <div className="mt-32 pb-32 bg-slate-700">
      <input type="text" value={name} onChange={(e) => {setName(e.currentTarget.value)}} className="m-4"/>
      <input type="text" value={email} onChange={(e) => {setEmail(e.currentTarget.value)}} className="m-4"/>
      <input type="text" value={phone} onChange={(e) => {setPhone(e.currentTarget.value)}} className="m-4"/>
      <button onClick={() => {finishBuying()}} className="">PURCHASE</button>
    </div>
     {orderId &&
        <div className="pb-72">
          <h1 className="pt-60 text-center text-green-400 text-4xl">PURCHASED COMPLETED</h1>
          <p className="pt-4 text-center text-slate-700 text-3xl">YUOR ID: </p><p>{orderId}</p>
          <Link to="/" className="mt-6 block m-auto fondo w-52 text-center rounded px-2 py-2 text-white text-xl shadow-lg hover:shadow-blue-900/30 transition ease-in hover:-translate-y-1 hover:scale-105 duration-200"><button>BACK TO HOME</button></Link>
        </div>
      }
    </>
  )
}

export default Form

/*function contactForm(){
  const $form = document.querySelector(".contact-form"),
  $inputs = document.querySelectorAll(".contact-form [required]");
  
  $inputs.forEach(input => {
      const $span = document.createElement("span");
      $span.id = input.name;
      $span.textContent = input.title;
      $span.classList.add("contact-form-error", "none")
      input.insertAdjacentElement("afterend", $span);
  });
  
  document.addEventListener("keyup", (e) => {
      if (e.target.matches(".contact-form [required]")){
          let $input = e.target,
          pattern = $input.pattern || $input.dataset.pattern;
      
          if(pattern && $input.value !== ""){
              let regex = new RegExp(pattern);
              return !regex.exec($input.value)
                  ? document.getElementById($input.name).classList.add("is-active")
                  : document.getElementById($input.name).classList.remove("is-active")
          }
      }
  });
  
  contactFormSubmitted.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const $loader = document.querySelector(".contact-form-loader"),
      $response = document.querySelector(".contact-form-response");
  
      $loader.classList.remove("none");
  
      fetch("https://formsubmit.co/ajax/federicodinuzzo98@gmail.com",{
          method: "POST",
          body: new FormData(e.target)
      })
          .then(res => res.ok?res.json():Promise.reject(res))
          .then(json => {
              console.log(json);
              $loader.classList.add("none");
              $response.classList.remove("none");
              $response.innerHTML = `<p class="form__submitted">${json.message}</p>`;
              $form.reset();
          })
          .catch(err => {
              console.log(err);
              let message = err.statusText || "Ocurrio un error al enviar, intenta nuevamente";
              $response.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
          })
          .finally(() => setTimeout(() => {
              $response.classList.add("none");
              $response.innerHTML = "";
          },3000));
  });
  }*/