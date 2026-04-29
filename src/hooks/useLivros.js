import { useState, useEffect } from 'react';
import api from '../services/api';

export function useLivros(page = 1, search = '', sort = 'recent') {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);

    api.get('/livros', {
      params: {
        page,
        search,
        sort
      }
    })
      .then(res => {

        const listaLivros = res.data.books || [];
        setLivros(listaLivros);

        setHasMore(page < res.data.totalPages);
      })
      .catch(err => {
        console.error("Erro na requisição:", err);
        setLivros([]);
        setHasMore(false);
      })
      .finally(() => setLoading(false));
  }, [page, search, sort]);

  return { livros, loading, hasMore };
}