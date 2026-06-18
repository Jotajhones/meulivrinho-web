import { NavLink } from "react-router";
import logo from "@/assets/logo.svg";

const Cadastro = () => {
  return (
    <>
      <main className="px-6 h-screen py-10 bg-blue-400">
        <form className="mx-auto max-w-md space-y-4 rounded-lg border border-gray-300 bg-gray-100 p-6">
          <div className="grid justify-center">
            <img className="w-56 text-center" src={logo} alt="" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900" for="name">
              Nome
            </label>

            <input
              className="mt-1 w-full rounded-lg p-3 border border-gray-300 focus:border-indigo-500 focus:outline-none"
              id="name"
              type="text"
              placeholder="pedro da silva"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900" for="name">
              Email
            </label>

            <input
              className="mt-1 w-full rounded-lg p-3 border border-gray-300 focus:border-indigo-500 focus:outline-none"
              id="name"
              type="email"
              placeholder="email@gmail.com"
            />
          </div>

          <div>
            <label className="block text-sm  font-medium text-gray-900" for="email">
              Data de nascimento
            </label>

            <input
              className="mt-1 w-full rounded-lg p-3 border border-gray-300 focus:border-indigo-500 focus:outline-none"
              id="email"
              type="date"
              placeholder="sua senha"
            />
          </div>

          <div>
            <label className="block text-sm  font-medium text-gray-900" for="email">
              Senha
            </label>

            <input
              className="mt-1 w-full rounded-lg p-3 border border-gray-300 focus:border-indigo-500 focus:outline-none"
              id="email"
              type="password"
              placeholder="sua senha"
            />
          </div>

          <p className="text-sm">
            Já possui conta?{" "}
            <NavLink className="text-blue-400" to="/login">
              Clique aqui
            </NavLink>
          </p>

          <button
            className="block w-full rounded-lg border border-pink-600 bg-pink-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-pink-600"
            type="submit"
          >
            Entrar
          </button>
        </form>
      </main>
    </>
  );
};

export default Cadastro;
