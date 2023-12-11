import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Obtén las categorías desde la base de datos (esto podría variar según tu aplicación)
    const categoriesCollection = collection(db, "products");

    getDocs(categoriesCollection)
      .then((res) => {
        let arrayCategories = [];
        res.docs.forEach((elemento) => {
          const category = elemento.data().category;
          if (!arrayCategories.includes(category)) {
            arrayCategories.push(category);
          }
        });
        setCategories(arrayCategories);
      });
  }, []);

  return (
    <div>
      <aside>
        <header>
          <Link to="/">
            <img className="logo" src="https://res.cloudinary.com/drwhdwvnn/image/upload/v1702238843/Venta_de_productos_jeemyx.png"/>
          </Link>
          <h2>Encuentre todo lo que necesite aqui.</h2>
        </header>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/" className="menu">
                Todos los productos
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category}>
                <Link to={`/${category}`} className="menu">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Navbar;
