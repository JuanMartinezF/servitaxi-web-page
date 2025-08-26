import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import MapSection from './components/MapSection'
import Home from './pages/Home'
import Quienessomos from './pages/Quienessomos'
import Servicios from './pages/Servicios'
import Contactanos from './pages/Contactanos'
import PoliticaDatos from './pages/PoliticaDatos'
import ProteccionDatos from './pages/ProteccionDatos'
import TyCPasajerosApp from "./pages/TyCPasajerosApp"
import AvisodePrivacidad from "./pages/AvisodePrivacidad"
import TyCTaxbox from "./pages/TyCTaxbox"
import ScrollToTop from "./pages/scrolltop"



function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop/>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienessomos" element={<Quienessomos />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contactanos" element={<Contactanos />} />
            <Route path="/politica-datos" element={<PoliticaDatos />} />
            <Route path="/proteccion-datos" element={<ProteccionDatos />} />
            <Route path="/terminos-y-condiciones" element={<TyCPasajerosApp />} />
            <Route path="/aviso-de-privacidad" element={<AvisodePrivacidad />} />
            <Route path="/terminos-y-condiciones-taxbot" element={<TyCTaxbox />} />
          </Routes>
          <MapSection />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App