import React from "react"
import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/logo.png"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <div className="bg-stone-100 w-full h-[15vh]">
      <nav className="flex justify-between items-center z-10 top-0 w-full px-8 text-lg">
        <ul className="flex items-center gap-3">
          <li className="mr-7">
            <NavLink
              to="/"
              style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
            >
              <img src={logo} alt="" className="w-36 h-20" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending, isTransitioning }) =>
                `relative ${isPending ? "text-red-500" : "text-black"} ${
                  isTransitioning ? "view-transition" : ""
                } ${isActive ? "active-link" : ""}`
              }
            >
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categoria/hombre"
              className={({ isActive, isPending, isTransitioning }) =>
                `relative ${isPending ? "text-red-500" : "text-black"} ${
                  isTransitioning ? "view-transition" : ""
                } ${isActive ? "active-link" : ""}`
              }
            >
              Hombre
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categoria/mujer"
              className={({ isActive, isPending, isTransitioning }) =>
                `relative ${isPending ? "text-red-500" : "text-black"} ${
                  isTransitioning ? "view-transition" : ""
                } ${isActive ? "active-link" : ""}`
              }
            >
              Mujer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categoria/running"
              className={({ isActive, isPending, isTransitioning }) =>
                `relative ${isPending ? "text-red-500" : "text-black"} ${
                  isTransitioning ? "view-transition" : ""
                } ${isActive ? "active-link" : ""}`
              }
            >
              Running
            </NavLink>
          </li>
        </ul>
        <ul className="flex items-center gap-3">
          <li>
            <NavLink
              to="/mi-cuenta"
              className={({ isActive, isPending, isTransitioning }) =>
                `relative ${isPending ? "text-red-500" : "text-black"} ${
                  isTransitioning ? "view-transition" : ""
                } ${isActive ? "active-link" : ""}`
              }
            >
              Mi Cuenta
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mi-compra"
              className={({ isActive, isPending, isTransitioning }) =>
                `relative ${isPending ? "text-red-500" : "text-black"} ${
                  isTransitioning ? "view-transition" : ""
                } ${isActive ? "active-link" : ""}`
              }
            >
              Mi Compra
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sign-in"
              className={({ isActive, isPending, isTransitioning }) =>
                `relative ${isPending ? "text-red-500" : "text-black"} ${
                  isTransitioning ? "view-transition" : ""
                } ${isActive ? "active-link" : ""}`
              }
            >
              Sign In
            </NavLink>
          </li>
          <li className="ml-7">
            <CartWidget />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
