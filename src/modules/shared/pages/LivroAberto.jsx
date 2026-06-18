import { useParams, useLocation, useNavigate } from "react-router";
import EpubVisualizador from "../components/EpubVisualizador";
import PdfVizualizador from "../components/PdfVisualizador";
import { ChevronLeft, BookOpen } from "lucide-react";

const LivroAberto = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const locationState = useLocation();
  const hasReader = locationState.state?.hasReader ?? true;

  return (
    <div className="flex w-full h-dvh flex-col bg-gray-50 overflow-hidden">
      <header className="bg-white py-3 px-4 flex items-center justify-between shadow-sm border-b border-gray-200 z-10">
        <button 
          onClick={() => navigate(`/livro/${slug}`)}
          className="flex items-center gap-1 text-pink-600 font-medium cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" /> Voltar
        </button>
        <span className="font-semibold truncate px-4 capitalize">{slug.replace(/-/g, " ")}</span>
        <div className="w-16"></div> {/* Espaçador para centralizar */}
      </header>

      <div className="flex-1 relative w-full h-full overflow-hidden">
        {hasReader ? <EpubVisualizador /> : <PdfVizualizador />}
      </div>
    </div>
  );
};

export default LivroAberto;