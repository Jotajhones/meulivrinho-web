import { useParams } from "react-router";
import { LivroModel } from "../models/LivroModel";
import { useEffect, useState } from "react";

const useLivrosViewModel = () => {
  const { slug } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const buscarLivro = async () => {
      try {
        const { data } = await LivroModel(slug);
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    buscarLivro();
  }, [slug]);

  return { data, loading, error };
};

export default useLivrosViewModel;
