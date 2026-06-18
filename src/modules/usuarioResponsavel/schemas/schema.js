import { z } from "zod";

const ALLOWED_TYPES = ["application/pdf", "application/epub+zip"];

export const schemaLogin = z.object({
  email: z.string().min(3, "Digite seu email"),
  senha: z.string().min(8, "Digite sua senha"),
});

export const schemaEditarPerfilResponsavel = z.object({
  nome: z.string().min(3, "Digite seu nome"),
  numeroTelefone: z.string().min(8, "Número inválido"),
});

export const schemaEditarPerfilDependente = z.object({
  nome: z.string().min(3, "Digite seu nome"),
});

export const schemaAdicionarLivro = z.object({
  titulo: z.string().min(3, "Digite o nome do livro"),
  descricao: z.string().min(3, "Digite a descrição do livro"),
  arquivo: z
    .instanceof(File, {
      message: "Selecione um arquivo",
    })
    .refine((file) => ALLOWED_TYPES.includes(file.type), {
      message: "O arquivo deve ser PDF ou EPUB",
    }),
  coverFile: z.string().min(3, "Digite o caminho "),
  idResponsavel: z.uuid(),
});
