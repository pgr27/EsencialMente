import React, { useState } from "react";
import ModalGenerico from "../ModalGenerico";

import tip1 from "../../html/tips/estudio-efectivo/tip1.html?raw";
import tip2 from "../../html/tips/estudio-efectivo/tip2.html?raw";
import tip3 from "../../html/tips/estudio-efectivo/tip3.html?raw";
import tip4 from "../../html/tips/estudio-efectivo/tip4.html?raw";
import tip5 from "../../html/tips/estudio-efectivo/tip5.html?raw";
import tip6 from "../../html/tips/estudio-efectivo/tip6.html?raw";

export const ModalEstudioEfectivo = () => {
  const [show, setShow] = useState(false);
  const [selectedTip, setSelectedTip] = useState(tip1);

  const tips = [
    { label: "Planifica tu sesión", content: tip1 },
    { label: "Elimina distracciones digitales", content: tip2 },
    { label: "Estudia en bloques temáticos (Batching)", content: tip3 },
    { label: "Revisión activa", content: tip4 },
    { label: "Metas pequeñas y medibles", content: tip5 },
    { label: "Mapas mentales", content: tip6 },
  ];

  return (
    <section className="tips-section">
      {/* Botón para abrir el modal */}
      <button className="category-buttons btn" onClick={() => setShow(true)}>
        Estudio Efectivo
      </button>

      <ModalGenerico
        show={show}
        handleClose={() => setShow(false)}
        title="Estudio Efectivo"
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
export default ModalEstudioEfectivo;
