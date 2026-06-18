import BadgeGenero from "@/modules/shared/components/BadgeGenero";
import CardLivros from "@/modules/shared/components/CardLivros";
import { useEffect, useState } from "react";
import { ListaLivrosModel } from "@/modules/shared/models/ListaLivrosModel";
import SkeletonCardLivro from "@/modules/shared/components/SkeletonCardLivro";
import imagemDeFundoHome from "@/assets/imagem-de-fundo-home.png";
import { useSearchParams } from "react-router";

function PaginaInicial() {
  const [livros, setLivros] = useState([]);
  const listaGenero = ["Aventura", "Fantasia", "Fábula", "Clássico", "Suspense"];
  const [loading, setLoading] = useState(true);

  // Lê a barra de busca da URL
  const [searchParams] = useSearchParams();
  const termoBusca = searchParams.get("q")?.toLowerCase() || "";

  useEffect(() => {
    async function carregarLivros() {
      setLoading(true);
      const { data } = await ListaLivrosModel();
      setLivros(data || []);
      setLoading(false);
    }
    carregarLivros();
  }, []);

  const temGenero = (livro, nomeGenero) => {
    if (!livro.v2_book_categories || livro.v2_book_categories.length === 0) return false;
    return livro.v2_book_categories.some(
      (relacao) => relacao.v2_categories?.name === nomeGenero
    );
  };

  const getPrimeiroGenero = (livro) => {
    if (livro.v2_book_categories && livro.v2_book_categories.length > 0) {
      return livro.v2_book_categories[0].v2_categories?.name || "Fábula";
    }
    return "Fábula";
  };

  const livrosEpub = livros.filter((l) => l.has_reader === true).slice(0, 10);
  const livrosAventura = livros.filter((l) => temGenero(l, "Aventura")).slice(0, 10);
  const livrosFantasia = livros.filter((l) => temGenero(l, "Fantasia")).slice(0, 10);

  const livrosFiltradosBusca = livros.filter((livro) => {
    if (!termoBusca) return true;
    
    const matchTitulo = (livro.title || "").toLowerCase().includes(termoBusca);
    const matchAutor = (livro.publisher || "").toLowerCase().includes(termoBusca);
    const matchCategoria = livro.v2_book_categories?.some((relacao) => 
      (relacao.v2_categories?.name || "").toLowerCase().includes(termoBusca)
    );

    return matchTitulo || matchAutor || matchCategoria;
  });

  const renderCards = (lista) => {
    if (loading) {
      return Array.from({ length: 6 }).map((_, index) => (
        <li key={index} className="list-none">
          <SkeletonCardLivro />
        </li>
      ));
    }

    if (lista.length === 0) {
      return <p className="text-gray-500 py-4 italic">Nenhum livro encontrado.</p>;
    }

    return lista.map((livro) => {
      const capaImg = `https://vknwqkblxlyaedbnigwc.supabase.co/storage/v1/object/public/biblioteca/${livro.cover_path}`;
      const generoPrincipal = getPrimeiroGenero(livro);

      return (
        <li key={livro.id} className="list-none">
          <CardLivros
            nome={livro.title}
            genero={generoPrincipal}
            autor={livro.publisher}
            ano={livro.publish_year}
            descricao={livro.description}
            avaliacao={livro.total_reviews}
            capa={capaImg}
            id={livro.id}
            has_reader={livro.has_reader}
            slug={livro.slug}
          />
        </li>
      );
    });
  };

  if (termoBusca) {
    return (
      <main className="px-6 sm:px-12 py-8">
        <h2 className="text-3xl font-medium mb-8">Resultados para "{termoBusca}"</h2>
        
        {livrosFiltradosBusca.length > 0 ? (
          <ul className="flex flex-wrap gap-6 justify-center sm:justify-start">
            {renderCards(livrosFiltradosBusca)}
          </ul>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h3 className="text-2xl font-medium text-gray-700">Poxa, não encontramos nada!</h3>
            <p className="text-gray-500 mt-2">Nenhum livro, autor ou categoria encontrado para a busca atual.</p>
          </div>
        )}
      </main>
    );
  }

  return (
    <>
      <div className="pb-6">
        <div className="grid">
          <div className="absolute z-10 grid self-end justify-self-center px-3 pb-6 gap-2 sm:px-8 md:pb-12">
            <h1 className="text-2xl font-medium font-sans text-center text-white sm:text-3xl lg:text-5xl">
              Meu Livrinho: O Porto Seguro da Leitura Digital
            </h1>
            <p className="text-white font-serif text-xs text-center italic sm:text-lg lg:text-2xl">
              Uma plataforma focada em controle parental passivo que ajuda na formação de pequenos
              leitores, substituindo a hiperestimulação das telas por um tempo de qualidade e
              desenvolvimento
            </p>
          </div>

          <img
            width="640"
            height="360"
            className="object-cover z-0 w-full lg:h-175 lg:object-fill"
            src={imagemDeFundoHome}
            alt="Uma mãe lendo para seu filho"
            title=""
          />
        </div>
      </div>
      <main className="px-6 sm:px-12">
        <section className="mb-6">
          <ul className="flex gap-4 overflow-x-auto sm:justify-center">
            {listaGenero.map((genero) => {
              return (
                <li key={genero}>
                  <BadgeGenero genero={genero} />
                </li>
              );
            })}
          </ul>
        </section>

        <section className="grid gap-10 mb-8">
          <div className="grid gap-4">
            <h2 className="text-3xl font-medium">Leia no Navegador</h2>
            <ul className="flex gap-3 overflow-auto sm:flex">
              {renderCards(livrosEpub)}
            </ul>
          </div>

          <div className="grid gap-4">
            <h2 className="text-3xl font-medium">Aventuras Incríveis</h2>
            <ul className="flex gap-3 overflow-auto sm:flex">
              {renderCards(livrosAventura)}
            </ul>
          </div>

          <div className="grid gap-4">
            <h2 className="text-3xl font-medium">Mundos de Fantasia</h2>
            <ul className="flex gap-3 overflow-auto sm:flex">
              {renderCards(livrosFantasia)}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default PaginaInicial;