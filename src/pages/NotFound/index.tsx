import { NavLink } from "react-router-dom";
import { Home } from "lucide-react";
import Hero from "../../components/Hero";
import heroNotFound from "../../assets/images/code.webp";

export default function NotFound() {
  return (
    <>
      <Hero
        title="Página no encontrada"
        description="La página que estás buscando no existe o ha sido movida."
        image={heroNotFound}
      />
      <div className="flex flex-col gap-4 items-center">
        <NavLink
          to="/"
          className="w-fit inline-flex gap-2 items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Volver al Inicio
          <Home />
        </NavLink>
      </div>
    </>
  );
}
