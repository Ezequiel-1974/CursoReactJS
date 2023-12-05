import React from "react";
import { Link } from "react-router-dom";
import CounterContainer from "../../common/counter/CounterContainer";
import "./ItemDetailStyles.css";
import { Button } from "@mui/material";

export const ItemDetail = ({ productSelected, onAdd, initial, showCounter }) => {

  return (
    <section>
      <img src={productSelected.img} alt={productSelected.title} />

      <div>
        <h1>{productSelected.title}</h1>
        <p>Marca: {productSelected.brand}</p>
        <h1>Detalles</h1>
        <p>{productSelected.details}</p>
        <p>Precio AR$: {productSelected.price}</p>

        <div className="itemContainer">
          {initial && (
            <Button variant="contained" sx={{ color: "#FFF", fontSize: 15}}>
              Ya tienes {initial} unidades
            </Button>
          )}

          {showCounter ? (
            <div>
              <CounterContainer stock={productSelected.stock} onAdd={onAdd} initial={initial} />
            </div>
          ) : (
            <Link to="/cart">
              <Button variant="contained" sx={{ color: "#FFF", fontSize: 15, top: 5}}>
                Terminar compra
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};