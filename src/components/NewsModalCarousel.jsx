import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaTimes, FaFilePdf, FaImage } from 'react-icons/fa';

export default function NewsModalCarousel({ noticia, onClose }) {
    // Cerrar con tecla Escape
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };
        
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';
        
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    if (!noticia) return null;

    const esArchivoPDF = noticia.archivoAdjunto && noticia.archivoAdjunto.toLowerCase().endsWith('.pdf');
    const esImagen = noticia.archivoAdjunto && 
        (noticia.archivoAdjunto.toLowerCase().endsWith('.jpg') || 
         noticia.archivoAdjunto.toLowerCase().endsWith('.jpeg') || 
         noticia.archivoAdjunto.toLowerCase().endsWith('.png') || 
         noticia.archivoAdjunto.toLowerCase().endsWith('.svg') ||
         noticia.archivoAdjunto.toLowerCase().endsWith('.webp'));

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
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 my-8 
                           relative animate-slideUp"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Botón cerrar */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 
                             text-white rounded-full p-3 transition-all duration-300 hover:scale-110 cursor-pointer"
                    aria-label="Cerrar modal"
                >
                    <FaTimes className="w-5 h-5" />
                </button>

                {/* Imagen destacada */}
                <div className="relative h-64 overflow-hidden rounded-t-2xl bg-gray-200">
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
                        <div className="absolute top-4 left-4 bg-yellow-400 text-black 
                                      px-4 py-2 rounded-full shadow-lg font-bold text-sm">
                            ⭐ Destacada
                        </div>
                    )}
                </div>

                {/* Contenido */}
                <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto">
                    {/* Título */}
                    <h2 id="modal-title" className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                        {noticia.titulo}
                    </h2>

                    {/* Resumen destacado */}
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded">
                        <p className="text-base text-gray-700 font-medium">
                            {noticia.resumen}
                        </p>
                    </div>

                    {/* Contenido completo */}
                    <div className="prose max-w-none mb-6">
                        <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
                            {noticia.contenido}
                        </p>
                    </div>

                    {/* Botón para ver archivo adjunto */}
                    {noticia.archivoAdjunto && (
                        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                            <p className="text-sm text-gray-600 mb-3 font-semibold">
                                📎 Archivo adjunto disponible
                            </p>
                            <a
                                href={noticia.archivoAdjunto}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 
                                         text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer"
                            >
                                {esArchivoPDF ? (
                                    <>
                                        <FaFilePdf className="w-5 h-5" />
                                        Ver PDF completo
                                    </>
                                ) : esImagen ? (
                                    <>
                                        <FaImage className="w-5 h-5" />
                                        Ver imagen completa
                                    </>
                                ) : (
                                    <>
                                        Ver archivo adjunto
                                    </>
                                )}
                            </a>
                        </div>
                    )}

                    {/* Botón de cierre al final */}
                    <div className="mt-6 text-center">
                        <button
                            onClick={onClose}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-lg 
                                     font-semibold transition-colors cursor-pointer"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

NewsModalCarousel.propTypes = {
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
    }),
    onClose: PropTypes.func.isRequired
};
