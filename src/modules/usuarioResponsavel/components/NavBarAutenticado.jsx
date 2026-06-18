import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronsUpDownIcon, LogOut, Search, User } from "lucide-react";

import logo from "@/assets/logo.svg";
import { NavLink, useNavigate } from "react-router";
import handleLogout from "../auth/useLogout";

const NavBarAutenticado = () => {
  const emailUsuario = localStorage.getItem("emailUsuario");
  const nomeUsuario = emailUsuario?.split("@")[0];
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await handleLogout();

      localStorage.removeItem("emailUsuario");

      navigate("/");
    } catch (error) {
      alert("Erro ao sair");
      console.error(error);
    }
  };

  return (
    <header className="bg-black grid gap-6 px-6 py-4">
      <nav className="flex justify-between items-center">
        <div className="w-58">
          <img src={logo} alt="" />
        </div>
        {/* <CarrinhoCompras /> */}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              size="lg"
              className="flex items-center gap-4 cursor-pointer text-white dark:text-(--color-segundario-900)"
            >
              <div className="flex items-center gap-1">
                <div className="bg-(--bg-light) dark:bg-(--bg-dark) p-1.5 flex justify-center items-center border-2 border-white dark:border-(--color-segundario-900) rounded-2xl">
                  <User />
                </div>
                <div className="grid pl-2 font-medium text-left">
                  <h3 className="text-sm">{nomeUsuario}</h3>
                  {/* <span>{email}</span> */}
                </div>
              </div>
              <ChevronsUpDownIcon className="ml-auto size-4" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) bg-white dark:text-(--color-segundario-900) border-gray-200 min-w-auto rounded-lg"
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal ">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm ">
                <NavLink to="/perfil-responsavel" className="flex items-center gap-2">
                  <p className="text-black text-sm">Visualizar Perfil</p>
                </NavLink>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-(--secundario-900) cursor-pointer">
              <button
                onClick={logout}
                className="flex items-center bg-red-700 dark:bg-[#F31260] rounded-lg cursor-pointer py-1 px-5 gap-1"
              >
                <LogOut className="text-white w-4" />
                <span className="text-sm text-white">Sair</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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

export default NavBarAutenticado;
