import { supabase } from "@/supabase";

export const LivroModel = async (slug) => {

  const { data, error } = await supabase
    .from("v2_books")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Erro ao buscar detalhes do livro:", error);
    return null;
  }

  return { data, error };
};