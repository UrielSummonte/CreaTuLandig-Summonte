import React, { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import Layout from "../Layout/Layout"
import { db } from "../../services/firebaseConfig"
import { collection, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const { cat } = useParams()

  useEffect(() => {
    setLoading(true)
    const productosRef = collection(db, "productos")

    let productosConsulta;
    if (cat) {
      productosConsulta = query(
        productosRef,
        where("categoria", "array-contains-any", cat.split(","))
      );
    } else {
      productosConsulta = productosRef
    }

    getDocs(productosConsulta)
      .then((snapshot) => {
        const dataProductos = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data()}
        })
        setProductos(dataProductos)
      })
      .catch((error) => {
        console.error("Error fetching products:", error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [cat])

  if (loading) {
    return <h2>Cargando...</h2>
  }

  return (
    <Layout>
      <ItemList productos={productos} />
    </Layout>
  )
}

export default ItemListContainer
