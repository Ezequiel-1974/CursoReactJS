import React from "react";
import { BrowserRouter } from "react-router-dom";
import CartWidget from "../src/components/common/cartWidget/CartWidget.jsx";
import AppRouter from "./router/AppRouter.jsx";
import CartContextComponent from "./context/CartContext";


function App() {
  return (
    <>
      <BrowserRouter>
      <CartContextComponent>
          <AppRouter />
          <CartWidget />
        </CartContextComponent>
      </BrowserRouter>
    </>
  )
}

export default App;
