import { Outlet } from "react-router";
import Footer from "@/modules/shared/components/Footer";
import SmartNavbar from "../components/SmartNavbar";

const LayoutNaoAutenticado = () => {
  return (
    <div>
      <SmartNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutNaoAutenticado;
