import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className=""> {/* Para compensar la navbar fija */}
            {/* Hero Section */}
            <section className="relative h-screen">
                <div className="absolute inset-0">
                    <img 
                        src="/taxista.jpg" 
                        alt="Taxi"
                        className="w-full h-full object-cover brightness-50"
                    />
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        Transportamos lo más valioso de la ciudad
                    </h1>
                    <p className="text-xl mb-8">
                        Servicio de transporte de pasajeros, encomiendas y más
                    </p>
                    <Link 
                        to="/app" 
                        className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                    >
                        Consigue nuestra App
                    </Link>
                </div>
            </section>

            {/* Servicios Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        ¿Ya conoces nuestros servicios?
                    </h2>
                    <p className="text-center mb-12">
                        Puedes solicitar cualquiera de nuestros servicios por medio de nuestra aplicación móvil, WhatsApp o llamando al 333 333 333
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-yellow-200 p-6 rounded-lg shadow-lg">
                            <img 
                                src="/serviciopasajeros.png" 
                                alt="Transporte de pasajeros" 
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold mb-2 text-center">Transporte de pasajeros</h3>
                            <p>Por nuestros medios de contacto</p>
                        </div>
                        {/* Agrega las otras dos tarjetas de servicios de manera similar */}
                        <div className="bg-yellow-200 p-6 rounded-lg shadow-lg">
                            <img 
                                src="/encomiendas.jpg" 
                                alt="Encomiendas" 
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold mb-2 text-center">Servicio de encomiendas</h3>
                            <p>Por nuestros medios de contacto</p>
                        </div>
                        <div className="bg-yellow-200 p-6 rounded-lg shadow-lg">
                            <img 
                                src="/cambioaceite.jpg" 
                                alt="Serviteca" 
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold mb-2 text-center">Serviteca</h3>
                            <p>Por nuestros medios de contacto</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}