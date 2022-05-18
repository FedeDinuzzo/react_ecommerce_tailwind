import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../CartContext/ContextProvider';
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { Link } from 'react-router-dom';

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