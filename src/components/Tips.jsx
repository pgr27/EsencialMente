import "../App.css";
import ModalGestionTiempo from "./modals-tips/ModalGestionTiempo";
import ModalHabitosSaludables from "./modals-tips/ModalHabitosSaludables";
import ModalEstudioEfectivo from "./modals-tips/ModalEstudioEfectivo";
import ModalMotivacionMentalidad from "./modals-tips/ModalMotivacionMentalidad";
import ModalVidaDigitalConsciente from "./modals-tips/ModalVidaDigitalConsciente";
import ModalAutoestimaCuidadoPersonal from "./modals-tips/ModalAutoestimaCuidadoPersonal";
import ModalRedApoyo from "./modals-tips/ModalRedApoyo";
import ModalProyectosPersonales from "./modals-tips/ModalProyectosPersonales";

const Tips = () => {
  return (
    <section id="tips">
      <hr class="separator" />
      <h1 className="title-center">Tips que funcionan</h1>
      <div>
        <h5>
          Cuidarse a uno mismo es una inversión que siempre merece la pena.
        </h5>
        <p>
          Cuidarse a uno mismo es una inversión que siempre merece la pena. Aquí
          encontrarás tips prácticos y fáciles de aplicar para mejorar tu
          bienestar emocional y mental. Cada consejo está diseñado para ayudarte
          a crecer, crear hábitos saludables y sentirte mejor contigo mismo día
          a día.
        </p>
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
      <hr class="separator" />
    </section>
  );
};

export default Tips;
