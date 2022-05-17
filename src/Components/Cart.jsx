import React, { useContext, useState } from 'react'
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
            .catch(err => console.npg(err)) 
            .finally(()=> { clear(); setBuyer(inputInitialBuyer); }) 
        order.total = 0
        order.buyer.items = cart.map(prod => {
            const id = prod.id
            const name = prod.item.title
            const price = prod.item.price * prod.quantity
            return {id, name, price}
        })
  }
}

  /*return (
    <>
    <div className="fondo -m-16 h-16 mb-16"></div>
    {cart.map((product, index) => (
        <div key={index} className="grid grid-cols-2 justify-center text-center m-8">
            <img src={product.imgMin[0]} alt="product" className="m-auto" />
            <div>
                <h3 className="">${product.price}</h3>
                <h3 className="">{product.name}</h3>
                <h3 className="">{product.quantity}</h3>
                <button onClick={() => removeItem(product.id)}>Remove Product</button>
            </div>
        </div>
    ))}
    <p><button onClick={buyAll}>buy all</button></p>
    <p><button onClick={() => clear(cart.id)}>Remove all</button></p>
    { cart.length === 0 ? <Link to={`/`}><button onClick={buyAll}>Back to Shop</button></Link> : <button onClick={buyAll}>Finish Checkout</button> }
    </>
  )
}*/

return(

  <div>
    <div className="fondo -m-16 h-16 mb-16"></div>
      {condition ?
          <div><>
              <div><>
                  <div>{ orderId &&
                      <div>
                          <h1>Compra Finalizada</h1>
                          <p>tu ID</p><p>{orderId}</p>
                          <Link to="/"><button>Volver al Home</button></Link>
                      </div>
                  }
                  {!orderId &&
                      <div><>
                          <h1>Carrito vacío</h1>
                          <p>¡Volvé al home para agregar productos!</p>
                          <Link to="/"><button>Seguir comprando</button></Link></>
                      </div>
                  }
                  </div></>
              </div></>
          </div>:
          <div>
              <h1>Tu carrito de compras</h1>
              <div>   
                  <h3>Producto</h3>
                  <h3>Cantidad</h3>
                  <h3>Precio por Unidad</h3>
                  <h3>Subtotal</h3>
                  <h3>Quitar</h3>
              </div>
              {cart.map((product, index) => (
        <div key={index} className="grid grid-cols-2 justify-center text-center m-8">
            <img src={product.imgMin[0]} alt="product" className="m-auto" />
            <div>
                <h3 className="">${product.price}</h3>
                <h3 className="">{product.name}</h3>
                <h3 className="">{product.quantity}</h3>
                <button onClick={() => removeItem(product.id)}>Remove Product</button>
            </div>
        </div>
    ))}
              <h3 >Total a pagar: $ {finalPrice}</h3> 
              <button onClick={clear} >Vaciar Carrito</button>
              <Link to="/"><button>Seguir comprando</button></Link><hr/>
              <div>
                  <form method='POST' onSubmit={generateOrder}>
                      <h4>Para generar su order <br /> complete el siguiente formulario</h4>
                      <input type="text" name='name' placeholder='Nombre y Apellido' onChange={handleInputs} /> <br />
                      <input type="text" name='phone' placeholder='Teléfono' onChange={handleInputs}/> <br />
                      <input type="email" name='email' placeholder='Email' onChange={handleInputs}/> <br />
                      <input type="email" name='confirmEmail' placeholder='Confirme su Email' onChange={handleInputs}/> <br />
                      <button>Generar Orden</button>
                  </form>
              </div>
          </div>
      }
  </div>

)

}

export default Cart;

