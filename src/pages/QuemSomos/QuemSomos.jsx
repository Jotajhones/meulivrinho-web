import "./QuemSomos.css"

function QuemSomos() {
  return (
    <div className="container about-page">
      <section className="about-card">
        <h1>Sobre o Meu Livrinho 📖</h1>
        
        <div className="about-text">
          <p className="ident">
            O <strong>Meu Livrinho</strong> nasceu como uma solução de impacto social e educacional, 
            focada em facilitar o acesso de crianças à leitura digital gratuita. Acreditamos que a tecnologia, 
            quando bem utilizada, é a ferramenta mais poderosa para abrir janelas de imaginação.
          </p>
          
          <p className="ident">
            Nosso objetivo é centralizar obras literárias infantis de domínio público ou autorizadas, 
            servindo como um repositório organizado para incentivar o hábito da leitura desde cedo, 
            sem barreiras financeiras ou burocracias.
          </p>
        </div>

        <div className="mission-box">
          <h3>Nossa Missão</h3>
          <p className="ident">Transformar a tecnologia em ponte para o conhecimento, entregando cultura de forma segura e gratuita.</p>
        </div>

        <div className="contact-invite">
          <h3>Quer fazer parte deste projeto? 🤝</h3>
          <p>Seja você um autor, entusiasta ou apenas alguém que quer ajudar, entre em contato através do e-mail:</p>
          <a href="mailto:jpjpjplima@gmail.com" className="email-link">jpjpjplima@gmail.com</a>
        </div>
      </section>
    </div>
  );
}

export default QuemSomos;