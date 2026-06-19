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
          `${import.meta.env.VITE_SUPABASE_BIBLIOTECA}/ebook/${slug}.epub`
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
        />
      )}
    </div>
  );
}