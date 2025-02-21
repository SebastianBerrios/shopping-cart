import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen 2xl:container 2xl:justify-self-center">
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
