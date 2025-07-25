import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <div className="container text-center">
        <p>© {new Date().getFullYear()} Cesar Ulises González Cardona. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
