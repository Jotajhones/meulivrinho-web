import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './Admin.css';

export default function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // 1. Envia as credenciais
      const response = await api.post('/auth/login', { email, password });

      // 2. Extrai o token da resposta que criamos no controller
      const { token, user } = response.data;

      if (token) {
        // 3. Salva no localStorage para persistência (não perder o login ao fechar a aba)
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user)); // Útil para mostrar "Olá, Jota" na UI

        // 4. O PULO DO GATO: Atualiza a instância do Axios na hora!
        // Assim, as próximas chamadas já levam o token no Header
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        // 5. Redireciona com tudo pronto
        navigate('/');
      }
    } catch (err) {
      // Tratamento de erro mais específico
      if (err.response && err.response.status === 401) {
        setError('E-mail ou senha incorretos. Tente novamente! 🧐');
      } else if (err.response && err.response.status === 404) {
        setError('Erro interno: Rota de login não encontrada no servidor. 🚨');
      } else {
        setError('Ops! O servidor parece estar offline. Tente mais tarde. ☁️');
      }
      console.error("Erro no login:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-container">
      <form className="login-card" onSubmit={handleLogin}>
        <h2>Área do Mestre 🔑</h2>
        <p>Acesse para gerenciar a biblioteca</p>

        {error && <div className="error-msg">{error}</div>}

        <div className="input-group">
          <label>E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="seu@email.com"
          />
        </div>

        <div className="input-group">
          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
            autoComplete="current-password"
          />
        </div>

        <button type="submit" className="btn-read" disabled={loading}>
          {loading ? 'Entrando...' : 'Entrar na Biblioteca'}
        </button>
      </form>
    </div>
  );
}
