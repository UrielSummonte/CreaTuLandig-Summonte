import React from "react"
import { Link } from "react-router-dom"

const Item = ({ e }) => {
  return (
    <div className="w-[400px] rounded overflow-hidden shadow-lg p-4 bg-white">
      <h2 className=" font-bold mb-2">{e.titulo}</h2>
      <img
        className="w-full h-48 object-cover mb-2"
        src={e.imagen}
        alt={e.titulo}
      />
      <p className="text-gray-700 text-base mb-2">${e.precio}</p>
      <p className="text-gray-600 text-sm mb-4">{e.categoria.join(", ")}</p>
      <div className="flex">
        <Link
          to={`/detalle/${e.id}`}
          className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ver Detalle
        </Link>
      </div>
    </div>
  )
}

export default Item
