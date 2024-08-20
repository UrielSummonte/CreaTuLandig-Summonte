import React, { useContext, useState } from "react"
import { db } from "../../services/firebaseConfig"
import { addDoc, collection } from "firebase/firestore"
import { CartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"

const Checkout = () => {
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [mail, setMail] = useState("")
  const [direccion, setDireccion] = useState("")
  const [orden, setOrden] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { cart, setCart } = useContext(CartContext)

  const formatedOrder = {
    cart: cart,
    nombre,
    apellido,
    mail,
    direccion,
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    const ordenRef = collection(db, "ordenes")
    const orderId = await addDoc(ordenRef, formatedOrder)
    setCart([])
    setOrden(orderId.id)
    setIsSubmitting(false)
  };

  if (orden) {
    return (
      <div className="flex flex-col items-center justify-center mt-40">
        <h3 className="text-2xl font-bold">Gracias por tu compra!</h3>
        <h3 className="text-2xl font-bold">El id de tu compra es: {orden} </h3>
        <Link
          to="/"
          className="h-12 w-64 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center mt-4"
        >
          Comenzar una nueva compra
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="max-w-lg mx-auto mt-5 p-6 bg-gray-200 rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label
          htmlFor="nombre"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Nombre:
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          pattern="[A-Za-z]+"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          title="El nombre solo puede contener letras"
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="apellido"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Apellido:
        </label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          pattern="[A-Za-z]+"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          title="El apellido solo puede contener letras"
          onChange={(e) => setApellido(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          title="Ingrese un correo electrónico válido"
          onChange={(e) => setMail(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="direccion"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Dirección:
        </label>
        <input
          type="text"
          id="direccion"
          name="direccion"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setDireccion(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {isSubmitting ? "Cargando..." : "Confirmar Compra"}
        </button>
      </div>
    </form>
  )
}

export default Checkout
