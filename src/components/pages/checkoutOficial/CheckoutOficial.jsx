import { useContext, useState } from "react";
import "./CheckoutStyles.css"; 
import { CartContext } from "../../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const CheckoutOficial = () => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const total = getTotalPrice();

  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();

    let order = {
      buyer: userData,
      items: cart,
      total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    cart.forEach((elemento) => {
      updateDoc(doc(db, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });

    clearCart();
  };

  return (
  <>
      
      {orderId ? (
        <section className="thank-you-message"> 
          <Link to="/" className="continue-shopping-link"> 
          <Button variant="contained" sx={{top: 45, left: 100}}>Seguir comprando</Button>
          </Link> 
          <h1>Gracias por su compra, su N° de comprobante es {orderId}</h1>
        </section>
        
        )  : (
          
          <form className="form-container" onSubmit={handleSubmit}>

          <input type="text" className="form-input" placeholder="Ingresa tu nombre" name="name" onChange={handleChange}/>

          <input type="text" className="form-input" placeholder="Ingresa tu telefono" name="phone" onChange={handleChange}/>

          <input type="text" className="form-input" placeholder="Ingresa tu email" name="email" onChange={handleChange}/>

          <button type="submit" className="submit-button">Comprar</button> 

        </form>
      )}
    </>
  );
};

export default CheckoutOficial;
