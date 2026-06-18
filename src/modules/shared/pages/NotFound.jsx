import { NavLink } from "react-router";
import { Frown } from "lucide-react";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center p-6 text-center">
      <Frown className="w-24 h-24 text-pink-600 mb-6" />
      <h1 className="text-4xl font-bold mb-2">Ops! Página não encontrada</h1>
      <p className="text-lg text-gray-600 mb-8">Parece que você se perdeu em nossa biblioteca.</p>
      <NavLink 
        to="/pagina-inicial" 
        className="bg-pink-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-pink-700 transition-colors"
      >
        Voltar para a Biblioteca
      </NavLink>
    </div>
  );
};

export default NotFound;