import React, { useState } from "react";
import CounterPresentacional from "./CounterPresentacional";
import Swal from "sweetalert2";

const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'info',
        title: 'Cantidad máxima alcanzada',
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <CounterPresentacional sumar={sumar} restar={restar} contador={contador} onAdd={onAdd} />
  );
};

export default CounterContainer;