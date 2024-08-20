import React, { useContext, useEffect, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({ producto }) => {
  const { addToCart, isInCart, cart } = useContext(CartContext)

  const [productDetail, setProductDetail] = useState(producto)
  

  const { titulo, precio, categoria, descripcion, imagen, stock } =
    productDetail

    const [cantidad, setCantidad] = useState(stock)

    useEffect(() => {
        cart.forEach(element => {
          if(element.id === producto.id){
            setCantidad(element.stock)
          }
        });      
    }, [cart])
    
    

  return (
    <div className="max-w-2xl rounded overflow-hidden shadow-lg p-6 bg-white">
      <h3 className="text-2xl font-bold mb-4">{titulo}</h3>
      <img
        className="w-full h-[350px] object-cover mb-4"
        src={imagen}
        alt={`La foto del producto ${titulo}`}
      />
      <p className="text-gray-600 text-sm mb-2">
        {categoria ? `Categoría: ${categoria.join(", ")}` : "Sin categoría"}
      </p>
      <p className="text-gray-800 text-base mb-4">{descripcion}</p>
      <p className="text-gray-900 text-xl font-semibold mb-4">
        ${precio.toFixed(2)}
      </p>
      
      
      
      <p className="text-gray-500 text-sm mb-3">Stock: {cantidad} disponibles</p>
    
      {isInCart(productDetail.id) ? (
        <Link
          to="/cart"
          className="h-12 w-48 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ir al Carrito
        </Link>
      ) : (
        <ItemCount addToCart={addToCart} producto={productDetail} />
      )}
    </div>
  )
}

export default ItemDetail
