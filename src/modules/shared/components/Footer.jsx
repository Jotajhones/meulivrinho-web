import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer class="bg-black text-white dark:bg-gray-900">
      <div class="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8 lg:pt-24">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold sm:text-5xl dark:text-white">
            Descubra um novo mundo com os livros
          </h2>

          <p class="mx-auto mt-4 max-w-sm pb-6 text-gray-500 dark:text-gray-400">
            Acesse o app e viva a experiência completa: cadastre livros ou adquira os seus favoritos
          </p>

          <div className="flex justify-center gap-4">
            <NavLink
              to="/cadastro"
              class="mt-8 inline-block rounded-full border border-pink-500 px-12 py-3 text-sm font-medium text-white hover:bg-indigo-600 hover:text-white"
            >
              Fazer Cadastro
            </NavLink>

            <NavLink
              to="/sobre-nos"
              class="mt-8 inline-block rounded-full border border-pink-500 px-12 py-3 text-sm font-medium text-white hover:bg-indigo-600 hover:text-white"
            >
              Sobre
            </NavLink>
          </div>
        </div>

        <div class="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24 dark:border-gray-800">
          <ul class="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
            <li>
              <a href="#" class="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
                Termos e Condições
              </a>
            </li>

            <li>
              <a href="#" class="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
                Politica de privacidade
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
