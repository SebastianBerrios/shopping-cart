import { createContext, useEffect, useState } from "react";
import { CartItem } from "../types/cartItem";
import { CartHistory } from "../types/cartHistory";

const CART_STORAGE_KEY = "shopping_cart";
const CART_HISTORY_STORAGE_KEY = "cart_history";

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  deleteToCart: (productId: number) => void;
  buyCart: () => void;
  cartHistory: CartHistory[];
}

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

interface CartContextProps {
  children: React.ReactNode;
}

export default function CartProvider({ children }: CartContextProps) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [cartHistory, setCartHistory] = useState<CartHistory[]>(() => {
    const storedHistory = localStorage.getItem(CART_HISTORY_STORAGE_KEY);
    return storedHistory ? JSON.parse(storedHistory) : [];
  });

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem(CART_HISTORY_STORAGE_KEY, JSON.stringify(cartHistory));
  }, [cartHistory]);

  const addToCart = (product: CartItem) => {
    setCart((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const deleteToCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const buyCart = () => {
    if (cart.length === 0) return;

    const newOrder: CartHistory = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      items: cart,
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    };

    setCartHistory((prev) => [newOrder, ...prev]);
    setCart([]);
    localStorage.removeItem(CART_STORAGE_KEY);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, deleteToCart, buyCart, cartHistory }}
    >
      {children}
    </CartContext.Provider>
  );
}
