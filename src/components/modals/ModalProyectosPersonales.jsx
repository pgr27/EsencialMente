import React, { useState } from "react";
import { ModalGenerico } from "./ModalGenerico";
import tip1 from "../../html/tips/proyectos-personales/tip1.html?raw";
import tip2 from "../../html/tips/proyectos-personales/tip2.html?raw";
import tip3 from "../../html/tips/proyectos-personales/tip3.html?raw";
import tip4 from "../../html/tips/proyectos-personales/tip4.html?raw";

const ModalProyectosPersonales = () => {
  const [show, setShow] = useState(false);
  const [selectedTip, setSelectedTip] = useState(tip1);

  const tips = [
    { label: "Empieza pequeño, pero empieza ya", content: tip1 },
    { label: "Conecta tu proyecto con otras personas", content: tip2 },
    { label: "Documenta tu proceso desde el inicio", content: tip3 },
    { label: "Establece un sistema", content: tip4 },
  ];

  return (
    <section className="tips-section">
      {/* Botón para abrir el modal */}
      <button className="open-modal-btn" onClick={() => setShow(true)}>
        Proyectos Personales
      </button>

      <ModalGenerico
        show={show}
        handleClose={() => setShow(false)}
        title="Proyectos Personales"
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
export default ModalProyectosPersonales;
