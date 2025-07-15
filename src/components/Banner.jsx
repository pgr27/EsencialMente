import React, { useState, useEffect } from "react";
import "../App.css";

const imagenes = [
  "/img/tips.png",
  "/img/planificador.png",
  "/img/habitos.png",
  "/img/finanzas.png",
];

const Banner = () => {
  const [imagenActiva, setImagenActiva] = useState(0);

  // ⏱️ Movimiento automático
  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagenActiva((prev) => (prev + 1) % imagenes.length);
    }, 4000); // cambia cada 4 segundos

    return () => clearInterval(intervalo); // limpia el intervalo al desmontar
  }, []);

  const cambiarImagen = (indice) => {
    setImagenActiva(indice);
  };

  return (
    <div className="banner">
      <div className="carrusel">
        <img
          src={imagenes[imagenActiva]}
          alt={`Imagen ${imagenActiva + 1}`}
          className="imagen-carrusel"
        />
        <div className="indicadores">
          {imagenes.map((_, i) => (
            <span
              key={i}
              className={`punto ${imagenActiva === i ? "activo" : ""}`}
              onClick={() => cambiarImagen(i)}
            ></span>
          ))}
        </div>
      </div>

      <div className="texto-banner"></div>
    </div>
  );
};

export default Banner;
