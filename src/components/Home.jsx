import "../App.css";
import Tips from "./Tips";
import Planificador from "./Planificador";
import Recomendaciones from "./Recomendaciones";
import Finanzas from "./Finanzas";

const Home = () => {
  return (
    <main>
      <section id="inicio">EsencialMente</section>
      <section id="inicio">Inicio</section>
      <section>
        <Tips />
      </section>
      <section>
        <Planificador />
      </section>
      <section>
        <Recomendaciones />
      </section>
      <section>
        <Finanzas />
      </section>
      <section id="sesion">Iniciar Sesión</section>
    </main>
  );
};
export default Home;
