import React, { useEffect, useState } from 'react';

import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';


const STYLES_LABEL = " block w-72 lg:w-80 mx-auto text-slate-500 font-bold"; 
const STYLES_FORM = " block border-solid border-2 w-72 mb-6 lg:w-80 border-gray-200 rounded-lg p-2 pl-4 my-4 mx-auto";

function Form() {
  //Form varaibles
  const initialValues = { name: "", email: "", phone: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  //
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value});
    setIsSubmit(true);
  }

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  //Set form errors
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  //Form validations
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
    } else if(values.phone.length < 11) {
      errors.phone = "Phone must have exactly 11 numbers"
    } else if(values.phone.length > 11) {
      errors.phone = "Phone must have exactly 11 numbers"
    }
    return errors;
  }

  //If form is submitted generate order in firestore and clear cart
  function finishBuying(){
    const db = getFirestore();
    const order = collection(db, 'orders');

    if(Object.keys(formErrors).length === 0 && isSubmit === true){
      const buyer = {
        buyer: formValues,
        items: cartOrder,
        finalPrice,
      };

      addDoc(order, buyer).then(({ id }) => {
        setOrderId(id)
      })

      clear()
    }
  }

  return (
    <>
    <div className="fondo -m-16 h-16 mb-0"></div>
    { cart.length === 0 && isSubmit === false ? <EmptyCart /> :
    <div className="pt-32 pb-32 bg-gray-50">
      <div class="relative group block m-auto max-w-md bg-gray-50 rounded-lg ">
        <div class="absolute mx-8 md:mx-0 -inset-1 bg-gradient-to-r from-green-300 to-gray-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"/>
        <div class="relative mx-8 md:mx-0 py-6 bg-white ring-1 ring-gray-900/5 rounded-xl leading-none">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center my-4 mb-8 text-green-400 text-2xl">Purchase Form</h1>
            <div>
              <label className={STYLES_LABEL}>Name</label>
              <input 
              type="text" 
              name="name"
              placeholder="Full Name" 
              onChange={handleChange} 
              value={formValues.name} 
              className={STYLES_FORM}
              />
            </div> 
            <p className="text-red-500 text-center -mt-2 mb-4">{formErrors.name}</p>
            <div>
              <label className={STYLES_LABEL}>Email</label>
              <input 
              type="email" 
              name="email"
              placeholder="Email Adress" 
              onChange={handleChange} 
              value={formValues.email} 
              className={STYLES_FORM}
              />
            </div>
            <p className="text-red-500 text-center -mt-2 mb-4">{formErrors.email}</p>
            <div>
              <label className={STYLES_LABEL}>Phone Number</label>
              <input 
              type="number" 
              name="phone"
              placeholder="Phone Number" 
              onChange={handleChange} 
              value={formValues.phone} 
              className={STYLES_FORM}
              />
            </div>
            <p className="text-red-500 text-center -mt-2 mb-4">{formErrors.phone}</p>
            <button
            type="submit" 
            value="PURCHASE"
            onChange={handleChange}
            onClick={() => finishBuying() && clear()}
            className="fondo block m-auto w-48 rounded px-2 py-2 mt-6 mb-4 text-white text-xl shadow-lg hover:shadow-blue-900/30 transition ease-in hover:-translate-y-1 hover:scale-105 duration-200">
            PURCHASE
            </button>
          </form>
        </div>
      </div>
    </div>
    }
    { orderId &&
      <div className="pb-72">
        <h1 className="pt-60 text-center text-green-400 text-4xl">PURCHASE COMPLETED</h1>
        <p className="pt-4 text-center text-slate-700 text-3xl">YOUR ORDER ID: {orderId}</p>
        <Link to="/"><button className="mt-6 block m-auto fondo w-52 text-center rounded px-2 py-2 text-white text-xl shadow-lg hover:shadow-blue-900/30 transition ease-in hover:-translate-y-1 hover:scale-105 duration-200">BACK TO HOME</button></Link>
      </div>
    }
    </>
  )
}

export default Checkout