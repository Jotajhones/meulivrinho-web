import { useState } from 'react';
import { useLivros } from '../../hooks/useLivros';
import './Home.css';
import BookCard from '../../components/BookCard/BookCard';

function Home() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState('recent'); 

  const { livros, loading, hasMore } = useLivros(page, search, sort);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
    setPage(1);
  };

  return (
    <div className="container">
      <header className="home-header">
        <h1>A Biblioteca Mágica 📚</h1>

        <div className="controls-row">
          <input
            type="text"
            placeholder="O que vamos ler hoje?"
            value={search}
            onChange={handleSearch}
            className="search-input"
          />

          <select value={sort} onChange={handleSortChange} className="sort-select">
            <option value="recent">Adicionados Recentemente</option>
            <option value="az">Título (A-Z)</option>
            <option value="year">Ano de Publicação</option>
          </select>
        </div>
      </header>

      {loading ? (
        <div className="status-msg">Carregando livrinhos... 🎈</div>
      ) : (
        <>
          <main className="book-grid">
            {livros?.length > 0 ? (
              livros.map((livro) => <BookCard key={livro.id} livro={livro} />)
            ) : (
              <div className="status-msg">Nenhum livrinho encontrado. 😢</div>
            )}
          </main>

          <footer className="pagination">
            <button
              disabled={page === 1}
              onClick={() => setPage(p => p - 1)}
              className="btn-pagi"
            >
              Anterior
            </button>
            <span className="page-info">Página {page}</span>
            <button
              disabled={!hasMore}
              onClick={() => setPage(p => p + 1)}
              className="btn-pagi"
            >
              Próximo
            </button>
          </footer>
        </>
      )}
    </div>
  );
}

export default Home;