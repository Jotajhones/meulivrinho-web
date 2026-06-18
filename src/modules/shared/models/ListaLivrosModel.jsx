import { supabase } from "@/supabase";

export const ListaLivrosModel = async () => {
  const { LoginError } = await supabase.auth.signInWithPassword({
    email: "jpjpjplima@gmail.com",
    password: "NovaSenha123@",
  });

  if (LoginError) {
    console.error("o erro foi" + LoginError);
  }

  const { data, error } = await supabase.from("v2_books").select("*");

  if (error) {
    console.error("Erro ao buscar livros:", error);
    return null;
  }

  return { data, error };
};
