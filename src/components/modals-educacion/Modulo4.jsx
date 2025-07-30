import { useState } from "react";
import ModalGenerico from "../ModalGenerico";
import tip1 from "../../html/educacion-financiera/modulo4/tip1.html?raw";
import tip2 from "../../html/educacion-financiera/modulo4/tip2.html?raw";
import tip3 from "../../html/educacion-financiera/modulo4/tip3.html?raw";
import tip4 from "../../html/educacion-financiera/modulo4/tip4.html?raw";
import tip5 from "../../html/educacion-financiera/modulo4/tip5.html?raw";

import "../../App.css";

const Modulo4 = () => {
  const [show, setShow] = useState(false);
  const [selectedTip, setSelectedTip] = useState(tip1);

  const tips = [
    {
      label: "Seguros: cuáles necesitas y cuáles no",
      content: tip1,
    },
    {
      label: "Cómo proteger tu dinero de estafas y fraudes",
      content: tip2,
    },
    {
      label: "Cómo generar ingresos adicionales sin dejar tu trabajo",
      content: tip3,
    },
    {
      label: "Planificación para la jubilación desde joven",
      content: tip4,
    },
    {
      label: "Apps y herramientas para mejorar tus finanzas",
      content: tip5,
    },
  ];

  return (
    <section className="tips-section">
      {/* Botón para abrir el modal */}
      <button className="open-modal-btn" onClick={() => setShow(true)}>
        Saber más...
      </button>

      <ModalGenerico
        show={show}
        handleClose={() => setShow(false)}
        title="Crecimiento y Protección Financiera"
        body={
          <div className="html-content">
            <div className="tip-buttons">
              {tips.map((tip, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTip(tip.content)}
                  className="tip-btn"
                >
                  {tip.label}
                </button>
              ))}
            </div>
            <div className="descripcion descripcion-texto">
              <div
                className="tip-content"
                dangerouslySetInnerHTML={{ __html: selectedTip }}
              />
            </div>
          </div>
        }
      />
    </section>
  );
};
export default Modulo4;
