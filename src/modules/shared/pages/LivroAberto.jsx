import { useParams, useLocation, Link } from "react-router";

import EpubVisualizador from "../components/EpubVisualizador";
import PdfVizualizador from "../components/PdfVisualizador";
import { ChevronLeft } from "lucide-react";

const LivroAberto = () => {
  const { slug } = useParams();

  const locationState = useLocation();
  const hasReader = locationState.state?.hasReader ?? true;

  return (
    <div className="flex w-auto z-50 h-dvh flex-col">
      <div className="pt-10 bg-white grid px-6 gap-5">
        <Link to="/perfil-responsavel" className="flex text-lg items-center gap-2 text-gray-500">
          <ChevronLeft />
          Voltar para Biblioteca
        </Link>
        <span className="text-2xl font-medium text-center">Lendo: {slug}</span>
      </div>

      <div className="flex-1 relative bg-pink-700">
        {hasReader ? <EpubVisualizador /> : <PdfVizualizador />}
      </div>
    </div>
  );
};

export default LivroAberto;
