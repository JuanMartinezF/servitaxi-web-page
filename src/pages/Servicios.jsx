export default function Servicios() {
    return (
        <div className="pt-20 min-h-screen bg-white">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8">Nuestros Servicios</h1>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <img 
                            src="/serviciopasajeros.png"
                            alt="Transporte de pasajeros" 
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2">Transporte de pasajeros</h3>
                        <p>Servicio seguro y confiable las 24 horas</p>
                    </div>
                    {/* Añade más servicios según necesites */}
                </div>
            </div>
        </div>
    );
}