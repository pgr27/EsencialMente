import { useState } from "react";
import ModalGenerico from "../ModalGenerico";
import tip1 from "../../html/educacion-financiera/modulo2/tip1.html?raw";
import tip2 from "../../html/educacion-financiera/modulo2/tip2.html?raw";
import tip3 from "../../html/educacion-financiera/modulo2/tip3.html?raw";
import tip4 from "../../html/educacion-financiera/modulo2/tip4.html?raw";
import tip5 from "../../html/educacion-financiera/modulo2/tip5.html?raw";

import "../../App.css";

const Modulo2 = () => {
  const [show, setShow] = useState(false);
  const [selectedTip, setSelectedTip] = useState(tip1);

  const tips = [
    {
      label: "¿Por qué la mayoría no ahorra?",
      content: tip1,
    },
    {
      label: "Cómo diferenciar necesidad vs. deseo",
      content: tip2,
    },
    {
      label: "Compras inteligentes: cuándo y cómo ahorrar en compras",
      content: tip3,
    },
    {
      label: "Cómo establecer objetivos financieros y cumplirlos",
      content: tip4,
    },
    {
      label: "Fondo de emergencia: qué es y por qué es vital",
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
        title="Control del Dinero y Ahorro Inteligente"
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
export default Modulo2;
