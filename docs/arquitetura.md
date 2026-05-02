# Arquitetura Técnica: Meu Livrinho (E-reader Nativo)

## 1. Visão Geral
O projeto migrou de um redirecionador de PDFs para um motor de renderização nativo e proprietário construído em React. O objetivo é reduzir a carga de dados para conexões limitadas e fornecer uma experiência acessível e adaptável (sem necessidade de zoom/pan) para o público infantil.

## 2. O Formato Proprietário: `.kid` (Knowledge Interactive DATA)
Para evitar o peso estrutural e a inflexibilidade dos PDFs, criamos o formato `.kid` (baseado em JSON estrito). Ele separa metadados, recursos estáticos e conteúdo textual, oferecendo suporte nativo à internacionalização (i18n).

### Estrutura Base
```json
{
  "metadados": {
    "titulo": "A Formiga e a Semente",
    "idioma_base": "pt-BR",
    "idiomas_disponiveis": ["pt-BR", "en-US", "es-ES"],
    "cor_tema": "#C1D69B"
  },
  "paginas": [
    {
      "layout_type": "dynamic_content",
      "elementos": {
        "imagem_url": "a-formiga-e-a-semente-4.webp",
        "alt_text": "Família de formigas trabalhando unida na floresta.",
        "conteudo": [
          {
            "tipo": "paragrafo",
            "value": "Uma grande família de formigas vivia entre as raízes de uma grande árvore..."
          }
        ]
      },
      "localizacao": {
        "en": {
          "conteudo": [
            {
              "tipo": "paragrafo",
              "value": "A large family of ants lived among the roots of a great tree..."
            }
          ]
        }
      }
    }
  ]
}
```

### Vantagens do `.kid`
* **Escalabilidade de UI:** O front-end decide como renderizar o texto.
* **Acessibilidade Nativa:** Integração direta com leitores de tela do SO via tags semânticas do HTML5.
* **Tradução em Tempo Real:** O nó `localizacao` permite a troca instantânea de idiomas sem novas requisições de rede.
* **Custo Zero:** Armazenado como objeto estático no Supabase Storage.

## 3. Padrões de Componentização e Engenharia
A arquitetura de UI segue a Separação de Interesses (Separation of Concerns):

* **Hook Inteligente (`useBookReader`):** Único responsável pela lógica de paginação, controle de estado de sub-conteúdo (passos) e índices. Não toca no DOM.
* **PageRender:** Componente burro (Dumb Component). Recebe propriedades e renderiza. Trata exceções visuais como `Skeletons` e falhas de rede (`onError`).
* **Zonas de Interação Invisíveis:** Remoção de botões flutuantes em prol da ergonomia cognitiva infantil, mapeando toques nas extremidades da tela (25% esquerda voltar, 75% direita avançar).
* **CSS Puro (Vanilla CSS):** A interface foi construída estritamente com CSS puro. A decisão de não utilizar frameworks (como Bootstrap ou Tailwind) garante um *bundle size* reduzido, controle granular sobre a API de FullScreen e alta performance de renderização em dispositivos móveis com hardware limitado.


