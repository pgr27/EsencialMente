import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const imagenes = [
  { src: "/img/tips.png" },
  { src: "/img/planificador.png" },
  { src: "/img/habitos.png" },
  { src: "/img/finanzas.png" },
];

const Carrusel = () => {
  return (
    <div className="carrusel-bootstrap">
      <Carousel interval={4000} fade>
        {imagenes.map((img, i) => (
          <Carousel.Item key={i}>
            <img
              src={img.src}
              alt={img.alt}
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h5>{img.alt}</h5>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Carrusel;
