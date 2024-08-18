import React, { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import ItemCount from "../ItemCount/ItemCount"

const CartItem = ({ producto }) => {
  const { removeItem, addToCart } = useContext(CartContext);

  return (
    <div className="w-full rounded overflow-hidden shadow-lg p-4 bg-white flex items-center justify-center">
      <img
        className="w-[20%] h-40 object-cover mb-2"
        src={producto.imagen}
        alt={producto.titulo}
      />
      <div className="w-[15%]">
        <h2 className="font-bold mb-2 text-center">{producto.titulo}</h2>
      </div>

      <div className="flex flex-col items-center justify-between w-[15%]">
        <p className="text-gray-700 text-base mb-2">Stock: {producto.stock}</p>
        <p className="text-gray-700 text-base mb-2">
          Cantidad: {producto.cantidad}
        </p>
        <p className="text-gray-700 text-base mb-2">
          Precio: ${producto.precio}
        </p>
      </div>

      <div className="flex flex-col items-center justify-between w-[15%]">
        <p className="text-gray-700 text-base mb-2">Su compra</p>

        <p className="text-gray-700 text-base mb-2">
          ${producto.precio * producto.cantidad}
        </p>
      </div>

      <ItemCount addToCart={addToCart} producto={producto} />
      <button
        className="h-12 w-48 ml-6 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => removeItem(producto.id)}
      >
        Eliminar producto
      </button>
    </div>
  )
}

export default CartItem
