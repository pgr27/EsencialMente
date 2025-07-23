import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-menu">
        <a href="#inicio">Inicio</a>
        <a href="#tips">Tips que funcionan</a>
        <a href="#planificador">Planificador</a>
        <a href="#recomendaciones">Recomendaciones</a>
        <a href="#finanzas">Finanzas</a>
        <a href="#sesion">Iniciar Sesión</a>
      </div>
    </nav>
  );
};

export default Navbar;
