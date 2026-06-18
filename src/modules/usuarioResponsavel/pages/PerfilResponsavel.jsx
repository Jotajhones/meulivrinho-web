import {
  BookOpenText,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  CreditCard,
  Settings,
  ShieldCheck,
  SquareArrowRightExit,
} from "lucide-react";
import { NavLink } from "react-router";
import DialogoEditarPerfilResponsavel from "../components/DialogoEditarPerfilResponsavel";

import IconPerfil from "@/assets/icon-perfil-1.png";

const PerfilResponsavel = () => {
  const emailUsuario = localStorage.getItem("emailUsuario");
  const nomeUsuario = emailUsuario.split("@")[0];

  return (
    <>
      <header className="bg-gray-100">
        <nav className="grid py-5 px-4 grid-cols-3 justify-between">
          <NavLink to="/pagina-inicial">
            <ChevronLeft className="" />
          </NavLink>
          <h2 className="text-center text-2xl">Perfil</h2>
        </nav>
      </header>
      <main className="grid gap-7 px-6 bg-gray-100">
        <section>
          <div className="grid text-center justify-center gap-2 pb-6">
            <div className="grid justify-center pb-3">
              <img
                className="rounded-full object-cover w-60 h-60"
                src={IconPerfil}
                alt="icone de perfil"
              />
            </div>
            <h3 className="text-2xl font-medium ">{nomeUsuario}</h3>
            <p className="text-gray-800">{emailUsuario}</p>
          </div>
          <DialogoEditarPerfilResponsavel />
        </section>

        <section className="grid gap-5 pb-6">
          <ul className="grid gap-4 bg-white px-2 py-4 rounded-2xl *:p-5">
            <li className="border-b border-b-gray-300">
              <NavLink to="/perfil-dependente" className="flex items-center justify-between ">
                <div className="flex items-center gap-2 text-lg">
                  <CircleUserRound className="w-6" />
                  Gestão dos perfis
                </div>
                <ChevronRight />
              </NavLink>
            </li>
            <li className="border-b border-b-gray-300">
              <NavLink to="/adicionar-livro" className="flex items-center justify-between ">
                <div className="flex items-center gap-2 text-lg">
                  <BookOpenText className="w-6" />
                  Meus Livros
                </div>
                <ChevronRight />
              </NavLink>
            </li>

            <li>
              <NavLink className="flex items-center justify-between ">
                <div className="flex items-center gap-2 text-lg">
                  <CreditCard className="w-6" />
                  Cartões
                </div>
                <ChevronRight />
              </NavLink>
            </li>
          </ul>

          <ul className="grid gap-4 bg-white px-2 py-4 rounded-2xl *:p-5">
            <li className="border-b border-b-gray-300">
              <NavLink className="flex items-center justify-between ">
                <div className="flex items-center gap-2 text-lg">
                  <Settings className="w-6" />
                  Configurações
                </div>
                <ChevronRight />
              </NavLink>
            </li>
            <li className="">
              <NavLink className="flex items-center justify-between ">
                <div className="flex items-center gap-2 text-lg">
                  <ShieldCheck className="w-6" />
                  Privacidade e Segurança
                </div>
                <ChevronRight />
              </NavLink>
            </li>
          </ul>

          <ul className="grid gap-4 bg-white px-2 py-4 rounded-2xl *:p-5">
            <li>
              <NavLink className="flex items-center justify-between ">
                <div className="flex items-center gap-2 text-lg">
                  <SquareArrowRightExit className="w-6" />
                  Sair
                </div>
                <ChevronRight />
              </NavLink>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default PerfilResponsavel;
