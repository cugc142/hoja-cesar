import React from 'react';

function Habilidades() {
  const habilidades = ['C#', 'Python', 'HTML', 'CSS', 'JavaScript', 'React', 'SQL', 'Git', 'GitHub'];

  return (
    <section id="habilidades" className="my-5">
      <h2 className="text-center mb-4">Habilidades Técnicas</h2>
      <div className="container">
        <div className="row">
          {habilidades.map((habilidad, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card text-center" style={{ background: "rgba(13, 248, 130, 0.2)", border: "none" }}>
                <div className="card-body">
                  <p className="card-text">{habilidad}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Habilidades;
