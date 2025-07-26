import React, { useState } from "react";
import ModalGenerico from "../ModalGenerico";

import tip1 from "../../html/tips/habitos-saludables/tip1.html?raw";
import tip2 from "../../html/tips/habitos-saludables/tip2.html?raw";
import tip3 from "../../html/tips/habitos-saludables/tip3.html?raw";
import tip4 from "../../html/tips/habitos-saludables/tip4.html?raw";
import tip5 from "../../html/tips/habitos-saludables/tip5.html?raw";
import tip6 from "../../html/tips/habitos-saludables/tip6.html?raw";
import tip7 from "../../html/tips/habitos-saludables/tip7.html?raw";

const ModalHabitosSaludables = () => {
  const [show, setShow] = useState(false);
  const [selectedTip, setSelectedTip] = useState(tip1);

  const tips = [
    { label: "La técnica del “Meal Prep”", content: tip1 },
    { label: "La regla 80-20", content: tip2 },
    { label: "“Check” postural", content: tip3 },
    { label: "Reduce la cafeína", content: tip4 },
    { label: "Caminata consciente", content: tip5 },
    { label: "Respiraciones 4-7-8", content: tip6 },
    { label: "La regla 20-20-20", content: tip7 },
  ];

  return (
    <section className="tips-section">
      {/* Botón para abrir el modal */}
      <button className="open-modal-btn" onClick={() => setShow(true)}>
        Habitos Saludables
      </button>

      <ModalGenerico
        show={show}
        handleClose={() => setShow(false)}
        title="Habitos Saludables"
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

export default ModalHabitosSaludables;
