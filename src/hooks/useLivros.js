import { useState, useEffect } from 'react';
import api from '../services/api';

export function useLivros() {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/livros')
      .then(res => setLivros(res.data))
      .finally(() => setLoading(false));
  }, []);

  return { livros, loading };
}