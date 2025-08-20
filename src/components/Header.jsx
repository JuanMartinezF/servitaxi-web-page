import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();

    return (
        <header className="fixed top-0 left-0 right-0 bg-yellow-300 p-4 text-black z-50">
            <nav className="flex flex-col md:flex-row justify-between items-center">
                <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <img 
                        src="/logoservitaxi.jpg"
                        alt="Servitaxi Logo" 
                        className="w-20 h-13" 
                    />
                    <h1 className="text-2xl font-bold mb-2 md:mb-0">Servitaxi S.A.</h1>
                </Link>
                <ul className="flex font-medium flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <li>
                        <Link 
                            to="/" 
                            className={location.pathname === '/' ? 'text-blue-800' : 'text-black'}
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/Quienessomos" 
                            className={location.pathname === '/Quienessomos' ? 'text-blue-800' : 'text-black'}
                        >
                            ¿Quienes somos?
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/Servicios" 
                            className={location.pathname === '/Servicios' ? 'text-blue-800' : 'text-black'}
                        >
                            Servicios
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/Contactanos" 
                            className="bg-red-600 text-white px-4 py-2 rounded-4xl hover:bg-red-700 transition-colors items-center"
                        >
                            Contactanos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}