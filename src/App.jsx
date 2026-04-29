import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import QuemSomos from './pages/QuemSomos/QuemSomos';
import Admin from './pages/Admin/Admin';
import NotFound from './pages/NotFound/NotFound';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Footer from './components/Footer/Footer';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;