import React from "react"
import Item from "../Item/Item"

const ItemList = ({ productos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {productos.map((e) => (
        <Item key={e.id} e={e} />
      ))}
    </div>
  )
}

export default ItemList
