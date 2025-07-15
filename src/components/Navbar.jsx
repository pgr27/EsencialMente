import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="nav-menu">
        <button onClick={() => navigate("/")}>🌳JOVENES€SENCIAL</button>
        <button onClick={() => navigate("/")}>Inicio</button>
        <button onClick={() => navigate("/consejos")}>Consejos</button>
        <button onClick={() => navigate("/planificador")}>
          Planificador Semanal
        </button>
        <button onClick={() => navigate("/recomendaciones")}>
          Recomendaciones
        </button>
        <button onClick={() => navigate("/finanzas")}>
          Educación Financiera Básica
        </button>
        <button onClick={() => navigate("/login")}>Iniciar Sesión</button>
      </div>
    </nav>
  );
};

export default Navbar;
