import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronsUpDownIcon, LogOut, Search, User, Users, BookOpen } from "lucide-react"; // Adicionado BookOpen
import logo from "@/assets/logo.svg";
import { NavLink, useNavigate, useSearchParams, useLocation } from "react-router";
import handleLogout from "../auth/useLogout";
import { useState, useEffect } from "react";
import useUsuarioDependentes from "../viewModels/useUsuariosDependentes";

const NavBarAutenticado = () => {
  const emailUsuario = localStorage.getItem("emailUsuario");
  const nomeUsuario = localStorage.getItem("perfilAtivoNome") || emailUsuario?.split("@")[0];
  const navigate = useNavigate();
  const location = useLocation();
  
  const { data: dependentes } = useUsuarioDependentes(emailUsuario);

  const [searchParams, setSearchParams] = useSearchParams();
  const [termoBusca, setTermoBusca] = useState(searchParams.get("q") || "");
  const mostrarBusca = location.pathname === "/pagina-inicial";

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

  const logout = async () => {
    try {
      await handleLogout();
      localStorage.removeItem("emailUsuario");
      localStorage.removeItem("perfilAtivoId");
      localStorage.removeItem("perfilAtivoNome");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const trocarPerfil = (id, nome) => {
    localStorage.setItem("perfilAtivoId", id);
    localStorage.setItem("perfilAtivoNome", nome);
    window.location.reload();
  };

  const resetarParaResponsavel = () => {
    localStorage.removeItem("perfilAtivoId");
    localStorage.removeItem("perfilAtivoNome");
    window.location.reload();
  };

  return (
    <header className="bg-black grid gap-6 px-4 sm:px-6 py-4">
      <nav className="flex justify-between items-center">
        <div className="w-32 sm:w-40">
          <NavLink to="/pagina-inicial">
            <img src={logo} alt="Meu Livrinho" className="w-full" />
          </NavLink>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2 cursor-pointer text-white">
              {/* NOME À ESQUERDA */}
              <div className="flex flex-col text-right overflow-hidden">
                <span className="text-[10px] text-gray-400 uppercase leading-none">Olá,</span>
                <h3 className="text-sm font-semibold truncate max-w-[80px] sm:max-w-[120px]">
                  {nomeUsuario}
                </h3>
              </div>
              
              {/* ÍCONE À DIREITA */}
              <div className="bg-gray-800 p-1.5 flex justify-center items-center border-2 border-white rounded-full sm:rounded-2xl">
                <User className="w-5 h-5" />
              </div>
              
              <ChevronsUpDownIcon className="size-4 ml-1" />
            </div>
          </DropdownMenuTrigger>
          
          <DropdownMenuContent className="w-56 bg-white border-gray-200 rounded-lg shadow-lg" align="end">
            <DropdownMenuLabel className="font-semibold text-gray-500">Perfis</DropdownMenuLabel>
            
            <DropdownMenuItem onClick={resetarParaResponsavel} className="cursor-pointer">
              <User className="w-4 h-4 mr-2" /> {emailUsuario?.split("@")[0]} (Responsável)
            </DropdownMenuItem>

            {dependentes?.map((dep) => (
              <DropdownMenuItem 
                key={dep.id} 
                onClick={() => trocarPerfil(dep.id, dep.full_name)}
                className="cursor-pointer"
              >
                <Users className="w-4 h-4 mr-2" /> {dep.full_name}
              </DropdownMenuItem>
            ))}
            
            <DropdownMenuSeparator />
            
            <DropdownMenuItem>
              <NavLink to="/perfil-responsavel" className="w-full">Visualizar Perfil</NavLink>
            </DropdownMenuItem>

            {/* ITEM DESTAQUE */}
            <DropdownMenuItem>
              <NavLink to="/catalogo" className="w-full flex items-center font-bold text-pink-600">
                <BookOpen className="w-4 h-4 mr-2" /> Todos os Livros
              </NavLink>
            </DropdownMenuItem>

            <DropdownMenuItem onClick={logout} className="text-red-600 cursor-pointer">
              <LogOut className="w-4 h-4 mr-2" /> Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>

      {mostrarBusca && (
        <div className="flex items-center px-3 py-1 bg-white rounded-xl">
          <Search className="text-gray-500" />
          <input
            className="w-full py-2 px-3 outline-none text-black"
            placeholder="Busque por livro, autor ou categoria..."
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
          />
        </div>
      )}
    </header>
  );
};

export default NavBarAutenticado;