import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Necessário para navegação interna
import './BookCard.css';

function BookCard({ livro }) {
  const [imgError, setImgError] = useState(false);
  const navigate = useNavigate();

  // Lógica de decisão do "Happy Path"
  const handleReadClick = (e) => {
    e.preventDefault(); // Evita comportamento padrão se necessário

    if (livro.has_reader) {
      // Se houver e-reader, navegamos para a rota interna usando o slug
      navigate(`/ler/${livro.slug}`);
    } else {
      // Caso contrário, fallback para o PDF em nova guia
      window.open(livro.pdf_url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <article className="book-card">
      <div className="book-cover-container">
        {imgError ? (
          <div className="book-placeholder">
            <span>📚</span>
            <p>Capa em manutenção</p>
          </div>
        ) : (
          <img
            src={livro.capa_url || `https://picsum.photos/seed/${livro.id}/300/400`}
            alt={livro.titulo}
            className="book-cover"
            onError={() => setImgError(true)}
            loading='lazy'
          />
        )}

        {/* Badge visual para indicar que o livro é digital/interativo [Sugestão Técnica] */}
        {livro.has_reader && (
          <div className="badge-digital">✨ Digital</div>
        )}
      </div>

      <div className="book-info">
        <h3 className="book-title" title={livro.titulo}>{livro.titulo}</h3>
        <span className="book-author">{livro.autor}</span>
        <span className="book-year">{livro.ano}</span>

        <button
          onClick={handleReadClick}
          className="btn-read"
        >
          {livro.has_reader ? 'Ler Interativo' : 'Ler PDF'}
        </button>
      </div>
    </article>
  );
}

export default BookCard;