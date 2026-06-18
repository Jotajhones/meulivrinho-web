const Sobre = () => {
  return (
    <main className="px-6 pt-8 sm:px-12">
      <h1 className="text-4xl pb-6">Sobre Nós</h1>

      <div className="grid gap-3 pb-5">
        <h2 className="text-lg font-medium">O Problema</h2>
        <p>
          Você sabia que 53% da população brasileira não tem o hábito de ler? Para as famílias que
          tentam incentivar o costume, a competição pela atenção das crianças é desleal. Diante das
          telas, os e-books tradicionais perdem para vídeos e jogos devido aos mecanismos viciantes
          de engajamento. Além disso, os pais caem no dilema da fadiga de monitoramento, precisando
          atuar como fiscais de tela para garantir a segurança dos filhos.
        </p>
      </div>

      <div className="grid gap-4 pb-5">
        <h2 className="text-lg font-medium">A Solução</h2>
        <p>
          O Meu Livrinho surge como um porto seguro pensado para a família. Para os pais, nossos
          clientes, entregamos uma plataforma totalmente segura. Para as crianças, nossos usuários
          finais, construímos um ambiente que desperta e alimenta o gosto pela leitura.
        </p>
      </div>

      <h2 className="text-xl pb-5 font-medium">Missão, Visão e Valores</h2>
      <div className="grid gap-4 pb-5">
        <h2 className="text-lg font-medium">A Solução</h2>
        <p>
          Proporcionar um ambiente de leitura digital seguro e lúdico que fomente o gosto pela
          literatura infantil, eliminando a exaustão do monitoramento parental e substituindo a
          hiperestimulação das telas por tempo de qualidade.
        </p>
      </div>

      <div className="grid gap-4 pb-5">
        <h3 className="text-lg font-medium">Nossa Visão</h3>
        <p>
          Ser a principal referência no mercado de EdTechs na união entre tecnologia e educação
          infantil, oferecendo o equilíbrio perfeito entre o digital, o lúdico e o saudável para as
          nossas crianças.
        </p>
      </div>

      <h3 className="text-lg pb-6 font-medium">Nossos Valores</h3>
      <ul>
        <li>
          <strong>Controle Parental Passivo:</strong> Segurança nativa em um ecossistema 100%
          fechado, livre de anúncios, chats ou links externos.
        </li>
        <li>
          <strong>Interatividade na Medida Certa:</strong> Dinamismo visual necessário para atrair o
          interesse, longe da superestimulação prejudicial de outros aplicativos.
        </li>
        <li>
          <strong>Transparência e Confiança:</strong> Garantia de risco zero aos pais, com
          acompanhamento da leitura de forma autônoma e sem atrito.
        </li>
      </ul>

      <div className="grid gap-4">
        <h2>Quem Somos</h2>
        <p>O Meu Livrinho é um projeto nascido na Faculdade de Tecnologia e Inovação Senac-DF.</p>

        <ul>
          <li>
            <strong>Orientador:</strong> Prof. Kristian Pacheco.
          </li>
        </ul>

        <h3 className="text-2xl">Nosso Time</h3>
        <ul className="grid gap-3">
          <li>
            <strong>João Pedro de Lima:</strong> Líder e desenvolvedor Back-end.
          </li>
          <li>
            <strong>Bruno Gabriel Silva:</strong> Desenvolvedor Front-end.
          </li>
          <li>
            <strong>Arthur Sousa:</strong> Design e Marketing.
          </li>
        </ul>
      </div>

      <div className="grid gap-4 pb-9">
        <h2>Faça Parte do Projeto</h2>
        <p>
          Estamos em busca de autores e ilustradores que queiram compartilhar suas histórias e fazer
          parte do nosso acervo. Se você produz conteúdo voltado para o público infantil, se
          identifica com a nossa missão, ou simplesmente tem interesse em colaborar e apoiar o
          projeto, queremos conversar com você.
        </p>
        <p>Entre em contato através do e-mail: jpjpjplima@gmail.com</p>
      </div>
    </main>
  );
};

export default Sobre;
