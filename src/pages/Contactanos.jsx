import { MdSmartphone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

export default function Contactanos() {
    return (
        <div className="pt-20 min-h-screen bg-white font-instrument">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8 text-center">Contáctanos</h1>
                
                {/* Grid principal de 2 columnas */}
                <div className="grid md:grid-cols-2 gap-8">
                    
                    {/* COLUMNA 1: Información de contacto */}
                    <div className="space-y-8">
                        {/* Números de Contacto */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4">Números de Contacto</h2>
                            
                            {/* Sala de Radio */}
                            <h3 className="font-bold mb-4 text-lg">Sala de Radio</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">                            
                                <div className="flex items-center gap-2">
                                    <FaPhoneAlt className="text-red-600"/>
                                    <p>(602) 8333333</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaPhoneAlt className="text-red-600"/>
                                    <p>(602) 8373260</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaPhoneAlt className="text-red-600"/>
                                    <p>(602) 8373260</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaPhoneAlt className="text-red-600"/>
                                    <p>(602) 8233333</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MdSmartphone className="text-blue-600"/>
                                    <p>3194082431</p>
                                </div>
                                <a href="https://wa.me/+573028359000" className="flex items-center gap-2 hover:text-green-600 transition-colors">
                                    <FaWhatsapp className="h-6 w-6 text-green-500 hover:text-green-700"/>
                                    <p>3028359000</p>
                                </a>                            
                            </div>
                
                            {/* Tesorería y Almacén */}
                            <h3 className="font-bold mb-4 text-lg">Tesorería y Almacén</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                <div className="flex items-center gap-2">
                                    <FaPhoneAlt className="text-red-600"/>
                                    <p>(602) 8205482</p>
                                </div>
                                <a href="https://wa.me/+573136520767" className="flex items-center gap-2 hover:text-green-600 transition-colors">
                                    <FaWhatsapp className="h-6 w-6 text-green-500 hover:text-green-700"/>
                                    <p>3136520767</p>
                                </a>
                            </div>
                            
                            {/* Gerencia */}
                            <h3 className="font-bold mb-4 text-lg">Gerencia</h3>
                            <div className="flex items-center gap-2 mb-6">
                                <FaPhoneAlt className="text-red-600"/>
                                <p>(602) 8205481</p>
                            </div>
                        </section>
                        
                        {/* Dirección */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4">Dirección</h2>
                            <div className="flex items-center gap-2">
                                <SiGooglemaps className="h-5 w-5 text-blue-600"/>
                                <p>Calle 2N #11-41, Barrio Modelo, Popayán, Colombia</p>
                            </div>
                        </section>
                    </div>
                    
                    {/* COLUMNA 2: Formulario de contacto */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block mb-2 font-bold text-gray-700">Nombre</label>
                                <input 
                                    type="text" 
                                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                                    placeholder="Tu nombre"
                                />
                            </div>
                            
                            <div>
                                <label className="block mb-2 font-bold text-gray-700">Asunto</label>
                                <input 
                                    type="text" 
                                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                                    placeholder="Asunto del mensaje"
                                />
                            </div>
                            
                            <div>
                                <label className="block mb-2 font-bold text-gray-700">Correo</label>
                                <input 
                                    type="email" 
                                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors"
                                    placeholder="tu@correo.com"
                                />
                            </div>
                            
                            <div>
                                <label className="block mb-2 font-bold text-gray-700">Mensaje</label>
                                <textarea 
                                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors resize-vertical"
                                    rows="5"
                                    placeholder="Escribe tu mensaje aquí..."
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button 
                                type="submit"
                                className="cursor-pointer bg-yellow-300 text-black px-6 py-3 rounded-lg hover:bg-yellow-400 font-bold transition-all hover:scale-105 transform duration-200 shadow-md hover:shadow-lg"
                            >
                                Enviar Mensaje
                            </button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}