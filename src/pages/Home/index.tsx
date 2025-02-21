import { useContext, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { Product } from "../../types/product";
import Hero from "../../components/Hero";
import heroHome from "../../assets/images/desk.webp";
import ProductCard from "../../components/ProductCard";
import Pagination from "../../components/Pagination";

export default function Home() {
  const { products, categories, selectedCategory, setSelectedCategory } =
    useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage = 5;

  const filteredProducts =
    selectedCategory === "Todos"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Hero
        title="Bienvenido a Seba's Shop"
        description="Obten los mejores productos a los mejores precios"
        image={heroHome}
      />
      <section className="m-4">
        <div className="mb-4">
          <select
            value={selectedCategory}
            onChange={(e) => (
              setSelectedCategory(e.target.value), setCurrentPage(1)
            )}
            className="block w-full md:w-48 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map((category: string) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalItems={filteredProducts.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </section>
    </>
  );
}
