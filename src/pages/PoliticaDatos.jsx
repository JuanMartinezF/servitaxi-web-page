import { Link } from 'react-router-dom';

export default function PoliticaDatos() {
    return (
        <div className="pt-20 min-h-screen bg-white">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8 text-center">Términos y Condiciones</h1>
                
                <div className="prose max-w-none">
                    <p className="text-lg text-center mb-8">
                        A continuación, nombramos los términos y condiciones de los servicios de TRANSPORTADORA SERVITAXI S.A.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="text-yellow-400">✓</span>
                            <p className="text-lg">
                                Política protección de Datos personales. Clic {' '}
                                <Link to="/proteccion-datos" className="font-bold underline hover:text-yellow-600">
                                    aquí
                                </Link>
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-yellow-400">✓</span>
                            <p className="text-lg">
                                Términos y condiciones generales para el uso del para pasajero(a) del aplicativo. Clic {' '}
                                <Link to="/TyCPasajerosApp" className="font-bold underline hover:text-yellow-600">
                                    aquí
                                </Link>
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-yellow-400">✓</span>
                            <p className="text-lg">
                                Términos y condiciones TaxBot. Clic {' '}
                                <Link to="/TyCPasajerosApp" className="font-bold underline hover:text-yellow-600">
                                    aquí
                                </Link>
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-yellow-400">✓</span>
                            <p className="text-lg">
                                Términos y condiciones generales para el trámite virtual de la planilla de viajes ocasional. Clic {' '}
                                <Link to="/TyCPasajerosApp" className="font-bold underline hover:text-yellow-600">
                                    aquí
                                </Link>
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-yellow-400">✓</span>
                            <p className="text-lg">
                                Términos y condiciones descuentes compra del Seguro Obligatorio de Accidentes de Tránsito (SOAT). Clic {' '}
                                <Link to="/TyCPasajerosApp" className="font-bold underline hover:text-yellow-600">
                                    aquí
                                </Link>
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-yellow-400">✓</span>
                            <p className="text-lg">
                                Términos y condiciones Promoción App Conductor Instaladas 2021. Clic {' '}
                                <Link to="/TyCPasajerosApp" className="font-bold underline hover:text-yellow-600">
                                    aquí
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}