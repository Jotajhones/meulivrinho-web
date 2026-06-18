import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NavLink } from "react-router";
import { ChevronLeft } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { schemaAdicionarLivro } from "../schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod";

const AdicionarLivro = () => {
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schemaAdicionarLivro),
    defaultValues: {
      titulo: "",
      descricao: "",
      arquivo: "",
      coverFile: "",
      idResponsavel: "",
    },
  });

  function envioTeste(data) {
    console.log(data);
    reset();
  }
  return (
    <>
      <main className="px-6 pt-8">
        <section className="grid">
          <div className="">
            <div className="flex items-center mb-4 gap-2.5">
              <NavLink to="/">
                <ChevronLeft />
              </NavLink>
              <h1 className="text-2xl">Adicione um livro</h1>
            </div>

            <form
              onSubmit={handleSubmit(envioTeste, (errors) => console.log(errors))}
              className="grid gap-5"
              action=""
            >
              <div className="grid gap-2">
                <label htmlFor="titulo">Título</label>
                <input
                  className="border border-gray-600 px-4 py-2 rounded-lg"
                  type="text"
                  id="titulo"
                  {...register("titulo")}
                />
              </div>
              <Controller
                name="arquivo"
                control={control}
                render={({ field, fieldState }) => (
                  <div className="grid">
                    <Field>
                      <FieldLabel htmlFor="arquivo">Livro Digital</FieldLabel>

                      <Input
                        id="arquivo"
                        type="file"
                        accept=".epub,application/epub+zip"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          field.onChange(file);
                        }}
                      />

                      <FieldDescription>Selecione um arquivo .epub ou .pdf.</FieldDescription>
                    </Field>

                    {fieldState.error && (
                      <p className="mt-1 text-sm text-red-500">{fieldState.error.message}</p>
                    )}

                    <p className="text-pretty mt-2 text-sm leading-5 text-muted-foreground sm:flex sm:items-center sm:justify-between">
                      <span className="pl-1 sm:pl-0">Tamanho máximo de arquivo: 50MB</span>
                    </p>
                  </div>
                )}
              />
              <div className="grid">
                <Field>
                  <FieldLabel htmlFor="coverFile">Capa</FieldLabel>

                  <Input id="capa" type="text" {...register("coverFile")} />

                  <FieldDescription>Selecione um arquivo .png ou .jpg</FieldDescription>
                </Field>

                {/* {coverFile.error && (
                  <p className="text-sm text-red-500 mt-1">{coverFile.error.message}</p>
                )} */}

                <p className="text-pretty mt-2 text-sm leading-5 text-muted-foreground sm:flex sm:items-center sm:justify-between">
                  <span className="pl-1 sm:pl-0">Tamanho máximo de arquivo: 5MB</span>
                </p>
              </div>
              <div className="grid gap-2">
                <label htmlFor="descricao">Descrição</label>
                <textarea
                  className="border border-gray-600 px-4 py-2 rounded-lg"
                  {...register("descricao")}
                  id="descricao"
                />
              </div>

              <button className="bg-pink-600 text-white rounded-lg py-4">Salvar livro</button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default AdicionarLivro;
