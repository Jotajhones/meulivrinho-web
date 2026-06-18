import { Outlet } from "react-router";
import Footer from "@/modules/shared/components/Footer";
import NavBarAutenticado from "../components/NavBarAutenticado";

const LayoutAutenticado = () => {
  return (
    <div>
      <NavBarAutenticado />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutAutenticado;
