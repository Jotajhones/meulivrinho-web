import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useParams, useLocation, Link } from "react-router";

// Configuração do Worker obrigatória para o react-pdf funcionar no Vite
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

// Importações de CSS da biblioteca para garantir que a camada de texto do PDF não quebre visualmente
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

const PdfVizualizador = () => {
  const { slug } = useParams();
  const locationState = useLocation();

  // Estados do PDF
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Função que o react-pdf chama quando termina de carregar o arquivo
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1); // Garante que comece na página 1
  }

  return (
    <div className="h-max overflow-y-auto flex justify-center py-7">
      <Document
        file={`https://vknwqkblxlyaedbnigwc.supabase.co/storage/v1/object/public/biblioteca/pdf/${slug}.pdf`}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
      >
        <Page pageNumber={pageNumber} />
      </Document>

      {numPages && (
        <div
          className=""
          style={{ marginTop: "20px", display: "flex", gap: "15px", alignItems: "center" }}
        >
          <button
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber((prev) => prev - 1)}
            className="bg-black"
            style={{
              padding: "8px 16px",
              cursor: pageNumber <= 1 ? "not-allowed" : "pointer",
            }}
          >
            Anterior
          </button>
          <span>
            Página {pageNumber} de {numPages}
          </span>

          <button
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber((prev) => prev + 1)}
            style={{
              padding: "8px 16px",
              cursor: pageNumber >= numPages ? "not-allowed" : "pointer",
            }}
          >
            Próxima
          </button>
        </div>
      )}
    </div>
  );
};

export default PdfVizualizador;
