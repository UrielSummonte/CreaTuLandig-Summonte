import React, { useContext } from "react"
import { BsCart2 } from "react-icons/bs"
import { CartContext } from "../../context/cartContext"

const CartWidget = () => {
  const { itemQuantity } = useContext(CartContext)

  return (
    <div className="relative flex items-center justify-center ">
      <span className="absolute left-4 bottom-2 bg-yellow-400 px-2 rounded-full">
        {itemQuantity()}
      </span>
      <span>
        <BsCart2 className="text-xl" />
      </span>
    </div>
  )
}

export default CartWidget
