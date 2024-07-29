import React, { useState, useEffect } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import Layout from "../Layout/Layout"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const { cat } = useParams()

  useEffect(() => {
    getProducts(cat)
      .then((data) => {
        setProductos(data)
      })
      .catch((error) => {
        console.error("Error fetching products:", error)
      })
      .finally(() => {
        setLoading(false);
      });
  }, [cat])

  if (loading) {
    return <h2>Cargando...</h2>
  }

  return (
    <Layout>
      {productos.length > 0 && <ItemList productos={productos} />}
    </Layout>
  )
}

export default ItemListContainer
