import useLivrosViewModel from "../viewModels/useLivrosViewModel";
import { NavLink, useParams, useNavigate } from "react-router";
import { LivroPaginaSkeleton } from "../components/SkeletonLivroPagina";
import { toast, Toaster } from "sonner";
import { ChevronLeft } from "lucide-react";

const LivroPagina = () => {
  const { data, loading, error } = useLivrosViewModel();
  const { slug } = useParams();
  const navigate = useNavigate();

  if (loading) {
    return <LivroPaginaSkeleton />;
  }

  if (error || !data) {
    toast.error("Erro ao carregar os dados do livro");
    return <p className="text-center mt-10 text-gray-500 font-medium">Livro não encontrado.</p>;
  }

  const capaImg = data.cover_path 
    ? `https://vknwqkblxlyaedbnigwc.supabase.co/storage/v1/object/public/biblioteca/${data.cover_path}` 
    : "";

  const slugCorreto = data.slug || slug;

  return (
    <>
      <Toaster richColors position="top-center" />
      {/* Container principal agora tem limites de largura e centralização para telas grandes */}
      <main className="flex flex-col px-6 py-6 sm:px-12 max-w-7xl mx-auto w-full">
        
        <button 
          onClick={() => navigate("/")} 
          className="flex w-fit items-center gap-1 text-pink-600 hover:text-pink-700 font-medium transition-colors mb-6"
        >
          <ChevronLeft className="w-5 h-5" />
          Voltar
        </button>

        <section className="mb-8">
          {/* Flex column no mobile, Flex row no Desktop */}
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start justify-between mb-8">
            
            {/* Imagem agora se adapta sem quebrar, com limite máximo */}
            <img 
              className="w-full max-w-[250px] sm:max-w-xs md:max-w-sm object-cover rounded-2xl shadow-xl border border-gray-100" 
              src={capaImg} 
              alt={data.title} 
            />
            
            {/* A lista de infos vira um Grid horizontal no mobile e vertical no Desktop */}
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 w-full md:w-auto gap-4 md:gap-6">
              <li className="grid gap-1 px-4 py-3 md:px-6 md:py-4 border border-gray-200 shadow-sm rounded-2xl text-center bg-white">
                <span className="text-lg md:text-xl font-medium text-gray-600">Ano</span>
                <p className="text-sm font-medium">{data.publish_year}</p>
              </li>
              <li className="grid gap-1 px-4 py-3 md:px-6 md:py-4 border border-gray-200 shadow-sm rounded-2xl text-center bg-white">
                <span className="text-lg md:text-xl font-medium text-gray-600">Avaliação</span>
                <p className="text-sm font-medium">{data.total_reviews}</p>
              </li>
              <li className="grid gap-1 px-4 py-3 md:px-6 md:py-4 border border-gray-200 shadow-sm rounded-2xl text-center bg-white col-span-2 sm:col-span-1 md:col-span-1">
                <span className="text-lg md:text-xl font-medium text-gray-600">Gênero</span>
                <p className="text-sm font-medium">Fábula</p>
              </li>
            </ul>
          </div>

          <div className="grid gap-2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900">{data.title}</h2>
            <p className="text-lg text-gray-600">Autor: <span className="font-medium text-gray-800">{data.publisher}</span></p>
          </div>
        </section>

        <section className="mb-12 grid gap-6">
          <div className="grid gap-3">
            <h3 className="text-2xl font-semibold text-gray-800">Descrição:</h3>
            <p className="text-lg leading-relaxed text-gray-600 text-justify md:text-left">{data.description}</p>
          </div>
          
          <div className="mt-6 flex justify-center md:justify-start">
            <NavLink
              to={`/leitura/${slugCorreto}`}
              state={{ hasReader: data.has_reader }}
              className="w-full md:w-auto bg-pink-600 hover:bg-pink-700 transition-colors shadow-md text-white text-lg text-center font-medium px-10 py-3 rounded-xl"
            >
              Ler o livro
            </NavLink>
          </div>
        </section>
      </main>
    </>
  );
};

export default LivroPagina;