import BadgeGenero from "@/modules/shared/components/BadgeGenero";
import CardLivros from "@/modules/shared/components/CardLivros";
import { useEffect, useState } from "react";
import { ListaLivrosModel } from "@/modules/shared/models/ListaLivrosModel";
import SkeletonCardLivro from "@/modules/shared/components/SkeletonCardLivro";
import imagemDeFundoHome from "@/assets/imagem-de-fundo-home.png";

function PaginaInicial() {
  const [livros, setLivros] = useState([]);
  const listaGenero = ["Fantasia", "Romance", "Terror", "Ficção", "Drama", "Aventura"];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarLivros() {
      setLoading(true);
      const { data } = await ListaLivrosModel();
      await setLivros(data || []);
      setLoading(false);
    }
    carregarLivros();
  }, []);

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
              leitores, subtituindo a hiperestimulação das telas por um tempo de qualidade e
              desenvolvimento
            </p>
          </div>

          <img
            width="640"
            height="360"
            className="object-cover z-0 w-full lg:h-175 lg:object-fill"
            src={imagemDeFundoHome}
            alt="Uma mãe lendo para sey filho"
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
                  <BadgeGenero genero={`${genero}`} />
                </li>
              );
            })}
          </ul>
        </section>

        <section className="grid gap-10">
          <div className="grid gap-4">
            <h2 className="text-3xl font-medium">Literatura Infantil</h2>

            <ul className="flex gap-3 overflow-auto sm:flex">
              {loading
                ? Array.from({ length: 9 }).map((_, index) => (
                    <li key={index}>
                      <SkeletonCardLivro />
                    </li>
                  ))
                : livros.map(
                    ({
                      id,
                      description,
                      cover_path,
                      genero = "Ficção",
                      publisher,
                      publish_year,
                      title,
                      total_reviews,
                    }) => {
                      const capaImg = `https://vknwqkblxlyaedbnigwc.supabase.co/storage/v1/object/public/biblioteca/${cover_path}`;

                      return (
                        <li key={id}>
                          <CardLivros
                            nome={title}
                            genero={genero}
                            autor={publisher}
                            ano={publish_year}
                            descricao={description}
                            avaliacao={total_reviews}
                            capa={capaImg}
                            id={id}
                          />
                        </li>
                      );
                    }
                  )}
            </ul>
          </div>
          <div className="grid gap-4">
            <h2 className="text-3xl font-medium">Fabulas</h2>

            <ul className="flex gap-3 overflow-auto sm:flex">
              {livros.map(
                ({
                  id,
                  description,
                  cover_path,
                  genero = "Ficção",
                  publisher,
                  publish_year,
                  title,
                  total_reviews,
                }) => {
                  const capaImg = `https://vknwqkblxlyaedbnigwc.supabase.co/storage/v1/object/public/biblioteca/${cover_path}`;

                  return (
                    <li key={id}>
                      <CardLivros
                        nome={title}
                        genero={genero}
                        autor={publisher}
                        ano={publish_year}
                        descricao={description}
                        avaliacao={total_reviews}
                        capa={capaImg}
                        id={id}
                      />
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div className="grid gap-4 mb-8">
            <h2 className="text-3xl font-medium">Historias para ler antes de dormir</h2>

            <ul className="flex gap-3 overflow-auto sm:flex">
              {livros.map(
                ({
                  id,
                  description,
                  cover_path,
                  genero = "Ficção",
                  publisher,
                  publish_year,
                  title,
                  total_reviews,
                }) => {
                  const capaImg = `https://vknwqkblxlyaedbnigwc.supabase.co/storage/v1/object/public/biblioteca/${cover_path}`;

                  return (
                    <li key={id}>
                      <CardLivros
                        nome={title}
                        genero={genero}
                        autor={publisher}
                        ano={publish_year}
                        descricao={description}
                        avaliacao={total_reviews}
                        capa={capaImg}
                        id={id}
                      />
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default PaginaInicial;
