import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBookReader } from '../../hooks/useBookReader';
import PageRender from '../../components/PageRender/PageRender';
import "./ReaderPage.css";

const BUCKET_URL = "https://vknwqkblxlyaedbnigwc.supabase.co/storage/v1/object/public/biblioteca/kid";

const isValidKidFormat = (data) => {
    return data && 
           data.metadados && 
           Array.isArray(data.paginas) && 
           data.paginas.length > 0;
};

function ReaderPage() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [livroData, setLivroData] = useState(null);
    const [erro, setErro] = useState(null);
    const [showMenu, setShowMenu] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [idiomaAtual, setIdiomaAtual] = useState('pt-BR'); 

    useEffect(() => {
        if (livroData?.metadados?.cor_tema) {
            document.body.style.backgroundColor = livroData.metadados.cor_tema;
        }
        return () => {
            document.body.style.backgroundColor = "#FFFFFF";
        };
    }, [livroData]);

    useEffect(() => {
        const loadBook = async () => {
            try {
                const response = await fetch(`${BUCKET_URL}/${slug}/${slug}.kid`);
                if (!response.ok) throw new Error("Livro não encontrado no acervo.");
                
                const data = await response.json();
                
                if (!isValidKidFormat(data)) {
                    throw new Error("O arquivo do livro está corrompido ou incompleto.");
                }

                setLivroData(data);
                if (data.metadados.idioma_base) {
                    setIdiomaAtual(data.metadados.idioma_base);
                }
            } catch (err) {
                setErro(err.message);
            }
        };
        if (slug) loadBook();
    }, [slug]);

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener("fullscreenchange", handleFullscreenChange);
        return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
    }, []);

    // Hook recebe o idioma para calcular corretamente a quantidade de passos se a tradução for maior/menor
    const reader = useBookReader(livroData || { paginas: [], metadados: { idioma_base: 'pt-BR' } }, idiomaAtual);

    const toggleFullScreen = async () => {
        try {
            if (!document.fullscreenElement) {
                await document.documentElement.requestFullscreen();
            } else if (document.exitFullscreen) {
                await document.exitFullscreen();
            }
        } catch (err) {
            console.error("Navegador bloqueou o FullScreen:", err);
        }
    };

    const handleInteraction = (e) => {
        if (e.target.closest('.reader-sidebar') || e.target.closest('.btn-native-fullscreen')) return;

        const { clientX, clientY } = e;
        const width = window.innerWidth;
        const height = window.innerHeight;

        if (showMenu) return; 

        if (clientY < height * 0.15) {
            setShowMenu(true);
            return;
        }

        if (clientX < width * 0.25) {
            reader.etapaAnterior();
        } else {
            reader.proximaEtapa();
        }
    };

    const handleTrocarIdioma = (idiomaCode) => {
        setIdiomaAtual(idiomaCode);
        setShowMenu(false); 
    };

    if (erro) return (
        <div className="status-msg" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginTop: '20vh' }}>
            <h3>Ops! Tivemos um problema.</h3>
            <p>{erro}</p>
            <button className="btn-sidebar-home" style={{ width: 'auto', padding: '10px 20px', background: '#333', borderRadius: '8px' }} onClick={() => navigate('/')}>
                Voltar para a Biblioteca
            </button>
        </div>
    );

    if (!livroData) return <div className="status-msg" style={{ textAlign: 'center', marginTop: '20vh' }}>Abrindo o baú de histórias... 🗝️</div>;

    const idiomasDisponiveis = livroData.metadados.idiomas_disponiveis || [livroData.metadados.idioma_base || 'pt-BR'];

    return (
        <div 
            className="reader-fullscreen" 
            onClick={handleInteraction}
            style={{ backgroundColor: livroData.metadados.cor_tema }}
        >
            <div className={`reader-overlay ${showMenu ? 'open' : ''}`} onClick={() => setShowMenu(false)}></div>

            <aside className={`reader-sidebar ${showMenu ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <button className="btn-sidebar-close" onClick={() => setShowMenu(false)}>✕ Fechar Menu</button>
                    
                    <button className="btn-native-fullscreen" onClick={toggleFullScreen} style={{
                        background: 'none', border: '1px solid #555', color: '#fff', padding: '8px', 
                        borderRadius: '4px', cursor: 'pointer', marginTop: '12px', width: '100%'
                    }}>
                        {isFullscreen ? '⧩ Sair da Tela Cheia' : '⧨ Entrar em Tela Cheia'}
                    </button>

                    <h2 className="sidebar-title">{livroData.metadados.titulo}</h2>
                    <button className="btn-sidebar-home" onClick={() => navigate('/')}>⬅ Voltar para Biblioteca</button>
                </div>
                
                {idiomasDisponiveis.length > 1 && (
                    <>
                        <h3 style={{ fontSize: '0.9rem', color: '#888', marginTop: '16px', marginBottom: '8px' }}>Idioma</h3>
                        <div className="sidebar-languages">
                            {idiomasDisponiveis.map((lang) => (
                                <button 
                                    key={lang}
                                    className={`btn-language ${idiomaAtual === lang ? 'active' : ''}`}
                                    onClick={() => handleTrocarIdioma(lang)}
                                >
                                    {lang.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </>
                )}
                
                <h3 style={{ fontSize: '0.9rem', color: '#888', marginTop: '16px' }}>Índice de Páginas</h3>
                <div className="sidebar-index">
                    {livroData.paginas.map((_, index) => (
                        <button 
                            key={index} 
                            className={`btn-index-page ${reader.currentPageIndex === index ? 'active' : ''}`}
                            onClick={() => {
                                reader.irParaPagina(index);
                                setShowMenu(false);
                            }}
                        >
                            Ir para a Página {index + 1}
                        </button>
                    ))}
                </div>
            </aside>

            <main className="reader-viewport">
                <PageRender
                    pagina={reader.paginaAtual}
                    estiloGlobal={livroData.metadados}
                    slug={slug}
                    currentContentIndex={reader.currentContentIndex}
                    idiomaAtual={idiomaAtual}
                />
            </main>

            <div className={`reader-progress-indicator ${!showMenu ? 'visible' : ''}`}>
                Página {reader.currentPageIndex + 1} de {reader.totalPaginas}
            </div>
        </div>
    );
}

export default ReaderPage;