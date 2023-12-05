import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const productsCollection = collection(db, "products");

    let consulta = undefined;

    if (!categoryName) {
      // Si no existe categoryName, obtén todos los productos
      consulta = productsCollection;
    } else {
      // Si existe categoryName, filtra por categoría
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(consulta)
      .then((res) => {
        let newArray = res.docs.map((product) => {
          return { ...product.data(), id: product.id };
        });

        setItems(newArray);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
