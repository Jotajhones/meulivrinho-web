import { useState } from 'react';
import './PageRender.css';

const PageRender = ({ pagina, estiloGlobal, slug, currentContentIndex, idiomaAtual }) => {
  const [loading, setLoading] = useState(true);
  if (!pagina) return null;

  const { elementos, estilo, localizacao } = pagina;
  const BUCKET_URL = "https://vknwqkblxlyaedbnigwc.supabase.co/storage/v1/object/public/biblioteca/kid";

  const getImageUrl = (fileName) => `${BUCKET_URL}/${slug}/${fileName}`;

  // Extrai o prefixo (ex: "en-US" vira "en")
  const prefixoIdioma = idiomaAtual ? idiomaAtual.split('-')[0] : 'pt';
  
  // Tenta buscar o conteúdo localizado; se falhar, usa o base
  const conteudoTraduzido = localizacao?.[prefixoIdioma]?.conteudo;
  const conteudoBase = elementos?.conteudo;
  const arrayConteudoAtivo = conteudoTraduzido || conteudoBase || [];

  const itemAtual = arrayConteudoAtivo[currentContentIndex];

  return (
    <div className="page-dynamic" style={{ backgroundColor: estilo?.bg_color || estiloGlobal?.cor_tema }}>

      {elementos.imagem_url && (
        <div className="image-container">
          {loading && <div className="skeleton-image"></div>}
          <img
            src={getImageUrl(elementos.imagem_url)}
            alt={elementos.alt_text}
            onLoad={() => setLoading(false)}
            style={{ display: loading ? 'none' : 'block' }}
            onError={(e) => {
              e.target.src = "/fallback-book.png";
              setLoading(false);
            }}
          />
        </div>
      )}

      {itemAtual?.value && (
        <div className="text-content">
          <p className={itemAtual.tipo === "fala" ? "text-fala" : "text-p"}>
            {itemAtual.value}
          </p>
        </div>
      )}
    </div>
  );
};

export default PageRender;