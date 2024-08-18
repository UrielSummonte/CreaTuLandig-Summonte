import React, { useState } from "react"
import { IoMdAdd, IoMdRemove } from "react-icons/io"

const ItemCount = ({ addToCart, producto }) => {
  const [count, setCount] = useState(1)

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  };

  const handleIncrease = () => {
    if (count < producto.stock) {
      setCount(count + 1)
    }
  };

  const handleAdd = () => {
    if (count > 0 && count <= producto.stock) {
      addToCart(producto, count)
      setCount(1)
    } 
  }

  return (
    <div className="flex items-center justify-center">
      <button
        className="h-12 w-12 bg-blue-300 flex items-center justify-center"
        onClick={handleDecrease}
      >
        <IoMdRemove />
      </button>
      <div className="h-12 w-12 bg-gray-400 flex items-center justify-center">
        <span>{count}</span>
      </div>
      <button
        className="h-12 w-12 bg-blue-300 flex items-center justify-center"
        onClick={handleIncrease}
        disabled={count >= producto.stock} 
      >
        <IoMdAdd />
      </button>
      <button
        className="h-12 w-48 ml-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAdd}
        disabled={producto.stock <= 0} 
      >
        Agregar al Carrito
      </button>
    </div>
  )
}

export default ItemCount
