import { createContext, useState } from "react";
import { Product } from "../types/product";
import { productsAPI } from "../data/products";

interface ProductContextType {
  products: Product[];
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType
);

interface ProductContextProps {
  children: React.ReactNode;
}

export default function ProductProvider({ children }: ProductContextProps) {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const products = productsAPI;

  const categories = [
    "Todos",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <ProductContext.Provider
      value={{ products, categories, selectedCategory, setSelectedCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
}
