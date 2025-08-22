// src/components/Home.jsx
import { useState } from "react";
import "../App.css";
import Tips from "./Tips";
import Planificador from "./Planificador";
import Finanzas from "./Finanzas";
import ModalInicioYRegistro from "./auth/ModalInicioYRegistro";

export default function Home() {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <main>
      <section>
        <Tips />
      </section>
      <section>
        <Planificador />
      </section>
      <section>
        <Finanzas />
      </section>
    </main>
  );
}
