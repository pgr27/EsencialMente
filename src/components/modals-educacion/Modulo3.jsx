import { useState } from "react";
import ModalGenerico from "../ModalGenerico";
import tip1 from "../../html/educacion-financiera/modulo3/tip1.html?raw";
import tip2 from "../../html/educacion-financiera/modulo3/tip2.html?raw";
import tip3 from "../../html/educacion-financiera/modulo3/tip3.html?raw";
import tip4 from "../../html/educacion-financiera/modulo3/tip4.html?raw";
import tip5 from "../../html/educacion-financiera/modulo3/tip5.html?raw";

import "../../App.css";

const Modulo3 = () => {
  const [show, setShow] = useState(false);
  const [selectedTip, setSelectedTip] = useState(tip1);

  const tips = [
    {
      label: "Qué es el crédito y cómo usarlo bien",
      content: tip1,
    },
    {
      label: " Cómo salir de deudas y no volver a endeudarte",
      content: tip2,
    },
    {
      label: "Introducción a la inversión para principiantes",
      content: tip3,
    },
    {
      label: "Opciones de inversión simples y seguras",
      content: tip4,
    },
    {
      label: "Cómo afecta la inflación a tu dinero",
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
        title="Deudas, Crédito e Inversión Inicial"
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
export default Modulo3;
