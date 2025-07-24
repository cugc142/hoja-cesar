import React from 'react';

function Formacion() {
  return (
    <section id="formacion" className="my-5">
      <h2 className="text-center mb-4">Formación Académica</h2>
      <div className="container">
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Primaria:</strong> Escuela Rural Mixta de Aldea el Salamar, Moyuta Jutiapa
          </li>
          <li className="list-group-item">
            <strong>Básico:</strong> Instituto de Educación Básica por Cooperativa
          </li>
          <li className="list-group-item">
            <strong>Diversificado:</strong> Instituto de Educación Diversificado por Cooperativa
          </li>
          <li className="list-group-item">
            <strong>Universidad:</strong> Universidad Mariano Gálvez de Guatemala
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Formacion;
