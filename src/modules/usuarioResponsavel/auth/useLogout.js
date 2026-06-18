import { supabase } from "@/supabase";

// Execução do Logout (Encerramento de Sessão)
const handleLogout = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
};

export default handleLogout;
