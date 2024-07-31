import React, { useState, useEffect } from "react"
import { getOneProduct } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import Layout from "../Layout/Layout"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    getOneProduct(id)
      .then((data) => setProducto(data))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  return (
    <Layout>
      <ItemDetail producto={producto} />
    </Layout>
  )
}

export default ItemDetailContainer
