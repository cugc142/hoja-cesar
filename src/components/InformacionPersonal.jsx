import React from 'react';

function InformacionPersonal() {
  return (
    <section id="informacion" className="my-5">
      <h2 className="text-center mb-4">Información Personal</h2>
      <div className="container">
        <ul className="list-group">
          <li className="list-group-item"><strong>Nombre completo:</strong> Cesar Ulises González Cardona</li>
          <li className="list-group-item"><strong>Edad:</strong> 21 años</li>
          <li className="list-group-item"><strong>Nacionalidad:</strong> Guatemalteco</li>
          <li className="list-group-item"><strong>Estado civil:</strong> Soltero</li>
          <li className="list-group-item"><strong>Teléfono:</strong> 42286059</li>
          <li className="list-group-item"><strong>Email:</strong> Ulisescardona142@gmail.com</li>
        </ul>
      </div>
    </section>
  );
}

export default InformacionPersonal;
