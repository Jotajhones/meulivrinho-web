import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '5rem 2rem' }}>
      <h1 style={{ fontSize: '5rem' }}>404</h1>
      <h2>Ops! O livrinho sumiu da estante. 🎈</h2>
      <p>Parece que essa página não existe ou foi guardada em outro lugar.</p>
      <Link to="/" className="btn-read" style={{ display: 'inline-block', marginTop: '2rem', maxWidth: '200px' }}>
        Voltar para a Biblioteca
      </Link>
    </div>
  );
}

export default NotFound;