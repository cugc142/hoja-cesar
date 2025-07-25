import React, { useState, useEffect } from 'react';
import Contacto from './components/Contacto';
import Experiencia from './components/Experiencia';
import Footer from './components/Footer';
import Formacion from './components/Formacion';
import Habilidades from './components/Habilidades';
import InformacionPersonal from './components/InformacionPersonal';
import Loader from './components/Loader';
import Portafolio from './components/Portafolio';
import Navbar from './components/Navbar';
import Perfil from './components/Perfil';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2000ms = 2 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <div className="container mt-4">
            <Perfil />
            <InformacionPersonal />
            <Formacion />
            <Experiencia />
            <Habilidades />
            <Portafolio />
            <Contacto />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
