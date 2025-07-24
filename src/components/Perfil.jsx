import foto from '../images/foto.jpg';
import React from 'react';


function Perfil() {
  return (
    <section id="perfil" className="text-center my-5">
      <img 
  src={foto}
  alt="Mi Foto"
  className="rounded-circle mb-3"
  style={{ width: "150px", height: "150px", objectFit: "cover" }}
/>

      <h2>Tu Nombre Completo</h2>
      <p className="lead">Estudiante de Ingeniería en Sistemas | Desarrollador Frontend</p>
      <p>Apasionado por el desarrollo web, la programación y la tecnología.</p>
    </section>
  );
}

export default Perfil;
