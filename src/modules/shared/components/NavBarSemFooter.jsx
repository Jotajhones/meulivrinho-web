import logo from "@/assets/logo.svg";
import { NavLink } from "react-router";

const NavBarSemFooter = () => {
  return (
    <header className="bg-black grid gap-6 px-6 py-4">
      <nav className="flex justify-between items-center">
        <NavLink to="/" className="w-40">
          <img src={logo} alt="" />
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBarSemFooter;
