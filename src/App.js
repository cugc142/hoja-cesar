import React from 'react';
import Experiencia from './components/Experiencia';
import Formacion from './components/Formacion';
import Habilidades from './components/Habilidades';
import Portafolio from './components/Portafolio';
import Navbar from './components/Navbar';
import Perfil from './components/Perfil';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <Perfil />
        <Formacion />
        <Formacion />
        <Experiencia />
        <Habilidades />
        <Portafolio />
      </div>
    </div>
  );
}

export default App;
