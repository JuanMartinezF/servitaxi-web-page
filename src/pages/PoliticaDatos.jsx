import { Link } from 'react-router-dom';

export default function PoliticaDatos() {
    return (
        <div className="pt-30 min-h-screen bg-white">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-8 text-center">Términos y Condiciones</h1>
                
                <div className="prose max-w-none text-xl ">
                    <p className="text-xl text-center mb-8">
                        A continuación, nombramos los términos y condiciones de los servicios de SERVITAXI S.A.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="text-yellow-400 font-bold">✓</span>
                            <p >
                                Política protección de Datos personales. Clic {' '}
                                <Link to="/proteccion-datos" className="font-bold underline hover:text-yellow-600">
                                    aquí
                                </Link>
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-yellow-400 font-bold">✓</span>
                            <p >
                                Términos y condiciones generales para el uso del pasajero(a) del aplicativo. Clic {' '}
                                <Link to="/terminos-y-condiciones" className="font-bold underline hover:text-yellow-600">
                                    aquí
                                </Link>
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-yellow-400 font-bold">✓</span>
                            <p >
                                Aviso de privacidad. Clic {' '}
                                <Link to="/aviso-de-privacidad" className="font-bold underline hover:text-yellow-600">
                                    aquí
                                </Link>
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="text-yellow-400 font-bold">✓</span>
                            <p >
                                Terminos y Condiciones Taxbot. Clic {' '}
                                <Link to="/terminos-y-condiciones-taxbot" className="font-bold underline hover:text-yellow-600">
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