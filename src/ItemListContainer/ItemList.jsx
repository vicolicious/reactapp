import { useState, useEffect } from "react"

import Item from "./Item"
import './../services/mockService.js'
import ObtenerProductos from "./../services/mockService.js"

export default function ItemList(){
  const [products, setProducts] = useState([]);

   

    useEffect(()=>{
      ObtenerProductos().then((respuesta) =>{
        setProducts(respuesta);
      });
    });


    return(
      <>
         {productos.map((productos) => {
         return  <div key={productos.id}><Item  productos = {productos} />;</div>
         })}

      </>
    )
}