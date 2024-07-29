import React from "react"

import { BsCart2 } from "react-icons/bs"

const CartWidget = () => {
  return (
    <div className="relative flex items-center justify-center ">
      <span className="absolute left-4 bottom-2 bg-yellow-400 px-1 rounded-full">
        0
      </span>
      <span>
        <BsCart2 className="text-xl" />
      </span>
    </div>
  )
}

export default CartWidget
