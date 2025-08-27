import { Link } from 'react-router-dom';
import { CgInstagram } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";


export default function Footer() {
    return (
        <footer className="bg-black text-white py-8 font-instrument">
            <div className="container mx-auto px-4">
                {/* Sección superior */}
                <div className="text-center mb-8">
                    <h2 className="text-yellow-300 text-2xl font-bold mb-2">
                        Siguenos en redes sociales y descarga nuestra aplicación movil o contactanos por telefono
                    </h2>
                    
                    {/* Iconos y contacto */}
                    <div className="flex justify-center items-center gap-4 flex-wrap mb-4">
                        <a href="https://wa.me/+573136520767" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="h-8 w-8 text-white hover:text-yellow-300"/>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=co.gentedetaxi.servitaxi.pax&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                            <FaGooglePlay className="h-8 w-8 text-white hover:text-yellow-300"/>
                        </a>
                        <a href="https://apps.apple.com/co/app/servitaxi-popay%C3%A1n/id1249544312?l=en-GB" target="_blank" rel="noopener noreferrer">
                            <FaApple className="h-8 w-8 text-white hover:text-yellow-300"/>
                        </a>
                        <a href="https://www.facebook.com/servitaxi.popayan" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="h-8 w-8 text-white hover:text-yellow-300"/>
                        </a>
                        <a href="https://www.instagram.com/servitaxisa?igsh=aHdsOTB6ZTlmaHhr" target="_blank" rel="noopener noreferrer">
                            <CgInstagram className="h-8 w-8 text-white hover:text-yellow-300" />
                        </a>
                        {/* Teléfonos */}
                        <div className="flex items-center gap-2">
                            <FaPhoneAlt />
                            <span>(602) 8333333</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaPhoneAlt />
                            <span>(602) 444 11 11</span>
                        </div>
                        
                        {/* Dirección */}
                        <div className="flex items-center gap-2">
                            <SiGooglemaps className="h-5 w-5 text-white hover:text-yellow-300"/>
                            <span>Calle 2N #11 - 41. Popayán, Colombia</span>
                        </div>
                    </div>

                    {/* Horario */}
                    <div className="-mb-6">
                        <p className="font-bold">Horario de atención:</p>
                        <p>Lun - Vie: 8:00 am a 12:00 pm y 2:00 pm a 6:00 pm . Sábados de 8:00 am a 1:00 pm</p>
                    </div>

                    {/* Logos */}
                    <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap my-8">
                        <img 
                            src="/Logo-Vigilado-SuperTransporte_blanco_.png" 
                            alt="Logo SuperTransporte" 
                            className="h-16 md:h-20 w-auto object-contain" 
                        />
                        <img 
                            src="/logoservitaxi.jpg" 
                            alt="Logo Servitaxi" 
                            className="h-12 md:h-16 w-auto object-contain" 
                        />
                    </div>

                    {/* Mensaje de seguridad */}
                    <div className="text-center mb-2 -mt-8">
                        <h3 className="text-yellow-300 text-xl font-lobster italic">
                            Transportamos lo más valioso de la ciudad.
                        </h3>
                    </div>

                    {/* Logo y derechos */}
                    <div className="text-center">
                        
                        <p className="text-sm">© 2025 TODOS LOS DERECHOS RESERVADOS</p>
                        <p className="text-sm italic">Desarrollado por
                            <Link to="https://www.linkedin.com/in/juan-mart%C3%ADnez-b83a7b302/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-yellow-300 hover:underline"
                            > @juancmartinezf</Link>
                        </p>
                        <Link to="/politica-datos" 
                            className="text-sm text-yellow-300 hover:underline block mt-2 font-bold"
                        >
                            Terminos y condiciones de uso
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}