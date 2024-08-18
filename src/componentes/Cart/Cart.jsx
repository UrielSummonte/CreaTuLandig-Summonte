import React, { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"

const Cart = () => {
  const { cart, emptyCart } = useContext(CartContext)

  console.log("Carrito", cart)

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-10">
        <p className="text-xl font-bold">
          Tu carro esta vacío. Vuelve al catálogo para comprar
        </p>

        <Link
          to="/"
          className="h-12 w-48 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center mt-4"
        >
          Volver a Inicio
        </Link>
      </div>
    )
  }

  return (
    <>
      <h1 className="my-3 mx-5 text-2xl font-bold">Tu Compra</h1>
      <hr className="w-full border-gray-300 my-4" />
      {cart.length > 0 &&
        cart.map((e, index) => (
          <div
            key={e.id}
            className="flex flex-col items-center justify-center mb-4"
          >
            <CartItem producto={e} />
            {index < cart.length - 1 && (
              <hr className="w-full border-gray-300 my-4" />
            )}
          </div>
        ))}
      <div className="flex items-center justify-evenly">
        <button
          className="h-12 w-60 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => emptyCart()}
        >
          Vaciar Carrito
        </button>
        <Link
          to="/checkout"
          className="h-12 w-60 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
        >
          Finalizar Compra
        </Link>
      </div>
    </>
  )
}

export default Cart
