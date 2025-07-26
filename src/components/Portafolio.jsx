import React from 'react';

function Portafolio() {
  return (
    <section id="portafolio" className="my-5">
      <h2 className="text-center mb-4">Portafolio</h2>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">ProyectoWeb</h5>
            <p className="card-text">Página web personal desarrollada como práctica universitaria aplicando React y diseño responsivo.</p>
           <a href="https://github.com/cugc142" className="btn" style={{ backgroundColor: '#34495e', color: 'white' }} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portafolio;
