import "../App.css";
import Modulo1 from "./modals-educacion/Modulo1";
import Modulo2 from "./modals-educacion/Modulo2";
import Modulo3 from "./modals-educacion/Modulo3";
import Modulo4 from "./modals-educacion/Modulo4";

const Finanzas = () => {
  return (
    <section id="finanzas">
      <hr className="separator" />
      <div className="descripcion descripcion-intro">
        <h2>Educación Financiera Básica</h2>
        <div>
          <p>
            Aquí encontrarás un recorrido práctico y sencillo para transformar
            tu relación con el dinero. No se trata solo de ahorrar, sino de
            entender cómo funciona el dinero, cómo gestionarlo y cómo hacerlo
            crecer. Hemos dividido el contenido en{" "}
            <strong>4 módulos pensados para acompañarte paso a paso</strong>,
            desde lo más básico hasta estrategias para proteger y multiplicar
            tus ingresos. ¿Qué vas a lograr? Más control, menos estrés y una
            mentalidad que te permita vivir con libertad financiera.
          </p>
        </div>
      </div>

      <div className="modules-description">
        <div className="descripcion descripcion-texto">
          <h3>Módulo 1: Fundamentos y Mentalidad Financiera</h3>
          <p>
            Empezamos por la base. En este módulo aprenderás qué es la educación
            financiera y por qué es tan importante para tu vida diaria.
            Entenderás conceptos clave como ingresos, gastos, ahorro e
            inversión. Además, trabajaremos en tu mentalidad: cómo evitar deudas
            malas y hábitos que drenan tu dinero. Para terminar, te enseñaremos
            a crear un presupuesto sencillo y realista, y descubrirás los
            errores más comunes que todos cometemos al gestionar el dinero (para
            que no caigas en ellos).
          </p>
          <Modulo1 />
        </div>
        <hr className="separatorModulos" />
        <div className="descripcion descripcion-texto">
          <h3>Módulo 2: Control del Dinero y Ahorro Inteligente</h3>
          <p>
            Aquí aprenderás a tomar el control total de tus finanzas sin sentir
            que te privas de todo. Verás métodos prácticos de ahorro, cómo
            diferenciar lo que realmente necesitas de lo que solo deseas y cómo
            hacer compras inteligentes. También aprenderás a fijar objetivos
            financieros claros y crear tu fondo de emergencia, porque los
            imprevistos siempre llegan… ¡y hay que estar listos!
          </p>
          <Modulo2 />
        </div>

        <hr className="separatorModulos" />

        <div className="descripcion descripcion-texto">
          <h3>Módulo 3: Deudas, Crédito e Inversión Inicial</h3>
          <p>
            El crédito no es malo, pero hay que saber usarlo. En este módulo te
            explicamos cómo funciona y cómo evitar caer en deudas que te
            ahoguen. Si ya tienes deudas, te enseñamos métodos efectivos para
            salir de ellas. Además, daremos los primeros pasos en inversión: qué
            significa, por qué es clave y cuáles son las opciones más seguras
            para empezar. Por último, comprenderás cómo la inflación afecta tu
            dinero y cómo protegerte.
            <Modulo3 />
          </p>
        </div>
        <hr className="separatorModulos" />

        <div className="descripcion descripcion-texto">
          <h3>Módulo 4: Crecimiento y Protección Financiera</h3>
          <p>
            Ahora que tienes una base sólida, es hora de crecer. Veremos cómo
            generar ingresos extra sin dejar tu trabajo, cuáles son los seguros
            que realmente necesitas y cómo protegerte de estafas y fraudes.
            También hablaremos de planificación para la jubilación y te
            mostraremos herramientas y apps que harán más fácil tu organización
            financiera. Este módulo es para consolidar tu seguridad y preparar
            un futuro estable.
          </p>
          <Modulo4 />
        </div>
      </div>

      <h5>
        Cuando termines estos módulos, tendrás{" "}
        <strong>
          control sobre tu dinero, menos estrés y una visión clara para crecer
          financieramente.
        </strong>
        Ya no sentirás que el dinero te controla, ¡ahora tú tendrás el mando!
      </h5>

      <hr className="separator" />
    </section>
  );
};

export default Finanzas;
