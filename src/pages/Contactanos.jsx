import { MdSmartphone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

export default function Contactanos() {
    return (
        <div className="pt-20 min-h-screen bg-white font-instrument">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8">Contáctanos</h1>
                <div className="grid md:grid-cols-2 gap-8">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">Numeros de Contacto</h2>
                        <h3 className="font-bold mb-2">Sala de Radio</h3>
                        <div className="space-y-4 columns-4">
                            
                            <div className="flex items-center gap-2">
                                <FaPhoneAlt className="text-red-600"/>
                                <p> (602) 8333333</p>
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
                                <p> 3194082431</p>
                            </div>

                            <a href="https://wa.me/+573028359000" className="flex items-center gap-2">
                                <FaWhatsapp className="h-6 w-6 text-green-500 hover:text-green-700"/>
                                <p>3028359000</p>
                            </a>                            
                        </div>
                        <h3 className="font-bold mt-6">Tesorería y Almacén</h3>
                        <div className="space-y-4 columns-4 mt-2">
                            <div className="flex items-center gap-2">
                                <FaPhoneAlt className="text-red-600"/>
                                <p>(602) 8205482</p>
                            </div>
                            <a href="https://wa.me/+573136520767" className="flex items-center gap-2 mt-2">
                                <FaWhatsapp className="h-6 w-6 text-green-500 hover:text-green-700"/>
                                <p>3136520767</p>
                            </a>
                        </div>
                        <h3 className="font-bold mt-6">Gerencia</h3>
                        <div className="flex items-center gap-2 mt-2">
                            <FaPhoneAlt className="text-red-600"/>
                            <p>
                                (602) 8205481
                            </p>
                        </div>
                    </section>
                    <div>
                        <form >
                            <div>
                                <label className="block mb-2 font-bold">Nombre</label>
                                <input 
                                    type="text" 
                                    className="w-full p-2 border-2 rounded"
                                    placeholder="Tu nombre"
                                />
                            </div>
                            <div className="my-4">
                                <label className="block mb-2 font-bold">Asunto</label>
                                <input 
                                    type="text" 
                                    className="w-full p-2 border-2 rounded"
                                    placeholder="Asunto del mensaje"
                                />
                            </div>
                            <div className="my-4">
                                <label className="block mb-2 font-bold">Email</label>
                                <input 
                                    type="email" 
                                    className="w-full p-2 border-2 rounded"
                                    placeholder="tu@email.com"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 font-bold">Mensaje</label>
                                <textarea 
                                    className="w-full p-2 border-2 rounded"
                                    rows="4"
                                    placeholder="Tu mensaje"
                                ></textarea>
                            </div>
                            <button 
                                type="submit"
                                className="bg-yellow-300 text-black px-6 py-2 rounded hover:bg-yellow-500 font-bold transition-transform hover:scale-110 transform duration-300"
                            >
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4 -mt-8">Direccion</h2>
                        <div className="space-y-4 flex items-center-safe gap-2 mt-2">
                            <SiGooglemaps className="h-5 w-5 text-blue-600"/>
                            <p>Calle 2N #11-41, Barrio Modelo, Popayán, Colombia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}