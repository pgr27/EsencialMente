import { useState } from "react";
import ModalGenerico from "../ModalGenerico";
import tip1 from "../../html/educacion-financiera/modulo1/tip1.html?raw";
import tip2 from "../../html/educacion-financiera/modulo1/tip2.html?raw";
import tip3 from "../../html/educacion-financiera/modulo1/tip3.html?raw";
import tip4 from "../../html/educacion-financiera/modulo1/tip4.html?raw";
import tip5 from "../../html/educacion-financiera/modulo1/tip5.html?raw";

import "../../App.css";

const Modulo1 = () => {
  const [show, setShow] = useState(false);
  const [selectedTip, setSelectedTip] = useState(tip1);

  const tips = [
    {
      label: "¿Qué es la educación financiera y por qué es importante?",
      content: tip1,
    },
    {
      label: " Diferencia entre ingresos, gastos, ahorro e inversión",
      content: tip2,
    },
    {
      label: "Mentalidad financiera: evita deudas malas y hábitos tóxicos",
      content: tip3,
    },
    {
      label: "Cómo hacer un presupuesto fácil y realista",
      content: tip4,
    },
    {
      label: "Errores más comunes al gestionar el dinero y cómo evitarlos",
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
        title="¿Qué es la educacion financiera y por qué es tan importante?"
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
            <div
              className="tip-content"
              dangerouslySetInnerHTML={{ __html: selectedTip }}
            />
          </div>
        }
      />
    </section>
  );
};
export default Modulo1;
