import { NavLink, useNavigate } from "react-router";
import logo from "@/assets/logo.svg";
import handleLogin from "@/modules/usuarioResponsavel/auth/useLogin";
import { schemaLogin } from "@/modules/usuarioResponsavel/schemas/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, Toaster } from "sonner";

const Login = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schemaLogin),
    defaultValues: {
      email: "",
      senha: "",
    },
  });

  const submitLogin = async ({ email, senha }) => {
    const result = await handleLogin(email, senha);

    if (!result) {
      toast.error("Credenciais não encontradas. Verifique seu usuário e senha.");
      reset();
      return;
    }

    toast.success("Login realizado com sucesso! Bem-vindo de volta.");
    localStorage.setItem("emailUsuario", email);

    setTimeout(() => {
      navigate("/pagina-inicial");
      reset();
    }, 1000);
  };

  return (
    <>
      <Toaster position="top-center" richColors />
      <main className="px-6 h-screen py-10 bg-blue-400">
        <form
          onSubmit={handleSubmit(submitLogin)}
          className="mx-auto max-w-md space-y-4 rounded-lg border border-gray-300 bg-gray-100 p-6"
        >
          <div className="grid justify-center">
            <img className="w-56 text-center" src={logo} alt="" />
          </div>

          <div className="grid">
            <label className="block text-sm font-medium text-gray-900" for="name">
              Email
            </label>

            <input
              className="mt-1 w-full rounded-lg p-3 border border-gray-300 focus:border-indigo-500 focus:outline-none"
              id="name"
              type="email"
              placeholder="email@gmail.com"
              {...register("email")}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="grid">
            <label className="block text-sm  font-medium text-gray-900" for="email">
              Senha
            </label>

            <input
              className="mt-1 w-full rounded-lg p-3 border border-gray-300 focus:border-indigo-500 focus:outline-none"
              id="email"
              type="password"
              placeholder="sua senha"
              {...register("senha")}
            />
            {errors.senha && <p className="text-red-500 text-sm">{errors.senha.message}</p>}
          </div>

          <p className="text-sm">
            Não tem conta?{" "}
            <NavLink className="text-blue-400" to="/cadastro">
              Clique aqui
            </NavLink>
          </p>

          <button
            disabled={isSubmitting ? "disabled" : ""}
            className="block w-full rounded-lg text-center border border-pink-600 bg-pink-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-pink-600"
          >
            {isSubmitting ? "Carregando..." : "Entrar"}
          </button>
        </form>
      </main>
    </>
  );
};

export default Login;
