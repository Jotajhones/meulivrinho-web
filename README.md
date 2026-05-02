# Meu Livrinho - Web Interface

## Descrição
Este é o repositório da interface da plataforma **Meu Livrinho**, um projeto desenvolvido de forma totalmente voluntária. Trata-se de uma aplicação web (atualmente na versão **MVP 1.0**) feita para ser o ponto de encontro entre crianças e o mundo da literatura, priorizando uma navegação visual, humana e acessível.

## Intuito e Finalidade
O propósito aqui é democratizar o acesso à leitura. O projeto foi desenhado para apoiar crianças em fase de alfabetização, entregando uma biblioteca digital gratuita que não exige nada além da vontade de ler. Queremos transformar a tecnologia em uma ferramenta segura e amigável que ajude a formar novos leitores, independentemente de sua condição financeira.

## Características do Projeto
- **E-Reader Nativo Integrado:** Motor de leitura proprietário que renderiza histórias dinamicamente em tela cheia, eliminando a necessidade de baixar PDFs pesados.
- **Leitura em Qualquer Lugar:** Interface responsiva construída com foco em performance para conexões lentas.
- **Feito para Crianças:** Zonas de interação invisíveis (navegação por toque lateral) focadas na ergonomia cognitiva do público infantil.
- **Biblioteca Viva:** Integração direta com acervo em nuvem, permitindo buscas e suporte a múltiplos idiomas.

## Stack Tecnológica
* **Front-end:** React + Vite
* **Estilização:** CSS 
* **Armazenamento e Banco de Dados:** Supabase (PostgreSQL & Storage)
* **Hospedagem de Borda:** Vercel

## Arquitetura e Engenharia
Para entender o funcionamento do nosso motor de renderização nativo e o formato proprietário `.kid` de armazenamento de histórias, consulte nossa [Documentação de Arquitetura](./docs/arquitetura.md).

## Como Rodar Localmente

Para contribuir com o projeto ou rodar o ambiente de desenvolvimento em sua máquina, siga os passos:

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/SEU_USUARIO/meulivrinho-web.git](https://github.com/SEU_USUARIO/meulivrinho-web.git)
   cd meulivrinho-web
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as Variáveis de Ambiente:**
   Crie um arquivo `.env` na raiz do projeto e adicione a URL de conexão com a base de dados (solicite ao mantenedor do projeto ou aponte para sua própria instância do Supabase).
   ```env
   VITE_SUPABASE_URL=sua_url_aqui
   VITE_SUPABASE_ANON_KEY=sua_key_aqui
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   A aplicação estará disponível em `http://localhost:5173`.

## Acesse o projeto
[Meu livrinho 📚](https://www.meulivrinho.art.br)
```

