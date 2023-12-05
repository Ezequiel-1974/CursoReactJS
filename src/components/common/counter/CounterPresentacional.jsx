import React from "react";
import "./CounterStyles.css";
import { Button } from "@mui/material";


const CounterPresentacional = ({  sumar, contador, restar, onAdd }) => {
  const handleAddToCart = (cantidad) => {
    if (contador) {
      if (cantidad > 0) {
        onAdd(cantidad);
      } 
    }
  };
  return (
    
      <div className="mrBotones">

        <Button variant="contained" onClick={sumar}
           sx={{color: "#FFF", fontSize: 15, left: 64 }}>
          +
        </Button>

        <Button variant="contained" onClick={() => handleAddToCart(contador)}
            sx={{color: "#FFF", bottom: 45, fontSize: 15 }}>
          Agregar al Carrito
        </Button>

        <h4>{contador}</h4>

        <Button variant="contained" onClick={restar}
           sx={{color: "#FFF", fontSize: 15, right: 65 }}>
          -
        </Button>

      </div>
    
  );
};

export default CounterPresentacional;


