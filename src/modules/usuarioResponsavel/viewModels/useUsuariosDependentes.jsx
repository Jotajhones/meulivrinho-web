import { useEffect, useState } from "react";
import { UsuarioDependenteModel } from "../models/UsuariosDependentesModel";

const useUsuarioDepentendes = (email) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const buscarDependentes = async () => {
      try {
        const { data } = await UsuarioDependenteModel(email);
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    buscarDependentes();
  }, [email]);

  return { data, loading, error };
};

export default useUsuarioDepentendes;
