import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductProvider from "./contexts/ProductContext";
import CartProvider from "./contexts/CartContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import HistoryCart from "./pages/HistoryCart";
import NotFound from "./pages/NotFound";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "shoppingCart", element: <ShoppingCart /> },
      { path: "historyCart", element: <HistoryCart /> },
    ],
    errorElement: <NotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <ProductProvider>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </ProductProvider>
);
