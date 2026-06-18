import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router";
import { supabase } from "@/supabase";

const AuthGuard = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica se existe sessão ativa
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      
      if (!data.session) {
        navigate("/login");
      }
      setLoading(false);
    };

    checkSession();

    // Monitora mudanças de autenticação
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT' || !session) {
        navigate("/login");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  if (loading) {
    return <div className="h-screen flex items-center justify-center">Carregando...</div>;
  }

  return <Outlet />;
};

export default AuthGuard;