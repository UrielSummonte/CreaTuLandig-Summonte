import React from "react"

const ItemDetail = ({ producto }) => {
  const { titulo, precio, categoria, descripcion, imagen, stock } = producto
  return (
    <div className="max-w-2xl rounded overflow-hidden shadow-lg p-6 bg-white">
      <h3 className="text-2xl font-bold mb-4">{titulo}</h3>
      <img
        className="w-full h-[350px] object-cover mb-4"
        src={imagen}
        alt={`La foto del producto ${titulo}`}
      />
      <p className="text-gray-600 text-sm mb-2">
        Categoría: {categoria.join(", ")}
      </p>
      <p className="text-gray-800 text-base mb-4">{descripcion}</p>
      <p className="text-gray-900 text-xl font-semibold mb-4">{precio}</p>
      <p className="text-gray-500 text-sm">Stock: {stock}</p>
    </div>
  )
}

export default ItemDetail
