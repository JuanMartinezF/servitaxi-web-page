import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="font-instrument"> {/* Para compensar la navbar fija */}
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
                    <h1 className="text-5xl md:text-6xl mb-4 font-lobster">
                        Transportamos lo más valioso de la ciudad
                    </h1>
                    <p className="text-xl mb-8 italic">
                        Servicio de transporte de pasajeros, encomiendas y más
                    </p>
                    <button to="/app" className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition-colors hover:bg-red-700 cursor-pointer">
                        Consigue nuestra App
                    </button>
                </div>
            </section>

            {/* Servicios Section */}
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
                            <p className="text-justify">Para Servitaxi el trasporte de transportarte es transportar lo más valioso de la ciudad, por eso tenemos varios canales desde donde podrás solicitar nuestros servicio de recogida, no importa en que parte del área urbana de Popayán te encuentres.</p>
                            
                        </div>
                        {/* Agrega las otras dos tarjetas de servicios de manera similar */}
                        <div className="bg-yellow-200 p-6 rounded-lg shadow-lg">
                            <img 
                                src="/encomiendasia.png" 
                                alt="Encomiendas" 
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold mb-2 text-center">Servicio de encomiendas</h3>
                            <p className="text-justify">En Servitaxi contamos con envío de encomiendas dentro de la ciudad de Popayán para que envíes con seguridad tus encomiendas con la seguridad de que serán cuidadas y llegaran a su destino sin problema.</p>
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