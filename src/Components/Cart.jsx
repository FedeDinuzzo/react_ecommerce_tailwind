import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../CartContext/ContextProvider';
import { Link } from 'react-router-dom';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export default function Cart() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  let { cart, finalPrice, removeItem, clear } = useContext(Context);
  
  const order = {}
  const db = getFirestore() 
  const [orderId, setOrderId] = useState('') 
  const inputInitialBuyer = {name:'',phone:'',email:'',confirmEmail:'',items:[''],id:''}
  const [buyer, setBuyer] = useState(inputInitialBuyer)

  const generateOrder = 2;
  const handleInputs = 2;

  useEffect(() => {
    let buyer = {
        buyer: { name, phone, email },
        items: cart,
        finalPrice,
    };
    
    console.log(buyer)

  //if (false) return
    //console.log(buyer)
    //alert('quiere terminar la compra' + name + email + phone)
  
  }, [])
  
  

  function finishBuying(){
    let buyer = {
        buyer: { name, phone, email },
        items: cart,
        finalPrice,
      };
      console.log(buyer)

  //if (false) return
    //console.log(buyer)
    //alert('quiere terminar la compra' + name + email + phone)
  }


  //debugging
  //useEffect(() => {
   // console.log(name, email, phone);
  //}, [name, email, phone])

  return (
    <div className="bg-gray-50">
    <div className="fondo -m-16 h-16 mb-8"></div>
    {cart.length === 0 ?
    <div>
    { orderId &&
        <div>
            <h1>Compra Finalizada</h1>
            <p>tu ID</p><p>{orderId}</p>
            <Link to="/"><button>Volver al Home</button></Link>
        </div>
        }
        {!orderId &&
        <div>
            <h1>Carrito vacío</h1>
            <p>¡Volvé al home para agregar productos!</p>
            <Link to="/"><button>Seguir comprando</button></Link>
        </div>
        }
        </div>:

        <div className="m-auto px-4 max-w-5xl">
            <h1 className="text-gray-500 text-4xl lg:text-5xl py-2 text-center">CART</h1>
            {cart.map(prod => (
                <div class="relative group my-6">
                    <div class="absolute -inset-1 bg-gradient-to-r from-green-300 to-gray-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"/>
                    <div class="relative bg-white ring-1 ring-gray-900/5 rounded-xl leading-none">
                        <div className="grid grid-cols-3 md:grid-cols-5 items-center text-center m-4 py-6">
                            <img src={prod.imgMin[0]} alt="product" className="m-auto h-24 w-24" />
                            <h3 className="text-gray-400 md:text-xl">{prod.name}</h3>
                            <h3 className="text-green-400 font-bold">Quantity {parseInt(prod.quantity)}</h3>
                            
                            <button onClick={() => removeItem(prod.id)} className="fondo w-24 rounded text-white p-2 mt-2 mx-auto  item-center hover:shadow-lg hover:shadow-blue-900/30 transition ease-in hover:-translate-y-1 duration-200">REMOVE</button>
                            <h3 className="text-gray-500 font-bold text-xl">${parseInt(prod.price)}</h3>
                        </div>           
                    </div>
                </div>
            ))}
           <h3 className="text-2xl text-green-400 my-4 lg:mt-12 text-center md:text-right mx-3">TOTAL: ${finalPrice}</h3>
            <div className="grid md:grid-cols-3 justify-center pb-12 lg:pb-20">
                <button onClick={clear} className="border-solid border-2 w-60 border-gray-500 mx-2 rounded p-2 my-4 hover:text-red-600 hover:border-red-600 hover:shadow-lg hover:shadow-red-600/30 transition ease-in hover:-translate-y-1 hover:scale-105 duration-200">DELETE CART</button>
                <Link to="/"><button className="border-solid border-2 w-60 border-gray-500 mx-2 rounded p-2 my-4 hover:text-black hover:border-black hover:shadow-lg hover:shadow-black/30 transition ease-in hover:-translate-y-1 hover:scale-105 duration-200">KEEP SHOPPING</button></Link>
                <button className="border-solid border-2 w-60 md:w-80 border-gray-500 mx-2 rounded p-2 my-4 hover:text-green-400 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/30 transition ease-in hover:-translate-y-1 hover:scale-105 duration-200">PROCEED TO CHECKOUT</button>
            </div>
        
            <div className="mt-32 mb-32">
                <form method='POST' onSubmit={generateOrder}>
                    <h4>generate order <br /> complete form</h4>
                    <input type="text" name='name' placeholder='Name' onChange={handleInputs} /> <br />
                    <input type="text" name='phone' placeholder='Phone' onChange={handleInputs}/> <br />
                    <input type="email" name='email' placeholder='Email' onChange={handleInputs}/> <br />
                    <input type="email" name='confirmEmail' placeholder='Confirm email' onChange={handleInputs}/> <br />
                    <button>Generate Order</button>
                </form>

                <input type="text" value={name} onChange={(e) => {setName(e.currentTarget.value)}} className=""/>
                <input type="text" value={email} onChange={(e) => {setEmail(e.currentTarget.value)}} className=""/>
                <input type="text" value={phone} onChange={(e) => {setPhone(e.currentTarget.value)}} className=""/>
                <button onClick={() => {finishBuying()}} className="">BUY</button>
            </div>
        </div>
    }
</div>
)
}

