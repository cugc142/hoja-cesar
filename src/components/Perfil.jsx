import React from 'react';
import foto from '../images/foto.jpg';

function Perfil() {
  return (
    <section id="perfil" className="text-center my-5">
      <div className="container">
        <div className="card mx-auto shadow" style={{ background: "rgba(38, 222, 129, 0.2)", border: "none" }}>
          <div className="card-body">
            <img 
              src={foto}
              alt="Mi Foto"
              className="rounded-circle mb-3"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <h2>Cesar Ulises González Cardona</h2>
            <p className="lead">Estudiante de Ingeniería en Sistemas</p>
            <p>Soy un joven estudiante de Ingeniería en Sistemas apasionado por la tecnología y el desarrollo web. Me considero una persona proactiva, autodidacta y comprometida con aprender y crecer en el área tecnológica.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Perfil;
