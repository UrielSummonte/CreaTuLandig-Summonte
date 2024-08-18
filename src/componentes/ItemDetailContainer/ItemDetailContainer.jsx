import React, { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import Layout from "../Layout/Layout"
import { db } from "../../services/firebaseConfig"
import { doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    const productoRef = doc(db, "productos", id)

    getDoc(productoRef)
      .then((snapshot) => {
        const dataProducto = snapshot.data()
        const productoListo = { ...dataProducto, id: snapshot.id }
        setProducto(productoListo)
      })
      .catch((error) => {
        console.error("Error fetching product:", error)
      })
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return <h2>Cargando...</h2>
  }

  return (
    <Layout>
      {producto ? (
        <ItemDetail producto={producto} />
      ) : (
        <h2>Producto no encontrado</h2>
      )}
    </Layout>
  )
}

export default ItemDetailContainer
