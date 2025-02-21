import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Product } from "../../types/product";
import { Plus } from "lucide-react";
import Swal from "sweetalert2";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product: Product) => {
    addToCart({
      ...product,
      quantity: 1,
    });

    Swal.fire({
      title: "Se agregó el producto a tu carrito de compras",
      icon: "success",
      draggable: true,
    });
  };

  return (
    <div className="rounded-lg shadow-md overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.name}
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-xl font-bold text-gray-900">S/. {product.price}</p>
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
          >
            <Plus className="size-5 mr-1" />
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
