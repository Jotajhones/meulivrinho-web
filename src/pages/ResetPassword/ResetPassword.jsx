import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './ResetPassword.css';

export default function ResetPassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            return setError('As senhas não são iguais! 🧐');
        }

        setLoading(true);
        setError('');

        try {

            const hash = window.location.hash; 
            if (hash) {
                const params = new URLSearchParams(hash.replace('#', '?'));
                const token = params.get('access_token');

                if (token) {

                    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                }
            }

            await api.post('/auth/update-password', { password });
            alert('Senha atualizada com sucesso! 🎉');
            navigate('/admin');
        } catch (err) {
            console.error(err);
            setError('Erro 401: O link de reset expirou ou o token é inválido. Tente solicitar um novo e-mail.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="reset-container">
            <form className="reset-card" onSubmit={handleSubmit}>
                <h2>Nova Senha Mágica 🔐</h2>
                <p>Crie uma senha segura para voltar ao comando.</p>

                {error && <div className="error-msg">{error}</div>}

                <div className="input-group">
                    <label>Nova Senha</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="••••••••"
                        autoComplete="new-password"
                    />
                </div>

                <div className="input-group">
                    <label>Confirme a Senha</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        placeholder="••••••••"
                        autoComplete="new-password"
                    />
                </div>

                <button type="submit" className="btn-read" disabled={loading}>
                    {loading ? 'Salvando...' : 'Atualizar Minha Senha'}
                </button>
            </form>
        </div>
    );
}