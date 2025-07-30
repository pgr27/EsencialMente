import React, { useState } from "react";
import ModalGenerico from "../ModalGenerico";

import tip1 from "../../html/tips/gestion-tiempo/tip1.html?raw";
import tip2 from "../../html/tips/gestion-tiempo/tip2.html?raw";
import tip3 from "../../html/tips/gestion-tiempo/tip3.html?raw";
import tip4 from "../../html/tips/gestion-tiempo/tip4.html?raw";
import tip5 from "../../html/tips/gestion-tiempo/tip5.html?raw";

export const ModalGestionTiempo = () => {
  const [show, setShow] = useState(false);
  const [selectedTip, setSelectedTip] = useState(tip1);

  const tips = [
    { label: "Empieza el día con enfoque", content: tip1 },
    { label: "Aplica la regla de los 2 minutos", content: tip2 },
    { label: "Practica Time Blocking", content: tip3 },
    { label: "Evita la multitarea", content: tip4 },
    { label: "Usa descansos inteligentes (Pomodoro)", content: tip5 },
  ];

  return (
    <section className="tips-section">
      {/* Botón para abrir el modal */}
      <button className="category-buttons btn" onClick={() => setShow(true)}>
        Gestión del Tiempo
      </button>

      <ModalGenerico
        show={show}
        handleClose={() => setShow(false)}
        title="Gestión del Tiempo"
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
export default ModalGestionTiempo;
