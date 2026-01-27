import { useState } from 'react';
import PropTypes from 'prop-types';

export default function NewsCard({ noticia, onExpand }) {
    const [imageError, setImageError] = useState(false);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('es-ES', options);
    };

    return (
        <article className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 
                          hover:scale-105 hover:-translate-y-2 border border-gray-200 overflow-hidden
                          flex flex-col h-full">
            {/* Badge destacado */}
            {noticia.destacada && (
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-4 py-2">
                    <span className="text-sm font-bold text-black">⭐ Destacada</span>
                </div>
            )}
            
            {/* Imagen */}
            <div className="overflow-hidden h-48 bg-gray-200">
                {!imageError ? (
                    <img 
                        src={noticia.imagen}
                        alt={noticia.titulo}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        onError={() => setImageError(true)}
                        loading="lazy"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-200">
                        <span className="text-4xl">📰</span>
                    </div>
                )}
            </div>

            {/* Contenido */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Categoría y fecha */}
                <div className="flex items-center justify-between mb-3 text-sm text-gray-600">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-semibold">
                        {noticia.categoria}
                    </span>
                    <time dateTime={noticia.fecha} className="italic">
                        {formatDate(noticia.fecha)}
                    </time>
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2">
                    {noticia.titulo}
                </h3>

                {/* Resumen */}
                <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                    {noticia.resumen}
                </p>

                {/* Autor y botón */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-500">
                        Por: <strong>{noticia.autor}</strong>
                    </span>
                    <button
                        onClick={() => onExpand(noticia)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full 
                                 font-semibold transition-colors text-sm"
                        aria-label={`Leer más sobre ${noticia.titulo}`}
                    >
                        Leer más
                    </button>
                </div>
            </div>
        </article>
    );
}

NewsCard.propTypes = {
    noticia: PropTypes.shape({
        id: PropTypes.number.isRequired,
        titulo: PropTypes.string.isRequired,
        resumen: PropTypes.string.isRequired,
        contenido: PropTypes.string.isRequired,
        imagen: PropTypes.string.isRequired,
        fecha: PropTypes.string.isRequired,
        autor: PropTypes.string.isRequired,
        categoria: PropTypes.string.isRequired,
        destacada: PropTypes.bool
    }).isRequired,
    onExpand: PropTypes.func.isRequired
};
