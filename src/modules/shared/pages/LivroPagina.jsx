import useLivrosViewModel from "../viewModels/useLivrosViewModel";
import { NavLink, useParams } from "react-router";
import { LivroPaginaSkeleton } from "../components/SkeletonLivroPagina";
import { toast, Toaster } from "sonner";

const LivroPagina = () => {
  const { data, loading, error } = useLivrosViewModel();
  const { slug } = useParams();

  if (loading) {
    return <LivroPaginaSkeleton />;
  }

  if (error) {
    toast.error("Erro ao salvar atualização");
  }
  const capaImg = `https://vknwqkblxlyaedbnigwc.supabase.co/storage/v1/object/public/biblioteca/${data.cover_path}`;

  return (
    <>
      <Toaster richColors position="top-center" />
      <main className="grid px-6">
        <section className="mb-6">
          <div className="flex gap-3 items-center justify-between mb-4">
            <img className="max-w-80 max-h-80" src={capaImg} alt="" srcset="" />
            <ul className="grid gap-6">
              <li className="grid gap-1 px-6 py-4 border border-gray-800 rounded-2xl text-center">
                <span className="text-xl font-medium text-gray-600">Ano</span>
                <p className="text-sm">{data?.publish_year}</p>
              </li>
              <li className="grid gap-1 px-6 py-4 border border-gray-500 rounded-2xl text-center">
                <span className="text-xl font-medium text-gray-600">Avaliação</span>
                <p className="text-sm">{data?.total_reviews}</p>
              </li>
              <li className="grid gap-1 px-6 py-4 border border-gray-500 rounded-2xl text-center">
                <span className="text-xl font-medium text-gray-600">Genero</span>
                <p className="text-sm">Aventura</p>
              </li>
            </ul>
          </div>
          <div className="grid gap-1">
            <h2 className="text-2xl font-medium">{data?.title}</h2>
            <p className="text-sm">Autor: {data?.publisher}</p>
          </div>
        </section>

        <section className="mb-6">
          <div className="grid gap-4">
            <div className="grid gap-1.5">
              <h3 className="text-2xl">Descrição:</h3>
              <p className="text-lg">{data?.description}</p>
            </div>
            <NavLink
              to={`/leitura/${slug}`}
              className="bg-pink-600 text-white text-lg text-center font-medium p-2 rounded-xl"
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
