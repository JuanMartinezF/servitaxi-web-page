export default function Contactanos() {
    return (
        <div className="pt-20 min-h-screen bg-white font-instrument">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8">Contáctanos</h1>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <form className="space-y-4">
                            <div>
                                <label className="block mb-2">Nombre</label>
                                <input 
                                    type="text" 
                                    className="w-full p-2 border rounded"
                                    placeholder="Tu nombre"
                                />
                            </div>
                            <div>
                                <label className="block mb-2">Email</label>
                                <input 
                                    type="email" 
                                    className="w-full p-2 border rounded"
                                    placeholder="tu@email.com"
                                />
                            </div>
                            <div>
                                <label className="block mb-2">Mensaje</label>
                                <textarea 
                                    className="w-full p-2 border rounded"
                                    rows="4"
                                    placeholder="Tu mensaje"
                                ></textarea>
                            </div>
                            <button 
                                type="submit"
                                className="bg-yellow-300 text-black px-6 py-2 rounded hover:bg-yellow-400"
                            >
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Información de Contacto</h2>
                        <div className="space-y-4">
                            <p>📞 </p>
                            <p>📱 </p>
                            <p>📍 CALLE 2N #11-41, Barrio Modelo, Popayán, Colombia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}