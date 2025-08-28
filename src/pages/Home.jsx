import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaApple, FaGooglePlay, FaTimes } from "react-icons/fa";

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showModal, setShowModal] = useState(false);
    
    // Datos del carrusel
    const slides = [
        {
            id: 1,
            image: "/fondonuevo.jpg",
            title: "Transportamos lo más valioso de la ciudad",
            subtitle: "Servicio de transporte de pasajeros, encomiendas y más",
            buttonText: "Consigue nuestra App"
        },
        {
            id: 2,
            image: "/PicoyPlaca2025_2.jpg", // Cambia por tu segunda imagen
            title: null,
            subtitle: null,
            buttonText: null
        }
    ];

    // Auto-avance del carrusel cada 5 segundos
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

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

    return (
        <div className="font-instrument">
            {/* Hero Carousel Section */}
            <section className="relative h-screen overflow-hidden">
                {/* Slides */}
                <div className="relative w-full h-full">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                                index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            <div className="absolute inset-0">
                                <img 
                                    src={slide.image}
                                    alt={`Slide ${slide.id}`}
                                    className="w-full h-full object-cover object-center brightness-50"
                                />
                            </div>
                            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
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
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
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
                                    href="https://play.google.com/store/apps/details?id=co.gentedetaxi.servitaxi.pax&pcampaignid=web_share" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-colors"
                                >
                                    <FaGooglePlay className="w-5 h-5 mr-3" />
                                    Descargar para Android
                                </a>

                                {/* iOS */}
                                <a 
                                    href="https://apps.apple.com/co/app/servitaxi-popay%C3%A1n/id1249544312?l=en-GB" 
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

            {/* Servicios Section - Sin cambios */}
            <section className="bg-white py-16 font-instrument">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        ¿Ya conoces nuestros servicios?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-yellow-200 p-6 rounded-lg shadow-lg">
                            <img 
                                src="/transportep.png" 
                                alt="Transporte de pasajeros" 
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold mb-2 text-center">Transporte de pasajeros</h3>
                            <p className="text-justify">Para nosotros cada viaje contigo es transportar lo más valioso de la ciudad, por eso en Servitaxi tenemos varios canales desde donde podrás solicitar nuestros servicio de recogida, no importa en que parte del área urbana de Popayán te encuentres.</p>
                        </div>
                        
                        <div className="bg-yellow-200 p-6 rounded-lg shadow-lg">
                            <img 
                                src="/encomiendasia.png" 
                                alt="Encomiendas" 
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold mb-2 text-center">Servicio de encomiendas</h3>
                            <p className="text-justify">Creemos que la confianza es fundamental, por eso en Servitaxi contamos con envío de encomiendas dentro de la ciudad de Popayán con la garantía de que tus envíos serán protegidos y entregados sin contratiempos.</p>
                        </div>
                        
                        <div className="bg-yellow-200 p-6 rounded-lg shadow-lg">
                            <img 
                                src="/cambioaceite.jpg" 
                                alt="Serviteca" 
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold mb-2 text-center">Serviteca</h3>
                            <p className="text-justify">En Servitaxi contamos con un excelente servicio para tu vehículo, en nuestras instalaciones puedes realizar cambio de aceite, realizado por nuestro personal altamente calificado y experimentado o si prefieres hacerlo tu mismo también contamos con la venta de aceite para tu motor, refrigerante y llantas.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}