import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaChevronRight } from 'react-icons/fa';

export default function NewsCardCarousel({ noticia, onExpand }) {
    const [imageError, setImageError] = useState(false);

    return (
        <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 
                          overflow-hidden flex flex-col h-full min-w-[280px] max-w-[320px]">
            {/* Imagen */}
            <div className="overflow-hidden h-48 bg-gray-200 relative">
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
                
                {/* Badge destacado */}
                {noticia.destacada && (
                    <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                        ⭐ Destacada
                    </div>
                )}
            </div>

            {/* Contenido */}
            <div className="p-4 flex flex-col flex-grow">
                {/* Título */}
                <h3 className="text-lg font-bold mb-2 text-gray-800 line-clamp-2 min-h-[3.5rem]">
                    {noticia.titulo}
                </h3>

                {/* Resumen */}
                <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                    {noticia.resumen}
                </p>

                {/* Botón Leer más */}
                <button
                    onClick={() => onExpand(noticia)}
                    className="flex items-center justify-center gap-2 w-full bg-yellow-400 hover:bg-yellow-500 
                             text-black px-4 py-2 rounded-lg font-semibold transition-colors text-sm cursor-pointer"
                    aria-label={`Leer más sobre ${noticia.titulo}`}
                >
                    Leer más
                    <FaChevronRight className="w-3 h-3" />
                </button>
            </div>
        </article>
    );
}

NewsCardCarousel.propTypes = {
    noticia: PropTypes.shape({
        id: PropTypes.number.isRequired,
        titulo: PropTypes.string.isRequired,
        resumen: PropTypes.string.isRequired,
        contenido: PropTypes.string.isRequired,
        imagen: PropTypes.string.isRequired,
        fecha: PropTypes.string.isRequired,
        autor: PropTypes.string.isRequired,
        categoria: PropTypes.string.isRequired,
        destacada: PropTypes.bool,
        archivoAdjunto: PropTypes.string
    }).isRequired,
    onExpand: PropTypes.func.isRequired
};
