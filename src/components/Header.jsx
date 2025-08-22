import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-yellow-300 p-4 text-black z-50">
            <nav className="flex justify-between items-center">
                {/* Logo y título */}
                <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity" onClick={closeMenu}>
                    <img 
                        src="/logoservitaxi.jpg"
                        alt="Servitaxi Logo" 
                        className="w-20 h-13" 
                    />
                    <h1 className="text-2xl font-bold">Servitaxi S.A.</h1>
                </Link>

                {/* Menú de escritorio */}
                <ul className="hidden md:flex font-medium space-x-4">
                    <li className="transition-transform hover:scale-115 transform duration-300">
                        <Link 
                            to="/" 
                            className={location.pathname === '/' ? 'text-blue-800' : 'text-black'}
                        >
                            Inicio
                        </Link>
                    </li>
                    <li className="transition-transform hover:scale-115 transform duration-300">
                        <Link 
                            to="/Quienessomos" 
                            className={location.pathname === '/Quienessomos' ? 'text-blue-800' : 'text-black'}
                        >
                            ¿Quienes somos?
                        </Link>
                    </li>
                    <li className="transition-transform hover:scale-115 transform duration-300">
                        <Link 
                            to="/Servicios" 
                            className={location.pathname === '/Servicios' ? 'text-blue-800' : 'text-black'}
                        >
                            Servicios
                        </Link>
                    </li>
                    <li className="transition-transform hover:scale-115 transform duration-300">
                        <Link 
                            to="/Contactanos" 
                            className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors"
                        >
                            Contáctanos
                        </Link>
                    </li>
                </ul>

                {/* Botón hamburguesa para móvil */}
                <button 
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </nav>

            {/* Menú móvil desplegable */}
            <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="flex flex-col font-medium space-y-4 pt-4 pb-2 text-center">
                    <li className="transition-transform hover:scale-105 transform duration-300">
                        <Link 
                            to="/" 
                            className={`block py-2 px-2 rounded ${location.pathname === '/' ? 'text-blue-800 bg-blue-100 mx-12' : 'text-black hover:bg-yellow-400 mx-12'}`}
                            onClick={closeMenu}
                        >
                            Inicio
                        </Link>
                    </li>
                    <li className="transition-transform hover:scale-105 transform duration-300">
                        <Link 
                            to="/Quienessomos" 
                            className={`block py-2 px-2 rounded ${location.pathname === '/Quienessomos' ? 'text-blue-800 bg-blue-100 mx-12' : 'text-black hover:bg-yellow-400 mx-12'}`}
                            onClick={closeMenu}
                        >
                            ¿Quienes somos?
                        </Link>
                    </li>
                    <li className="transition-transform hover:scale-105 transform duration-300">
                        <Link 
                            to="/Servicios" 
                            className={`block py-2 px-2 rounded ${location.pathname === '/Servicios' ? 'text-blue-800 bg-blue-100 mx-12' : 'text-black hover:bg-yellow-400 mx-12'}`}
                            onClick={closeMenu}
                        >
                            Servicios
                        </Link>
                    </li>
                    <li className="transition-transform hover:scale-105 transform duration-300">
                        <Link 
                            to="/Contactanos" 
                            className="block bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors text-center mx-12"
                            onClick={closeMenu}
                        >
                            Contáctanos
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}