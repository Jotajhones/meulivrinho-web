import { supabase } from "@/supabase";

export const UsuarioDependenteModel = async () => {
  
  const { data, error } = await supabase
    .from("v2_profiles")
    .select("*")
    .eq("role", "DEPENDENTE");

  if (error) {
    console.error("Erro ao buscar dependentes:", error);
    return { data: null, error };
  }

  return { data, error };
};