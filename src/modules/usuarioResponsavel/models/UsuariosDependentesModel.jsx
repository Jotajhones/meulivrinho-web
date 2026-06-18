import { supabase } from "@/supabase";

export const UsuarioDependenteModel = async ({ email }) => {
  const { LoginError } = await supabase.auth.signInWithPassword({
    email,
    password: "senha123",
  });

  if (LoginError) {
    console.error("o erro foi" + LoginError);
  }
  console.log(email);

  const { data, error } = await supabase.from("v2_profiles").select("*").eq("role", "DEPENDENTE");

  if (error) {
    console.error("Erro ao buscar livros:", error);
    return null;
  }

  return { data, error };
};
