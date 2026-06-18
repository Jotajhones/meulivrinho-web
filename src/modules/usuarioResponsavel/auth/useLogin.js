import { supabase } from "@/supabase";

// Execução do Login com e-mail e senha
const handleLogin = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    console.error("Erro na autenticação:", error.message);
    return null;
  }

  if (error) throw new Error(error.message);
  return data.session;
  // Retorna o objeto de sessão contendo o access_token
};

export default handleLogin;
