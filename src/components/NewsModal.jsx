import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

export default function NewsModal({ noticia, onClose }) {
    // Cerrar con tecla Escape
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };
        
        document.addEventListener('keydown', handleEscape);
        // Prevenir scroll del body cuando el modal está abierto
        document.body.style.overflow = 'hidden';
        
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('es-ES', options);
    };

    if (!noticia) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 
                       animate-fadeIn overflow-y-auto"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div 
                className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 my-8 
                           relative animate-slideUp"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Botón cerrar */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 
                             text-white rounded-full p-3 transition-all duration-300 hover:scale-110"
                    aria-label="Cerrar modal"
                >
                    <FaTimes className="w-5 h-5" />
                </button>

                {/* Imagen destacada */}
                <div className="relative h-64 md:h-96 overflow-hidden rounded-t-2xl bg-gray-200">
                    <img 
                        src={noticia.imagen}
                        alt={noticia.titulo}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-200"><span class="text-6xl">📰</span></div>';
                        }}
                    />
                    {noticia.destacada && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-yellow-500 
                                      px-4 py-2 rounded-full shadow-lg">
                            <span className="text-sm font-bold text-black">⭐ Destacada</span>
                        </div>
                    )}
                </div>

                {/* Contenido */}
                <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto">
                    {/* Categoría y fecha */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full 
                                       font-semibold text-sm">
                            {noticia.categoria}
                        </span>
                        <time dateTime={noticia.fecha} className="text-gray-600 italic text-sm">
                            {formatDate(noticia.fecha)}
                        </time>
                    </div>

                    {/* Título */}
                    <h2 id="modal-title" className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        {noticia.titulo}
                    </h2>

                    {/* Autor */}
                    <p className="text-gray-600 mb-6 text-sm">
                        Por: <strong className="text-gray-800">{noticia.autor}</strong>
                    </p>

                    {/* Resumen destacado */}
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded">
                        <p className="text-lg text-gray-700 italic">
                            {noticia.resumen}
                        </p>
                    </div>

                    {/* Contenido completo */}
                    <div className="prose max-w-none">
                        <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                            {noticia.contenido}
                        </p>
                    </div>

                    {/* Botón de cierre al final */}
                    <div className="mt-8 text-center">
                        <button
                            onClick={onClose}
                            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full 
                                     font-semibold transition-colors"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

NewsModal.propTypes = {
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
    }),
    onClose: PropTypes.func.isRequired
};
