import { supabase } from "@/supabase";

export const LivroModel = async (slug) => {
  const { LoginError } = await supabase.auth.signInWithPassword({
    email: "jpjpjplima@gmail.com",
    password: "NovaSenha123@",
  });

  if (LoginError) {
    console.error("o erro foi" + LoginError);
  }

  const { data, error } = await supabase.from("v2_books").select("*").eq("slug", slug).single();

  if (error) {
    console.error("Erro ao buscar livros:", error);
    return null;
  }

  return { data, error };
};
