import { useState } from 'react';
import './BookCard.css';

function BookCard({ livro }) {
  const [imgError, setImgError] = useState(false);

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
      </div>
      
      <div className="book-info">
        <h3 className="book-title" title={livro.titulo}>{livro.titulo}</h3>
        <span className="book-author">{livro.autor}</span>
        <span className="book-year">{livro.ano_publicacao}</span>
        
        <a 
          href={livro.pdf_url} 
          target="_blank" 
          rel="noreferrer" 
          className="btn-read"
        >
          Ler Agora
        </a>
      </div>
    </article>
  );
}

export default BookCard;