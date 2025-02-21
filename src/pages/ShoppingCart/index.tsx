import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import Hero from "../../components/Hero";
import heroShoppingCart from "../../assets/images/calculator.webp";
import { Trash2 } from "lucide-react";
import Swal from "sweetalert2";

export default function ShoppingCart() {
  const { cart, deleteToCart, buyCart } = useContext(CartContext);

  const totalCost = cart
    .map((costItem) => costItem.price * costItem.quantity)
    .reduce((a, b) => a + b, 0);

  const handleDeleteToCart = (id: number) => {
    deleteToCart(id);

    Swal.fire({
      title: "Se quitó el producto a tu carrito de compras",
      icon: "error",
      draggable: true,
    });
  };

  const handleBuyCart = () => {
    buyCart();

    Swal.fire({
      title: "¡Felicidades por su compra!",
      icon: "success",
      draggable: true,
    });
  };

  return (
    <>
      <Hero
        title="Carrito de Compras"
        description="¿Que esperas? ¡Lleva todos tus productos!"
        image={heroShoppingCart}
      />
      <section>
        {cart.length === 0 ? (
          <p className="text-center text-2xl">
            Aun no tienes productos seleccionados
          </p>
        ) : (
          <div className="grid px-5">
            <div className="w-11/12 space-y-4 justify-self-center">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between space-x-4 bg-white p-4 rounded-lg shadow"
                >
                  <div className="flex items-center gap-4">
                    <img
                      className="w-24 h-24 object-cover rounded"
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                    />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p>Precio: {item.price}</p>
                      <p>Cantidad: {item.quantity}</p>
                      <p>Total: S/.{item.price * item.quantity}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteToCart(item.id)}
                    className="flex text-red-500 hover:text-red-700"
                  >
                    <Trash2 />
                  </button>
                </div>
              ))}
            </div>
            {totalCost > 0 && (
              <div className="mt-6 mr-6 text-xl font-bold justify-self-end">
                Total: S/.{totalCost}
              </div>
            )}
            <button
              onClick={() => handleBuyCart()}
              className="w-36 justify-self-end mt-4 mr-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Comprar
            </button>
          </div>
        )}
      </section>
    </>
  );
}
