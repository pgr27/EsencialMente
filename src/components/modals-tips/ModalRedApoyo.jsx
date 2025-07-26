import React, { useState } from "react";
import ModalGenerico from "../ModalGenerico";

import tip1 from "../../html/tips/red-apoyo/tip1.html?raw";
import tip2 from "../../html/tips/red-apoyo/tip2.html?raw";
import tip3 from "../../html/tips/red-apoyo/tip3.html?raw";
import tip4 from "../../html/tips/red-apoyo/tip4.html?raw";
import tip5 from "../../html/tips/red-apoyo/tip5.html?raw";
import tip6 from "../../html/tips/red-apoyo/tip6.html?raw";

const ModalRedApoyo = () => {
  const [show, setShow] = useState(false);
  const [selectedTip, setSelectedTip] = useState(tip1);

  const tips = [
    { label: "Rodéate de personas que te hagan sentir bien", content: tip1 },
    { label: "Construye un entorno que te impulse", content: tip2 },
    { label: "Aprende a pedir ayuda", content: tip3 },
    { label: "Sé selectivo con la energía que recibes y das", content: tip4 },
    { label: "Ten círculos diferentes", content: tip5 },
    { label: "Crea tu red de apoyo", content: tip6 },
  ];

  return (
    <section className="tips-section">
      {/* Botón para abrir el modal */}
      <button className="open-modal-btn" onClick={() => setShow(true)}>
        Red de Apoyo
      </button>

      <ModalGenerico
        show={show}
        handleClose={() => setShow(false)}
        title="Red de Apoyo"
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
export default ModalRedApoyo;
