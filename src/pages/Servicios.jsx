export default function Servicios() {
    return (
        <div className="pt-20 min-h-screen bg-white font-instrument">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8 text-center">Nuestros Servicios</h1>
                <div className="space-y-8">
                    
                    {/* Servicio 1: Cambio de Aceite */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            <div className="w-full md:w-1/2">
                                <img 
                                    src="/servitecarecortada.jpg" 
                                    alt="Servicio de llantas"
                                    className="w-full h-64 md:h-90 object-cover rounded-lg"
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <h3 className="text-2xl font-bold mb-4">Cambio de Aceite</h3>
                                <p className="text-lg text-justify leading-relaxed">
                                    Contamos con personal capacitado para el cambio de aceite de tu vehículo de la manera más rápida y confiable, 
                                    puedes solicitar también el cambio de refrigerante y si eres de los que les gusta hacerlo por sí mismos, también 
                                    te vendemos el aceite de cualquiera de nuestras marcas disponibles, únicamente debes de acercarte a nuestra sede física y danos el gusto de 
                                    atenderte.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Servicio 2: Transporte de pasajeros */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
                            <div className="w-full md:w-1/2">
                                <img 
                                    src="/serviciopasajeros.png"
                                    alt="Transporte de pasajeros" 
                                    className="w-full h-80 md:h-90 object-cover rounded-lg"
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <h3 className="text-2xl font-bold mb-4">Transporte de pasajeros y Encomiendas</h3>
                                <p className="text-lg text-justify leading-relaxed">
                                    Servitaxi a traves de todos sus socios y afiliados cuenta con una gran flota de vehiculos los cuales
                                    permiten ofrecer cobertura en la totalidad de la ciudad de Popayán y sus alrededores, así que no dudes en
                                    solicitar nuestro servicio de transporte de pasajeros y encomiendas por cualquiera de nuestros canales habilitados
                                    en cualquier momento del dia.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Servicio 3: Venta de Llantas */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            <div className="w-full md:w-1/2">
                                <img 
                                    src="/llantas.jpg" 
                                    alt="Servicio de llantas"
                                    className="w-full h-80 md:h-100 object-cover rounded-lg"
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <h3 className="text-2xl font-bold mb-4">Venta de Llantas</h3>
                                <p className="text-lg text-justify leading-relaxed">
                                    En Servitaxi contamos con venta para todo tipo de vehículos. Nuestro personal especializado te ayudará a encontrar las llantas perfectas para tu automóvil, garantizando calidad y los mejores precios del mercado.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                <h2 className="text-3xl font-bold text-center mt-8 mb-8">Marcas que Manejamos</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
                    <div className="flex justify-center items-center">
                        <img 
                            src="/mobil-logo.svg"
                            alt="Mobil" 
                            className="h-20 w-auto object-contain"
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <img 
                            src="/shell-logos.png" 
                            alt="Shell"
                            className="h-20 w-auto object-contain"
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <img 
                            src="/terpel_logo.png" 
                            alt="Terpel"
                            className="h-50 w-auto object-contain"
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="/kixx-oil-logo.png"
                            alt="Kixx"
                            className="h-50 w-auto object-contain"
                         />
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}