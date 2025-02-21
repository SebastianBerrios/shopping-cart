import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import Hero from "../../components/Hero";
import heroHistory from "../../assets/images/phones.webp";
import Pagination from "../../components/Pagination";

export default function HistoryCart() {
  const { cartHistory } = useContext(CartContext);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

  const paginatedCartHistory = cartHistory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Hero
        title="Historial de Compras"
        description="Revisa todos los productos que has comprado"
        image={heroHistory}
      />
      <section className="grid px-5">
        {cartHistory.length === 0 ? (
          <p className="text-center text-2xl">Realiza tu primera compra</p>
        ) : (
          <>
            <div className="space-y-6">
              {paginatedCartHistory.map((cart) => (
                <div
                  key={cart.id}
                  className="bg-white rounded-lg shadow overflow-hidden"
                >
                  <div className="p-4 bg-gray-50 border-b">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        {new Date(cart.date).toLocaleDateString()}
                      </span>
                      <span className="font-semibold">
                        Total: ${cart.total}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    {cart.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-4 py-2"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-sm text-gray-600">
                            ${item.price} x {item.quantity}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">
                            ${item.price * item.quantity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalItems={cartHistory.length}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </section>
    </>
  );
}
