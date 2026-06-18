import { Search } from "lucide-react";
import logo from "@/assets/logo.svg";
import { NavLink } from "react-router";

const NavBarNaoAutenticado = () => {
  return (
    <header className="bg-black grid gap-6 px-6 py-4">
      <nav className="flex justify-between items-center">
        <div className="w-58">
          <img src={logo} alt="" />
        </div>

        <div>
          <NavLink
            className=" text-white px-3 py-2 text-center font-medium p-2 rounded-xl"
            to="/cadastro"
          >
            Cadastro
          </NavLink>

          <NavLink
            className="bg-pink-600 text-white px-3 py-2 text-center font-medium p-2 rounded-xl"
            to="/login"
          >
            Login
          </NavLink>
        </div>
      </nav>

      <div className="flex items-center px-3 py-1 bg-white rounded-xl">
        <label htmlFor="seach">
          {" "}
          <Search />{" "}
        </label>
        <input
          className="w-full h-full py-2 px-3"
          placeholder="Digite o nome do livro"
          type="text"
          id="seach"
        />
      </div>
    </header>
  );
};

export default NavBarNaoAutenticado;
