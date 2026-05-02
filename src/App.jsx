import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import QuemSomos from './pages/QuemSomos/QuemSomos';
import Admin from './pages/Admin/Admin';
import NotFound from './pages/NotFound/NotFound';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Footer from './components/Footer/Footer';
import ReaderPage from './pages/ReaderPage/ReaderPage';
import './styles/global.css'; // Ajuste o caminho do seu CSS global se necessário

// Componente auxiliar para gerenciar a visibilidade da UI Global
function LayoutWrapper({ children }) {
  const location = useLocation();
  // Se a rota começar com /ler/, ativamos o "Modo Imersivo"
  const isReaderMode = location.pathname.startsWith('/ler/');

  return (
    <>
      {!isReaderMode && <Navbar />}
      {/* O container global é substituído para não aplicar margens indesejadas no leitor */}
      <div className={isReaderMode ? "reader-mode-active" : "container"}>
        {children}
      </div>
      {!isReaderMode && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/ler/:slug" element={<ReaderPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;