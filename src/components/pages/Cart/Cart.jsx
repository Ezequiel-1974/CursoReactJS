import React from 'react'; // Asegúrate de importar React si no lo has hecho
import { Button, IconButton } from "@mui/material";
import { useContext } from "react";
import "./Cart.css"
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const Cart = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  let total = getTotalPrice();

  const clearCartWithAlert = () => {
    Swal.fire({
      title: "¿Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sí, eliminar",
      denyButtonText: "No, no eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito eliminado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "warning");
      }
    });
  };

  return (
 
    <section>
      {cart.length === 0 && (
        <h1>Carrito vacio <SentimentVeryDissatisfiedIcon /></h1>
      )}
          {cart.map((product) => (
            <div key={product.id}>
              <h1>{product.title}</h1>
              <h1>AR$ {product.price}</h1>
              <h1>Cantidad: {product.quantity}</h1>
              <img className="imgCart" src={product.img} alt={product.title} />
              <Button variant="contained" onClick={() => deleteProductById(product.id)}
                sx={{ color: "#FFF", ml: 4, fontSize: 20 }}>
                Eliminar
              </Button>
            </div>
          ))}
          {cart.length > 0 && (
          <div className="infoCart">
          
            <h1>El total a pagar es AR$ {total}</h1>

            <Link to="/checkout">
              <Button variant="contained">Finalizar compra</Button>
            </Link>

            <Button variant="contained" onClick={clearCartWithAlert}>
              Vaciar Carrito
            </Button>
          </div>
          )}
    </section>
       
  );
};

export default Cart;
