// src/components/Navbar.jsx
import { useState } from "react";
import "../App.css";
import ModalInicioYRegistro from "./auth/ModalInicioYRegistro";

const Navbar = () => {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <nav className="navbar fixed-top">
      <div className="navbar-container">
        <div className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#tips">Tips que funcionan</a>
          <a href="#planificador">Planificador</a>
          <a href="#finanzas">Educación Financiera Básica</a>
        </div>

        <div className="nav-buttons">
          {/* Botón de sesión */}
          <section id="sesion">
            <button className="btn-signup" onClick={() => setShowAuth(true)}>
              Regístrate · Inicia sesión
            </button>
          </section>

          {/* Modal de Login/Registro */}
          <ModalInicioYRegistro
            show={showAuth}
            handleClose={() => setShowAuth(false)}
            initialMode="signin" // o "signup" si prefieres abrir directamente en registro
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
