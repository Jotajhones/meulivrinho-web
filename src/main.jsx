import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import LivroPagina from "./modules/shared/pages/LivroPagina.jsx";
import Login from "@/pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import PerfilResponsavel from "./modules/usuarioResponsavel/pages/PerfilResponsavel.jsx";
import PerfilDependente from "./modules/usuarioResponsavel/pages/PerfilDependente.jsx";
import LayoutNaoAutenticado from "./modules/shared/layout/LayoutNaoAutenticado.jsx";
import SemFooter from "./modules/shared/layout/LayoutSemFooter.jsx"; // Layout sem footer
import AdicionarLivro from "./modules/usuarioResponsavel/pages/AdicionarLivro.jsx";
import PaginaInicial from "./modules/usuarioResponsavel/pages/PaginaInicial.jsx";
import LayoutAutenticado from "./modules/usuarioResponsavel/layout/LayoutAutenticado.jsx";
import LivroAberto from "./modules/shared/pages/LivroAberto.jsx";
import Sobre from "./modules/shared/pages/Sobre.jsx";
import AuthGuard from "./modules/shared/components/AuthGuard.jsx";
import CatalogoLivros from "./modules/shared/pages/CatalogoLivros.jsx";
import NotFound from "./modules/shared/pages/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        
        {/* PÚBLICO */}
        <Route element={<LayoutNaoAutenticado />}>
          <Route path="/" index element={<App />} />
          <Route path="/livro/:slug" element={<LivroPagina />} />
          <Route path="/sobre-nos" element={<Sobre />} />
        </Route>

        {/* PÚBLICO  */}
        <Route element={<SemFooter />}>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Route>

        <Route path="/leitura/:slug" element={<LivroAberto />} />

        {/*  AuthGuard  */}
        <Route element={<AuthGuard />}>
          <Route element={<LayoutAutenticado />}>
            <Route path="/pagina-inicial" element={<PaginaInicial />} />
            <Route path="/perfil-responsavel" element={<PerfilResponsavel />} />
            <Route path="/perfil-dependente" element={<PerfilDependente />} />
            <Route path="/adicionar-livro" element={<AdicionarLivro />} />
            <Route path="/catalogo" element={<CatalogoLivros />} />
          </Route>
        </Route>

        {/* Rota 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);