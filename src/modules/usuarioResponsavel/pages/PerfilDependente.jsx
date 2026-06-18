import { ChevronLeft, Trash } from "lucide-react";

import DialogoAdicionarPerfilDependente from "../components/DialogoAdicionarPerfilDependente";
import DialogoEditarPerfilDependente from "../components/DialogoEditarPerfilDependente";
import { NavLink } from "react-router";
import useUsuarioDepentendes from "../viewModels/useUsuariosDependentes";

const PerfilDependente = () => {
  const { data, error } = useUsuarioDepentendes(localStorage.getItem("emailUsuario"));

  console.log(data);
  console.log(error);
  return (
    <>
      <header className="bg-gray-100">
        <nav className="grid grid-cols-4 py-5 px-4 items-center justify-between">
          <NavLink to="/perfil-responsavel">
            <ChevronLeft className="" />
          </NavLink>
          <h2 className="text-center col-span-3 text-2xl">Perfil dos Dependentes</h2>
        </nav>
      </header>

      <main>
        <section className="grid gap-5 px-4 py-6">
          <h3 className="text-2xl">Perfis relacionados a esse perfil</h3>
          <ul className="px-3">
            {data?.map((filho) => (
              <li key={filho.id} className="flex items-center justify-between">
                <p className="text-2xl text-black">{filho.full_name}</p>

                <div className="flex gap-4">
                  <DialogoEditarPerfilDependente />

                  <button>
                    <Trash className="text-red-600" />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="grid justify-center">
            <DialogoAdicionarPerfilDependente />
          </div>
        </section>
      </main>
    </>
  );
};

export default PerfilDependente;