/*import React, { useContext, useState } from 'react'
import { Context } from '../CartContext/ContextProvider';
import { Link } from 'react-router-dom';
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const Cart = () => {

  const { cart, removeItem, clear } = useContext(Context);
  const order = {}
  const db = getFirestore() 
  const [orderId, setOrderId] = useState('') 
  const inputInitialBuyer = {name:'',phone:'',email:'',confirmEmail:'',items:[''],id:''}
  const [buyer, setBuyer] = useState(inputInitialBuyer)
  const condition = cart.length === 0 ;
  const finalPrice = cart.map((product) => Number(product.price * product.quantity)).reduce((a, b) => a + b, 0); 

  const handleInputs = (e) => {
    e.preventDefault()
    setBuyer({ ...buyer, [e.target.name]: e.target.value }, {})  
  }

  const generateOrder = async (e) => {
    e.preventDefault()
    order.buyer = buyer
    if (order.buyer.email !== order.buyer.confirmEmail){
        alert("ERROR:\n\nConfirme su mail")
    }else{
        const orderCollection = collection(db, 'orders') 
        await addDoc(orderCollection, order)
            .then(resp => setOrderId(resp.id))
            .catch(err => console.log(err)) 
            .finally(()=> { clear(); setBuyer(inputInitialBuyer); }) 
        order.total = 0
        order.buyer.items = cart.map(prod => {
            const id = prod.id
            const name = prod.name
            const price = prod.price * prod.quantity
            return {id, name, price};
        })  
  }
}



return(
<div className="bg-gray-50">
    <div className="fondo -m-16 h-16 mb-8"></div>
    {condition ?
    <div>
    { orderId &&
        <div>
            <h1>Compra Finalizada</h1>
            <p>tu ID</p><p>{orderId}</p>
            <Link to="/"><button>Volver al Home</button></Link>
        </div>
        }
        {!orderId &&
        <div>
            <h1>Carrito vacío</h1>
            <p>¡Volvé al home para agregar productos!</p>
            <Link to="/"><button>Seguir comprando</button></Link>
        </div>
        }
        </div>:

        <div className="m-auto px-4 max-w-5xl">
            <h1 className="text-gray-500 text-4xl lg:text-5xl py-2 text-center">CART</h1>
            {cart.map(prod => (
                <div class="relative group my-6">
                    <div class="absolute -inset-1 bg-gradient-to-r from-green-300 to-gray-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"/>
                    <div class="relative bg-white ring-1 ring-gray-900/5 rounded-xl leading-none">
                        <div className="grid grid-cols-3 md:grid-cols-5 items-center text-center m-4 py-6">
                            <img src={prod.imgMin[0]} alt="product" className="m-auto h-24 w-24" />
                            <h3 className="text-gray-400 md:text-xl">{prod.name}</h3>
                            <h3 className="text-green-400 font-bold">Quantity {parseInt(prod.quantity)}</h3>
                            
                            <button onClick={() => removeItem(prod.id)} className="fondo w-24 rounded text-white p-2 mt-2 mx-auto  item-center hover:shadow-lg hover:shadow-blue-900/30 transition ease-in hover:-translate-y-1 duration-200">REMOVE</button>
                            <h3 className="text-gray-500 font-bold text-xl">${parseInt(prod.price)}</h3>
                        </div>           
                    </div>
                </div>
            ))}
           <h3 className="text-2xl text-green-400 my-4 lg:mt-12 text-center md:text-right mx-3">TOTAL: ${finalPrice}</h3>
            <div className="grid md:grid-cols-3 justify-center pb-12 lg:pb-20">
                <button onClick={clear} className="border-solid border-2 w-60 border-gray-500 mx-2 rounded p-2 my-4 hover:text-red-600 hover:border-red-600 hover:shadow-lg hover:shadow-red-600/30 transition ease-in hover:-translate-y-1 hover:scale-105 duration-200">DELETE CART</button>
                <Link to="/"><button className="border-solid border-2 w-60 border-gray-500 mx-2 rounded p-2 my-4 hover:text-black hover:border-black hover:shadow-lg hover:shadow-black/30 transition ease-in hover:-translate-y-1 hover:scale-105 duration-200">KEEP SHOPPING</button></Link>
                <button className="border-solid border-2 w-60 md:w-80 border-gray-500 mx-2 rounded p-2 my-4 hover:text-green-400 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/30 transition ease-in hover:-translate-y-1 hover:scale-105 duration-200">PROCEED TO CHECKOUT</button>
            </div>
        
            <div className="mt-32 mb-32">
                <form method='POST' onSubmit={generateOrder}>
                    <h4>generate order <br /> complete form</h4>
                    <input type="text" name='name' placeholder='Name' onChange={handleInputs} /> <br />
                    <input type="text" name='phone' placeholder='Phone' onChange={handleInputs}/> <br />
                    <input type="email" name='email' placeholder='Email' onChange={handleInputs}/> <br />
                    <input type="email" name='confirmEmail' placeholder='Confirm email' onChange={handleInputs}/> <br />
                    <button>Generate Order</button>
                </form>
            </div>
        </div>
    }
</div>
)
}

export default Cart;
*/