import { useState, useEffect } from "react";
import { ReactReader } from "react-reader";
import { useParams, useLocation } from "react-router";

export default function EpubVisualizador() {
  const { slug } = useParams();
  const locationState = useLocation();
  const hasReader = locationState.state?.hasReader ?? true;

  const [bookData, setBookData] = useState(null);
  const [loading, setLoading] = useState(hasReader);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (!hasReader) return;

    // Script de Força Bruta para preencher a tela
    const observer = new MutationObserver(() => {
      const iframes = document.querySelectorAll('iframe');
      iframes.forEach(iframe => {
        try {
          const doc = iframe.contentDocument || iframe.contentWindow.document;
          if (doc) {
            doc.body.style.setProperty('width', '100vw', 'important');
            doc.body.style.setProperty('height', '100vh', 'important');
            doc.body.style.setProperty('margin', '0', 'important');
            doc.body.style.setProperty('padding', '0', 'important');
          }
        } catch (e) { /* bloqueado por CORS */ }
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasReader) return;
    const fetchEpub = async () => {
      try {
        const response = await fetch(
          `https://vknwqkblxlyaedbnigwc.supabase.co/storage/v1/object/public/biblioteca/ebook/${slug}.epub`
        );
        const buffer = await response.arrayBuffer();
        setBookData(buffer);
      } catch (error) {
        console.error("Erro no fetch do EPUB:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEpub();
  }, [slug, hasReader]);

  return (
    <div className="absolute inset-0 w-full h-full bg-gray-50">
      {loading ? (
        <div className="flex items-center justify-center w-full h-full text-gray-500 font-medium">
          Carregando livro...
        </div>
      ) : (
        <ReactReader
          url={bookData}
          location={location}
          locationChanged={(epubcfi) => setLocation(epubcfi)}
          getRendition={(rendition) => {
            rendition.themes.default({
              body: { padding: "0 !important", margin: "0 !important", width: "100% !important" },
              img: { "max-width": "100% !important" }
            });
          }}
        />
      )}
    </div>
  );
}