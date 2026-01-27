import { useState, useMemo } from 'react';
import NewsCard from '../components/NewsCard';
import NewsModal from '../components/NewsModal';
import noticiasData from '../data/noticias.json';

export default function Noticias() {
    const [selectedNoticia, setSelectedNoticia] = useState(null);
    const [filtroCategoria, setFiltroCategoria] = useState('Todas');
    const [ordenamiento, setOrdenamiento] = useState('recientes');

    // Obtener categorías únicas
    const categorias = useMemo(() => {
        const cats = ['Todas', ...new Set(noticiasData.map(n => n.categoria))];
        return cats;
    }, []);

    // Filtrar y ordenar noticias
    const noticiasFiltradas = useMemo(() => {
        let noticias = [...noticiasData];

        // Filtrar por categoría
        if (filtroCategoria !== 'Todas') {
            noticias = noticias.filter(n => n.categoria === filtroCategoria);
        }

        // Ordenar
        noticias.sort((a, b) => {
            if (ordenamiento === 'recientes') {
                return new Date(b.fecha) - new Date(a.fecha);
            } else if (ordenamiento === 'antiguos') {
                return new Date(a.fecha) - new Date(b.fecha);
            } else if (ordenamiento === 'destacadas') {
                return b.destacada - a.destacada;
            }
            return 0;
        });

        return noticias;
    }, [filtroCategoria, ordenamiento]);

    const handleExpandNoticia = (noticia) => {
        setSelectedNoticia(noticia);
    };

    const handleCloseModal = () => {
        setSelectedNoticia(null);
    };

    return (
        <div className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-gray-50 to-white font-instrument">
            <div className="container mx-auto px-4">
                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        Noticias y Novedades
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Mantente informado sobre las últimas noticias, promociones y actualizaciones de Servitaxi S.A.
                    </p>
                </header>

                {/* Filtros y ordenamiento */}
                <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between 
                              bg-white p-4 rounded-lg shadow-md">
                    {/* Filtro por categoría */}
                    <div className="flex flex-wrap gap-2 items-center">
                        <span className="font-semibold text-gray-700 mr-2">Categoría:</span>
                        {categorias.map(categoria => (
                            <button
                                key={categoria}
                                onClick={() => setFiltroCategoria(categoria)}
                                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300
                                    ${filtroCategoria === categoria 
                                        ? 'bg-yellow-400 text-black shadow-md scale-105' 
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                            >
                                {categoria}
                            </button>
                        ))}
                    </div>

                    {/* Ordenamiento */}
                    <div className="flex items-center gap-2">
                        <label htmlFor="ordenamiento" className="font-semibold text-gray-700">
                            Ordenar por:
                        </label>
                        <select
                            id="ordenamiento"
                            value={ordenamiento}
                            onChange={(e) => setOrdenamiento(e.target.value)}
                            className="px-4 py-2 rounded-lg border border-gray-300 bg-white 
                                     font-semibold text-gray-700 cursor-pointer 
                                     hover:border-yellow-400 focus:outline-none focus:ring-2 
                                     focus:ring-yellow-400 transition-all"
                        >
                            <option value="recientes">Más recientes</option>
                            <option value="antiguos">Más antiguos</option>
                            <option value="destacadas">Destacadas primero</option>
                        </select>
                    </div>
                </div>

                {/* Contador de noticias */}
                <div className="mb-6 text-center text-gray-600">
                    Mostrando <strong className="text-gray-900">{noticiasFiltradas.length}</strong> 
                    {noticiasFiltradas.length === 1 ? ' noticia' : ' noticias'}
                </div>

                {/* Grid de noticias */}
                {noticiasFiltradas.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {noticiasFiltradas.map((noticia) => (
                            <NewsCard
                                key={noticia.id}
                                noticia={noticia}
                                onExpand={handleExpandNoticia}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">📭</div>
                        <h3 className="text-2xl font-bold text-gray-700 mb-2">
                            No hay noticias en esta categoría
                        </h3>
                        <p className="text-gray-600">
                            Prueba seleccionando otra categoría o revisa más tarde
                        </p>
                    </div>
                )}
            </div>

            {/* Modal de noticia expandida */}
            {selectedNoticia && (
                <NewsModal 
                    noticia={selectedNoticia} 
                    onClose={handleCloseModal} 
                />
            )}
        </div>
    );
}
