import { Outlet } from "react-router";
import NavBarSemFooter from "../components/NavBarSemFooter";

const LayoutSemFooter = () => {
  return (
    <div>
      <NavBarSemFooter />
      <Outlet />
    </div>
  );
};

export default LayoutSemFooter;
