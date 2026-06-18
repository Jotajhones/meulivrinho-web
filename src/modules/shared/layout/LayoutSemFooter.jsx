import { Outlet } from "react-router";
import SmartNavbar from "../components/SmartNavbar";

const LayoutSemFooter = () => {
  return (
    <div>
      <SmartNavbar />
      <Outlet />
    </div>
  );
};

export default LayoutSemFooter;
