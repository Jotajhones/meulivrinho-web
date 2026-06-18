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

    const fetchEpub = async () => {
      try {
        const response = await fetch(
          `https://vknwqkblxlyaedbnigwc.supabase.co/storage/v1/object/public/biblioteca/ebook/${slug}.epub`
        );

        if (!response.ok) {
          throw new Error(`Erro HTTP: ${response.status}`);
        }

        // const buffer = await response.arrayBuffer();
        // console.log("ArrayBuffer carregado. Tamanho em bytes:", buffer.byteLength);

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
    <>
      {loading ? (
        <div className="loading-state">Baixando arquivo EPUB e montando leitor...</div>
      ) : (
        <ReactReader
          url={bookData}
          location={location}
          locationChanged={(epubcfi) => setLocation(epubcfi)}
          getRendition={(rendition) => {
            // Remove margens internas forçadas pelo arquivo EPUB original
            rendition.themes.default({
              body: { padding: "0 !important", margin: "0 !important" },
            });
          }}
        />
      )}
    </>
  );
}
