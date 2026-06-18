import { useEffect, useState } from "react";
import { ListaLivrosModel } from "@/modules/shared/models/ListaLivrosModel";
import CardLivros from "@/modules/shared/components/CardLivros";
import SkeletonCardLivro from "@/modules/shared/components/SkeletonCardLivro";

const CatalogoLivros = () => {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregar() {
      const { data } = await ListaLivrosModel();
      setLivros(data || []);
      setLoading(false);
    }
    carregar();
  }, []);

  return (
    <main className="px-6 py-12 sm:px-12">
      <h1 className="text-3xl font-bold mb-8">Catálogo Completo</h1>
      
      {loading ? (
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {Array.from({ length: 10 }).map((_, i) => <li key={i}><SkeletonCardLivro /></li>)}
        </ul>
      ) : (
        <ul className="flex flex-wrap gap-6 justify-center sm:justify-start">
          {livros.map((livro) => (
            <li key={livro.id} className="list-none">
              <CardLivros
                nome={livro.title}
                genero={livro.v2_book_categories?.[0]?.v2_categories?.name || "Fábula"}
                autor={livro.publisher}
                ano={livro.publish_year}
                descricao={livro.description}
                avaliacao={livro.total_reviews}
                capa={`https://vknwqkblxlyaedbnigwc.supabase.co/storage/v1/object/public/biblioteca/${livro.cover_path}`}
                id={livro.id}
                has_reader={livro.has_reader}
                slug={livro.slug}
              />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default CatalogoLivros;