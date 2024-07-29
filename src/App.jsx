import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom"
import "./App.css"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import NavBar from "./componentes/NavBar/NavBar"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import MiCompra from "./pages/miCompra/MiCompra"
import NotFound from "./pages/notFound/NotFound"
import MiCuenta from "./pages/miCuenta/MiCuenta"
import SignIn from "./pages/signIn/SignIn"

const AppRoutes = () => {
  let routes = useRoutes([
    { path:"/", element: <ItemListContainer /> },
    { path:"/categoria/:cat", element: <ItemListContainer /> },
    { path:"/detalle/:id", element: <ItemDetailContainer /> },
    { path:"/mi-cuenta", element: <MiCuenta /> },
    { path:"/mi-compra", element: <MiCompra /> },
    { path:"/sign-in", element: <SignIn /> },
    { path:"/*", element: <NotFound /> }
  ])
  return routes
}

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App
