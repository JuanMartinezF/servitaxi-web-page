import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaApple, FaGooglePlay, FaTimes } from "react-icons/fa";
import ServiceCard from '../components/ServiceCard';
import NewsCardCarousel from '../components/NewsCardCarousel';
import NewsModalCarousel from '../components/NewsModalCarousel';
import { APP_LINKS, SERVICES, COMPANY_INFO } from '../data/constants';
import noticiasData from '../data/noticias.json';

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [selectedNoticia, setSelectedNoticia] = useState(null);
    const carouselRef = useRef(null);
    
    // Obtener solo noticias destacadas para el carrusel, ordenadas por fecha (más recientes primero)
    const noticiasDestacadas = noticiasData
        .filter(noticia => noticia.destacada)
        .sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    
    // Datos del carrusel - Puedes agregar más slides aquí
    const slides = [
        {
            id: 1,
            imageDesktop: "/fondodesktop.svg",          // Imagen para escritorio
            imageMobile: "/fondomobile.svg",    // Imagen para móvil
            title: COMPANY_INFO.tagline,
            subtitle: "Servicio de transporte de pasajeros, encomiendas y más",
            buttonText: "Consigue nuestra App"
        },
        {
            id: 2,
            imageDesktop: "/picoyplacades.svg",    // Imagen para escritorio
            imageMobile: "/picoyplacamob.svg", // Imagen para móvil
            title: null,
            subtitle: null,
            buttonText: null
        }
        // Para agregar más slides, copia y pega este formato:
        // {
        //     id: 3,
        //     imageDesktop: "/tu-imagen-desktop.jpg",
        //     imageMobile: "/tu-imagen-mobile.jpg",
        //     title: "Tu título aquí",
        //     subtitle: "Tu subtítulo aquí",
        //     buttonText: "Texto del botón" o null
        // }
    ];

    // Auto-avance del carrusel cada 5 segundos
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);

        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Funciones para el modal
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    // Funciones para el modal de noticias
    const handleExpandNoticia = (noticia) => {
        setSelectedNoticia(noticia);
    };

    const handleCloseNoticiaModal = () => {
        setSelectedNoticia(null);
    };

    // Funciones para scroll del carrusel de noticias
    const scrollCarousel = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = 320; // Ancho de la tarjeta + gap
            const newPosition = direction === 'left' 
                ? carouselRef.current.scrollLeft - scrollAmount
                : carouselRef.current.scrollLeft + scrollAmount;
            
            carouselRef.current.scrollTo({
                left: newPosition,
                behavior: 'smooth'
            });
        }
    };


    return (
        <div className="pt-20 font-instrument">
            {/* Hero Carousel Section - Desktop: 1920x600 (horizontal) | Mobile: 768x800 (casi cuadrado) */}
            <section className="relative w-full overflow-hidden bg-[#112638]">
                {/* Contenedor Desktop - 1920x600 (muy horizontal) */}
                <div className="hidden md:block relative w-full" style={{ aspectRatio: '1920/600' }}>
                    {slides.map((slide, index) => (
                        <div
                            key={`desktop-${slide.id}`}
                            className={`${index === currentSlide ? 'block' : 'hidden'} w-full h-full absolute inset-0`}
                        >
                            <div className="w-full h-full bg-[#102d46]">
                                <img 
                                    src={slide.imageDesktop}
                                    alt={slide.title || `Slide ${slide.id}`}
                                    className="w-full h-full object-cover object-center brightness-50"
                                />
                            </div>
                            <div className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-20 text-white text-center px-4">
                                {slide.title && slide.title !== null && (
                                    <h1 className="text-4xl md:text-6xl mb-4 font-lobster max-w-4xl">
                                        {slide.title}
                                    </h1>
                                )}
                                {slide.subtitle && slide.subtitle !== null && (
                                    <p className="text-lg md:text-xl mb-8 italic max-w-2xl">
                                        {slide.subtitle}
                                    </p>
                                )}
                                {slide.buttonText && slide.buttonText !== null && (
                                    <button 
                                        onClick={openModal}
                                        className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition-colors hover:bg-red-700 cursor-pointer"
                                    >
                                        {slide.buttonText}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Contenedor Mobile - 768x800 (casi cuadrado) */}
                <div className="md:hidden relative w-full" style={{ aspectRatio: '768/800' }}>
                    {slides.map((slide, index) => (
                        <div
                            key={`mobile-${slide.id}`}
                            className={`${index === currentSlide ? 'block' : 'hidden'} w-full h-full absolute inset-0`}
                        >
                            <div className="w-full h-full bg-[#102d46]">
                                <img 
                                    src={slide.imageMobile}
                                    alt={slide.title || `Slide ${slide.id}`}
                                    className="w-full h-full object-cover object-center brightness-50"
                                />
                            </div>
                            <div className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-16 text-white text-center px-4">
                                {slide.title && slide.title !== null && (
                                    <h1 className="text-3xl mb-3 font-lobster max-w-xs">
                                        {slide.title}
                                    </h1>
                                )}
                                {slide.subtitle && slide.subtitle !== null && (
                                    <p className="text-base mb-6 italic max-w-sm">
                                        {slide.subtitle}
                                    </p>
                                )}
                                {slide.buttonText && slide.buttonText !== null && (
                                    <button 
                                        onClick={openModal}
                                        className="bg-red-600 text-white px-5 py-2.5 rounded-full text-base font-semibold transition-colors hover:bg-red-700 cursor-pointer"
                                    >
                                        {slide.buttonText}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controles de navegación */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
                    aria-label="Slide anterior"
                >
                    <FaChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
                    aria-label="Siguiente slide"
                >
                    <FaChevronRight className="w-6 h-6" />
                </button>

                {/* Indicadores de puntos */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-1">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                                index === currentSlide 
                                    ? 'bg-yellow-400' 
                                    : 'bg-white/50 hover:bg-white/70'
                            }`}
                            aria-label={`Ir al slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Indicador de progreso (opcional) */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
                    <div 
                        className="h-full bg-yellow-400 transition-all duration-5000 ease-linear"
                        style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                    />
                </div>
            </section>

            {/* Modal para descarga de la app */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 relative">
                        {/* Botón cerrar */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                        >
                            <FaTimes className="w-6 h-6" />
                        </button>

                        {/* Contenido del modal */}
                        <div className="p-6 text-center">
                            <div className="mb-4">
                                <img 
                                    src="/logoservitaxi.jpg" 
                                    alt="Servitaxi Logo" 
                                    className="h-16 w-auto mx-auto mb-4"
                                />
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    ¡Descarga nuestra App!
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Solicita tus servicios de taxi de forma rápida y segura
                                </p>
                            </div>

                            {/* Botones de descarga */}
                            <div className="space-y-3">
                                {/* Android */}
                                <a 
                                    href={APP_LINKS.android} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-colors"
                                >
                                    <FaGooglePlay className="w-5 h-5 mr-3" />
                                    Descargar para Android
                                </a>

                                {/* iOS */}
                                <a 
                                    href={APP_LINKS.ios} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-full bg-gray-900 hover:bg-black text-white py-3 px-4 rounded-lg transition-colors"
                                >
                                    <FaApple className="w-5 h-5 mr-3" />
                                    Descargar para iOS
                                </a>
                            </div>

                            {/* Botón cerrar alternativo */}
                            <button
                                onClick={closeModal}
                                className="mt-4 text-gray-500 hover:text-gray-700 text-sm transition-colors"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Sección de Campañas Especiales - TEMPORALMENTE OCULTA */}
            {/* 
            <h2 className="text-3xl py-6 sm:text-3xl md:text-4xl font-bold text-center 
                          sm:mb-10 md:mb-12 text-gray-800">
                ¡Tenemos algo para ti!
            </h2>
            <div className="overflow-hidden rounded-lg mb-4 sm:mb-6 flex justify-center">
                <img
                    src="/SERVITAXI S.A_publi_web.svg" 
                    alt="Gran Sorteo" 
                    className="block mx-auto w-full rounded-lg max-w-5xl h-auto object-contain"
                />
            </div>
            */}

            {/* Carrusel de Noticias Destacadas */}
            {noticiasDestacadas.length > 0 && (
                <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16 font-instrument">
                    <div className="container mx-auto px-4">
                        {/* Header centrado */}
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                                Noticias Destacadas
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Mantente informado sobre nuestras últimas novedades y comunicados.
                            </p>
                        </div>

                        {/* Carrusel */}
                        <div className="relative">
                            {/* Botón anterior */}
                            <button
                                onClick={() => scrollCarousel('left')}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 
                                         text-white p-3 rounded-full transition-all hidden md:block"
                                aria-label="Noticia anterior"
                            >
                                <FaChevronLeft className="w-5 h-5" />
                            </button>

                            {/* Contenedor de tarjetas */}
                            <div 
                                ref={carouselRef}
                                className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-2
                                         scrollbar-hide md:scrollbar-default"
                                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            >
                                {noticiasDestacadas.map((noticia) => (
                                    <NewsCardCarousel
                                        key={noticia.id}
                                        noticia={noticia}
                                        onExpand={handleExpandNoticia}
                                    />
                                ))}
                            </div>

                            {/* Botón siguiente */}
                            <button
                                onClick={() => scrollCarousel('right')}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 
                                         text-white p-3 rounded-full transition-all hidden md:block"
                                aria-label="Siguiente noticia"
                            >
                                <FaChevronRight className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Botón centrado - Desktop y Mobile */}
                        <div className="mt-8 text-center">
                            <Link 
                                to="/noticias"
                                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black 
                                         px-6 py-2.5 rounded-lg font-semibold transition-colors text-sm cursor-pointer"
                            >
                                Ver más noticias y comunicados
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Modal de Noticia */}
            {selectedNoticia && (
                <NewsModalCarousel 
                    noticia={selectedNoticia} 
                    onClose={handleCloseNoticiaModal} 
                />
            )}

             <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-20 font-instrument">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center 
                                 mb-8 sm:mb-10 md:mb-12 text-gray-800">
                        ¿Ya conoces nuestros servicios?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                                  gap-6 sm:gap-8 md:gap-10">
                        {SERVICES.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}