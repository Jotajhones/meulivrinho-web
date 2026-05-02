import { useState, useEffect } from 'react';

export const useBookReader = (livroData, idiomaAtual) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  // Reinicia o índice de conteúdo se a página mudar OU se o idioma mudar
  useEffect(() => {
    setCurrentContentIndex(0);
  }, [currentPageIndex, idiomaAtual]);

  const totalPaginas = livroData?.paginas?.length || 0;
  const paginaAtual = livroData?.paginas?.[currentPageIndex] || null;

  // Lógica de Internacionalização (i18n) para contar os passos corretamente
  const prefixoIdioma = idiomaAtual ? idiomaAtual.split('-')[0] : 'pt';
  const conteudoTraduzido = paginaAtual?.localizacao?.[prefixoIdioma]?.conteudo;
  const conteudoBase = paginaAtual?.elementos?.conteudo;
  
  // Se houver tradução, usa ela. Senão, faz fallback para o idioma base.
  const arrayConteudoAtivo = conteudoTraduzido || conteudoBase || [];
  const totalConteudoNaPagina = arrayConteudoAtivo.length;

  const proximaEtapa = () => {
    if (currentContentIndex < totalConteudoNaPagina - 1) {
      setCurrentContentIndex(prev => prev + 1);
    } else if (currentPageIndex < totalPaginas - 1) {
      setCurrentPageIndex(prev => prev + 1);
    }
  };

  const etapaAnterior = () => {
    if (currentContentIndex > 0) {
      setCurrentContentIndex(prev => prev - 1);
    } else if (currentPageIndex > 0) {
      setCurrentPageIndex(prev => prev - 1);
    }
  };

  const irParaPagina = (index) => {
    if (index >= 0 && index < totalPaginas) {
      setCurrentPageIndex(index);
      setCurrentContentIndex(0); 
    }
  };

  return {
    paginaAtual,
    currentPageIndex,
    currentContentIndex,
    totalPaginas,
    proximaEtapa,
    etapaAnterior,
    irParaPagina
  };
};