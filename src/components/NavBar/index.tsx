import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { House, ShoppingCart, History, Store } from "lucide-react";

export default function NavBar() {
  const { cart } = useContext(CartContext);
  const activeStyle = "decoration-blue-600 text-blue-600";

  return (
    <header className="flex justify-between items-center p-4 shadow-md">
      <NavLink to="/" className="flex gap-2 md:gap-3">
        <Store />
        <span className="text-xl font-bold text-gray-800">Seba's Shop</span>
      </NavLink>
      <nav className="flex justify-between items-center">
        <ul className="flex gap-6 md:gap-12">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center ${isActive ? activeStyle : undefined}`
              }
            >
              <span className="hidden md:block">Inicio</span>
              <House className="ml-1 size-5" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shoppingCart"
              className={({ isActive }) =>
                `flex items-center relative ${
                  isActive ? activeStyle : undefined
                }`
              }
            >
              <span className="hidden md:block">Carrito</span>
              <ShoppingCart className="ml-1 size-5" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/historyCart"
              className={({ isActive }) =>
                `flex items-center ${isActive ? activeStyle : undefined}`
              }
            >
              <span className="hidden md:block">Historial</span>
              <History className="ml-1 size-5" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
