import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeProfile, setActiveProfile] = useState(null); // Armazena o ID do dependente selecionado

  useEffect(() => {
    // Busca a sessão local existente na inicialização do app
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Listener que detecta eventos de Auth (SIGNED_IN, SIGNED_OUT, TOKEN_REFRESHED)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (!session) setActiveProfile(null); // Limpa o estado da criança caso ocorra logout
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: session?.user ?? null,
        activeProfile,
        setActiveProfile,
        isAuthenticated: !!session,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
