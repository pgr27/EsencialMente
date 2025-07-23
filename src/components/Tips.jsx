import "../App.css";
import ModalGestionTiempo from "./modals/ModalGestionTiempo";
import ModalHabitosSaludables from "./modals/ModalHabitosSaludables";
import ModalEstudioEfectivo from "./modals/ModalEstudioEfectivo";
import ModalMotivacionMentalidad from "./modals/ModalMotivacionMentalidad";
import ModalVidaDigitalConsciente from "./modals/ModalVidaDigitalConsciente";
import ModalAutoestimaCuidadoPersonal from "./modals/ModalAutoestimaCuidadoPersonal";
import ModalRedApoyo from "./modals/ModalRedApoyo";
import ModalProyectosPersonales from "./modals/ModalProyectosPersonales";

const Tips = () => {
  return (
    <section id="tips">
      <h1 className="title-center">Tips que funcionan</h1>
      <div>
        <h3>
          Cuidarse a uno mismo es una inversión que siempre merece la pena.
          <p className="description">
            Aquí encontrarás tips prácticos y fáciles de aplicar para mejorar tu
            bienestar emocional y mental. Cada consejo está diseñado para
            ayudarte a crecer, crear hábitos saludables y sentirte mejor contigo
            mismo día a día.
          </p>
        </h3>
      </div>

      <div className="category-buttons">
        <ModalGestionTiempo />
        <ModalHabitosSaludables />
        <ModalEstudioEfectivo />
        <ModalMotivacionMentalidad />
        <ModalVidaDigitalConsciente />
        <ModalAutoestimaCuidadoPersonal />
        <ModalRedApoyo />
        <ModalProyectosPersonales />
      </div>
    </section>
  );
};

export default Tips;
