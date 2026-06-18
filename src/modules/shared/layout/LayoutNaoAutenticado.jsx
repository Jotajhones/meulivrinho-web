import { Outlet } from "react-router";
import NavBarNaoAutenticado from "@/modules/shared/components/NavBarNaoAutenticado";
import Footer from "@/modules/shared/components/Footer";

const LayoutNaoAutenticado = () => {
  return (
    <div>
      <NavBarNaoAutenticado />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutNaoAutenticado;
