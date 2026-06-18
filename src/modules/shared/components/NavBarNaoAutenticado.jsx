import { Search } from "lucide-react";
import logo from "@/assets/logo.svg";
import { NavLink, useSearchParams, useLocation } from "react-router";
import { useState, useEffect } from "react";

const NavBarNaoAutenticado = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [termoBusca, setTermoBusca] = useState(searchParams.get("q") || "");
  const location = useLocation();

  // A busca só faz sentido e só deve aparecer na página inicial
  const mostrarBusca = location.pathname === "/";

  useEffect(() => {
    if (!mostrarBusca) return;

    const delayDebounceFn = setTimeout(() => {
      if (termoBusca) {
        setSearchParams({ q: termoBusca });
      } else {
        setSearchParams({});
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [termoBusca, setSearchParams, mostrarBusca]);

  return (
    <header className="bg-black grid gap-6 px-6 py-4">
      <nav className="flex justify-between items-center flex-wrap sm:flex-nowrap gap-4">
        <div className="w-40 sm:w-58">
          <NavLink to="/">
            <img src={logo} alt="Meu Livrinho" className="w-full" />
          </NavLink>
        </div>

        <div className="flex gap-2">
          <NavLink
            className="text-white px-3 py-2 text-center font-medium p-2 rounded-xl hover:bg-gray-800 transition-colors"
            to="/cadastro"
          >
            Cadastro
          </NavLink>

          <NavLink
            className="bg-pink-600 text-white px-4 py-2 text-center font-medium p-2 rounded-xl hover:bg-pink-700 transition-colors"
            to="/login"
          >
            Login
          </NavLink>
        </div>
      </nav>

      {/* Esconde o Input se não estiver na página inicial */}
      {mostrarBusca && (
        <div className="flex items-center px-3 py-1 bg-white rounded-xl">
          <label htmlFor="search">
            <Search className="text-gray-500" />
          </label>
          <input
            className="w-full h-full py-2 px-3 outline-none text-black"
            placeholder="Busque por livro, autor ou categoria..."
            type="text"
            id="search"
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
          />
        </div>
      )}
    </header>
  );
};

export default NavBarNaoAutenticado;