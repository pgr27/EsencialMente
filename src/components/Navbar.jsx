import "../App.css";

const Navbar = () => {
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
          <button className="btn-signup">Regístrate</button>
          <button className="btn-login">Inicia Sesión</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
