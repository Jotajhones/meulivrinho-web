import { useLivros } from './hooks/useLivros';
import './styles/App.css'; // Importando o CSS que acabamos de criar

function App() {
  const { livros, loading } = useLivros();

  if (loading) return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Carregando livrinhos... 🎈</h1>
    </div>
  );

  return (
    <div className="container">
      <header className="header">
        <h1>Meu Livrinho 📚</h1>
        <p>A biblioteca mágica do João Pedro</p>
      </header>

      <main className="book-grid">
        {livros.map((livro) => (
          <article key={livro.id} className="book-card">
            {/* Se as capas ainda não estiverem no Supabase Storage, 
                podemos usar um placeholder lúdico baseado no ID */}
            <img 
              src={`https://picsum.photos/seed/${livro.id}/300/400`} 
              alt={livro.titulo} 
              className="book-cover" 
            />
            
            <h3 className="book-title">{livro.titulo}</h3>
            <span className="book-author">{livro.autor}</span>
            
            <a 
              href={livro.url_pdf} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-read"
            >
              Ler Agora
            </a>
          </article>
        ))}
      </main>
    </div>
  );
}

export default App;