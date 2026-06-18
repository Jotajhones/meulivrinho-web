import { useEffect, useState } from "react";
import { supabase } from "@/supabase";
import NavBarAutenticado from "@/modules/usuarioResponsavel/components/NavBarAutenticado";
import NavBarNaoAutenticado from "@/modules/shared/components/NavBarNaoAutenticado";

const SmartNavbar = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    // Verifica se existe uma sessão válida no localStorage do Supabase
    // Substitua "sb-..." pelo prefixo do seu projeto se necessário, 
    // mas o getSession().data.session é o padrão mais seguro.
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      setIsLogged(!!data.session);
    };

    checkAuth();

    // Atualiza se o usuário logar ou deslogar em tempo real
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLogged(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return isLogged ? <NavBarAutenticado /> : <NavBarNaoAutenticado />;
};

export default SmartNavbar;