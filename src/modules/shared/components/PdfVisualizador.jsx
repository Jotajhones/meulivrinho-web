import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useParams } from "react-router";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const PdfVizualizador = () => {
  const { slug } = useParams();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div className="h-full w-full flex flex-col bg-gray-100">
      
      <div className="flex-1 overflow-y-auto flex justify-center p-4 md:p-8">
        <Document
          file={`https://vknwqkblxlyaedbnigwc.supabase.co/storage/v1/object/public/biblioteca/pdf/${slug}.pdf`}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => console.error("Erro interno do PDF:", error)}
          className="flex justify-center shadow-2xl rounded-xl overflow-hidden h-max"
        >

          <Page 
            pageNumber={pageNumber} 
            renderTextLayer={false} 
            renderAnnotationLayer={false}
            className="max-w-full"
          />
        </Document>
      </div>

      {numPages && (
        <div className="w-full bg-white border-t border-gray-200 p-4 flex justify-center gap-6 items-center shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] z-20">
          <button
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber((prev) => prev - 1)}
            className="bg-pink-600 hover:bg-pink-700 disabled:bg-gray-300 disabled:text-gray-500 text-white px-6 py-2 rounded-xl font-medium transition-colors"
          >
            Anterior
          </button>
          
          <span className="text-lg font-medium text-gray-700">
            Página {pageNumber} de {numPages}
          </span>

          <button
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber((prev) => prev + 1)}
            className="bg-pink-600 hover:bg-pink-700 disabled:bg-gray-300 disabled:text-gray-500 text-white px-6 py-2 rounded-xl font-medium transition-colors"
          >
            Próxima
          </button>
        </div>
      )}
    </div>
  );
};

export default PdfVizualizador;