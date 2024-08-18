import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (item, quantity) => {
    if (quantity > item.stock) {
      alert("No hay suficiente stock.")
      return;
    }
    setCart((prevCart) => {
      if (isInCart(item.id, prevCart)) {
        return prevCart.map((product) =>
          product.id === item.id
            ? {
                ...product,
                cantidad: product.cantidad + quantity,
                stock: product.stock - quantity,
              }
            : product
        )
      } else {
        return [
          ...prevCart,
          { ...item, cantidad: quantity, stock: item.stock - quantity },
        ]
      }
    })
  }

  const isInCart = (id, cartState = cart) => {
    return cartState.some((item) => item.id === id)
  }

  const itemQuantity = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0)
  }

  const total = () => {
    return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
  }

  const emptyCart = () => {
    setCart([])
  }

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        isInCart,
        itemQuantity,
        total,
        emptyCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
