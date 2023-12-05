import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  const addToCart = (product) => {
    if (product.quantity <= 0) {
      return; 
    }

    const productIndex = cart.findIndex((elemento) => elemento.id === product.id);

    if (productIndex !== -1) {
    
      const updatedCart = [...cart];
      const existingProduct = updatedCart[productIndex];
      existingProduct.quantity += product.quantity; 
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {

      const updatedCart = [...cart, product];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const isInCart = (id) => {
    let exist = cart.some((elemento) => elemento.id === id);
    return exist;
  };

  const getQuantityById = (id) => {
    let product = cart.find((elemento) => elemento.id === id);
    return product?.quantity;
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const deleteProductById = (id) => {
    let newArr = cart.filter((product) => product.id !== id);
    setCart(newArr);
    localStorage.setItem("cart", JSON.stringify(newArr));
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);

    return total;
  };

  const getTotalQuantity = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);

    return total;
  };

  let data = {
    cart,
    addToCart,
    getQuantityById,
    clearCart,
    deleteProductById,
    getTotalPrice,
    getTotalQuantity
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;