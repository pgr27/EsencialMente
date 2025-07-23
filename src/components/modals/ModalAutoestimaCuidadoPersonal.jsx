import React, { useState } from "react";
import { ModalGenerico } from "./ModalGenerico";

import tip1 from "../../html/tips/autoestima-cuidado-personal/tip1.html?raw";
import tip2 from "../../html/tips/autoestima-cuidado-personal/tip2.html?raw";
import tip3 from "../../html/tips/autoestima-cuidado-personal/tip3.html?raw";
import tip4 from "../../html/tips/autoestima-cuidado-personal/tip4.html?raw";
import tip5 from "../../html/tips/autoestima-cuidado-personal/tip5.html?raw";

const ModalAutoestimaCuidadoPersonal = () => {
  const [show, setShow] = useState(false);
  const [selectedTip, setSelectedTip] = useState(tip1);

  const tips = [
    { label: "Dedicate tiempo todos los días", content: tip1 },
    { label: "Aprende a decir NO", content: tip2 },
    { label: "Cuida tu cuerpo", content: tip3 },
    { label: "Practica la gratitud diaria", content: tip4 },
    { label: "Habla contigo", content: tip5 },
  ];

  return (
    <section className="tips-section">
      {/* Botón para abrir el modal */}
      <button className="open-modal-btn" onClick={() => setShow(true)}>
        Autoestima y Cuidado Personal
      </button>

      <ModalGenerico
        show={show}
        handleClose={() => setShow(false)}
        title="Autoestima y Cuidado Personal"
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
export default ModalAutoestimaCuidadoPersonal;
