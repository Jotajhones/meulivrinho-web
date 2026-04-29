import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <p>© {year} — Uma iniciativa voluntária da equipe <strong>Meu Livrinho</strong></p>
        <span>Feito com ❤️ para incentivar a leitura infantil</span>
      </div>
    </footer>
  );
}