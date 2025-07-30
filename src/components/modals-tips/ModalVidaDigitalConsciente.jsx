import React, { useState } from "react";
import ModalGenerico from "../ModalGenerico";

import tip1 from "../../html/tips/vida-digital-consciente/tip1.html?raw";
import tip2 from "../../html/tips/vida-digital-consciente/tip2.html?raw";
import tip3 from "../../html/tips/vida-digital-consciente/tip3.html?raw";
import tip4 from "../../html/tips/vida-digital-consciente/tip4.html?raw";
import tip5 from "../../html/tips/vida-digital-consciente/tip5.html?raw";
import tip6 from "../../html/tips/vida-digital-consciente/tip6.html?raw";
import tip7 from "../../html/tips/vida-digital-consciente/tip7.html?raw";
import tip8 from "../../html/tips/vida-digital-consciente/tip8.html?raw";

const ModalVidaDigitalConsciente = () => {
  const [show, setShow] = useState(false);
  const [selectedTip, setSelectedTip] = useState(tip1);

  const tips = [
    { label: "Define zonas y horarios sin tecnología", content: tip1 },
    { label: "Practica el “Slow Scrolling”", content: tip2 },
    { label: "Protege tu privacidad con buenos hábitos", content: tip3 },
    { label: "Haz limpieza digital mensual", content: tip4 },
    {
      label: "Aprende a usar el “modo concentración” del móvil",
      content: tip5,
    },
    { label: "Controla el FOMO", content: tip6 },
    { label: "Día detox digital", content: tip7 },
    { label: "Minimalismo Digital", content: tip8 },
  ];

  return (
    <section className="tips-section">
      {/* Botón para abrir el modal */}
      <button className="category-buttons btn" onClick={() => setShow(true)}>
        Vida Digital Consciente
      </button>

      <ModalGenerico
        show={show}
        handleClose={() => setShow(false)}
        title="Vida Digital Consciente"
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

export default ModalVidaDigitalConsciente;
