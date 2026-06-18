import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaEditarPerfilDependente } from "../schemas/schema";
import { PlusCircle } from "lucide-react";

const DialogoAdicionarPerfilDependente = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schemaEditarPerfilDependente),
    defaultValues: {
      nome: "",
      numeroTelefone: "",
    },
  });

  function onEnviado(data) {
    console.log(data);

    reset();
  }

  return (
    <div>
      <Dialog>
        <div>
          <DialogTrigger asChild>
            <div className="flex bg-green-700 text-white rounded-2xl px-6 py-4 items-center gap-4 text-xl">
              <PlusCircle />
              Adicionar um Perfil
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Pefil do Dependente</DialogTitle>
            </DialogHeader>
            <form className="grid gap-5" onSubmit={handleSubmit(onEnviado)}>
              <div className="grid w-full gap-1 relative">
                <label className="sm:text-lg" htmlFor="nome">
                  Nome:
                </label>
                <Input
                  id="nome"
                  {...register("nome")}
                  type="text"
                  className={`py-5 px-3 transition-all border ${
                    errors.nome ? "border-red-500 focus-visible:ring-red-500" : ""
                  }`}
                />
                {errors.nome && (
                  <p className="text-red-500 text-sm absolute -bottom-6">{errors.nome.message}</p>
                )}
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <button>Cancelar</button>
                </DialogClose>
                <button
                  className="bg-green-800 text-white py-3 px-2 rounded-lg"
                  disabled={isSubmitting ? true : false}
                >
                  Adicionar Dependente
                </button>
              </DialogFooter>
            </form>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
};

export default DialogoAdicionarPerfilDependente;
