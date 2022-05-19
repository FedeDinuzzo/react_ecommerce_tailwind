import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../CartContext/ContextProvider';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function Form() {
  const [orderId, setOrderId] = useState('') 
  const { cart, finalPrice, clear } = useContext(Context);
  const cartOrder = cart.map(prod => ("name: " + prod.name + " price: $" + prod.price + " quantity: " + prod.quantity + " id: " + prod.id));
  
  const initialValues = { name: "", email: "", phone: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormValues({...formValues, [name]: value});
    setIsSubmit(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required"
    } else if(values.name.length < 6) {
      errors.name = "Name must be more than 6 characters"
    } else if(values.name.length > 30) {
      errors.name = "Name cannot exceed more than 30 characters"
    }
    if (!values.email) {
      errors.email = "Email is required"
    } else if(!regex.test(values.email)) {
      errors.email = "This is not Valid Email"
    }
    if (!values.phone) {
      errors.phone = "Phone is required"
    } else if(values.phone.length == 11) {
      errors.phone = "Phone must have exactly 11 numbers"
    }
    return errors;
  }

  function finishBuying(){

    const db = getFirestore();
    const order = collection(db, 'orders');

    const buyer = {
      buyer: formValues,
      items: cartOrder,
      finalPrice,
    };

    addDoc(order, buyer).then(({ id }) => {
      setOrderId(id)
    })
  }

  return (
    <>
    <div className="fondo -m-16 h-16 mb-4 lg:mb-20"></div>
    <div className="mt-32 pb-32 bg-slate-700 text-center">
      <h1 className="text-center">Purchase Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input 
          type="text" 
          name="name"
          placeholder="Full Name" 
          onChange={handleChange} 
          value={formValues.name} 
          className="block border-solid border-2 w-60 border-gray-500 rounded p-1 my-4 mx-auto"
          />
        </div> 
        <p>{formErrors.name}</p>
        <div>
          <label>Email</label>
          <input 
          type="email" 
          name="email"
          placeholder="Email Adress" 
          onChange={handleChange} 
          value={formValues.email} 
          className="block border-solid border-2 w-60 border-gray-500 rounded p-1 my-4 mx-auto"
          />
        </div>
        <p>{formErrors.email}</p>
        <div>
          <label>Phone Number</label>
          <input 
          type="number" 
          name="phone"
          placeholder="Phone Number" 
          onChange={handleChange} 
          value={formValues.phone} 
          className="block border-solid border-2 w-60 border-gray-500 rounded p-1 my-4 mx-auto"
          />
        </div>
        <p>{formErrors.phone}</p>
        <button
        type="submit" 
        value="PURCHASE"
        onChange={handleChange}
        className="fondo w-48 rounded px-2 py-2 text-white text-xl shadow-lg hover:shadow-blue-900/30 transition ease-in hover:-translate-y-1 hover:scale-105 duration-200">SEND INFORMATION</button>
      </form>
    </div>
    {Object.keys(formErrors).length === 0 && isSubmit ?  <button onClick={() => finishBuying()}>PURCHASE</button> : '' }
    {orderId &&
        <div className="pb-72">
          <h1 className="pt-60 text-center text-green-400 text-4xl">PURCHASED COMPLETED</h1>
          <p className="pt-4 text-center text-slate-700 text-3xl">YOUR ORDER ID: {orderId}</p>
          <Link to="/" ><button onClick={clear()} className="mt-6 block m-auto fondo w-52 text-center rounded px-2 py-2 text-white text-xl shadow-lg hover:shadow-blue-900/30 transition ease-in hover:-translate-y-1 hover:scale-105 duration-200">BACK TO HOME</button></Link>
        </div>}
    </>
  )
}

export default Form