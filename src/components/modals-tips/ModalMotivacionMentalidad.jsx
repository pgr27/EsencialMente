import React, { useState } from "react";
import ModalGenerico from "../ModalGenerico";

import tip1 from "../../html/tips/motivacion-mentalidad/tip1.html?raw";
import tip2 from "../../html/tips/motivacion-mentalidad/tip2.html?raw";
import tip3 from "../../html/tips/motivacion-mentalidad/tip3.html?raw";
import tip4 from "../../html/tips/motivacion-mentalidad/tip4.html?raw";

const ModalMotivacionMentalidad = () => {
  const [show, setShow] = useState(false);
  const [selectedTip, setSelectedTip] = useState(tip1);

  const tips = [
    { label: "Define tu “por qué”", content: tip1 },
    { label: "Micro-victorias", content: tip2 },
    { label: "Visualiza tu meta y el proceso", content: tip3 },
    { label: "Cambia el diálogo interno", content: tip4 },
  ];
  return (
    <section className="tips-section">
      {/* Botón para abrir el modal */}
      <button className="open-modal-btn" onClick={() => setShow(true)}>
        Motivación y Mentalidad
      </button>

      <ModalGenerico
        show={show}
        handleClose={() => setShow(false)}
        title="Motivación y Mentalidad"
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

export default ModalMotivacionMentalidad;
