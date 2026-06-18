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
import useUsuarioDependentes from "../viewModels/useUsuariosDependentes";

const DialogoAdicionarPerfilDependente = () => {
  const { data: dependentes } = useUsuarioDependentes(localStorage.getItem("emailUsuario"));
  const limiteAtingido = dependentes && dependentes.length >= 5;

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schemaEditarPerfilDependente),
    defaultValues: { nome: "", numeroTelefone: "" },
  });

  function onEnviado(data) {
    console.log(data);
    reset();
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className={`flex text-white rounded-2xl px-6 py-4 items-center gap-4 text-xl transition-colors ${limiteAtingido ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-700 cursor-pointer'}`}>
            <PlusCircle />
            {limiteAtingido ? "Limite de 5 perfis atingido" : "Adicionar um Perfil"}
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Perfil do Dependente</DialogTitle>
          </DialogHeader>
          <form className="grid gap-5" onSubmit={handleSubmit(onEnviado)}>
            <div className="grid w-full gap-1 relative">
              <label className="sm:text-lg" htmlFor="nome">Nome:</label>
              <Input
                id="nome"
                {...register("nome")}
                type="text"
                className={`py-5 px-3 border ${errors.nome ? "border-red-500" : ""}`}
              />
              {errors.nome && <p className="text-red-500 text-sm absolute -bottom-6">{errors.nome.message}</p>}
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <button type="button">Cancelar</button>
              </DialogClose>
              <button
                className="bg-green-800 text-white py-3 px-2 rounded-lg"
                disabled={isSubmitting || limiteAtingido}
              >
                {limiteAtingido ? "Limite Atingido" : "Adicionar Dependente"}
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogoAdicionarPerfilDependente;