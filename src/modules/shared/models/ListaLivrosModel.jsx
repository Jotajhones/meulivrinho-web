import { supabase } from "@/supabase";

export const ListaLivrosModel = async () => {
  const { data, error } = await supabase
    .from("v2_books")
    .select(`
      *,
      v2_book_categories (
        v2_categories (
          name
        )
      )
    `);

  if (error) {
    console.error("Erro ao buscar livros:", error);
    return null;
  }

  return { data, error };
};