import ModalGenerico from "../ModalGenerico";
import Authentication from "./Authentication";

export default function ModalInicioYRegistro({ show, handleClose }) {
  return (
    <ModalGenerico
      show={show}
      handleClose={handleClose}
      title="Accede a tu cuenta"
      body={<Authentication onSuccess={handleClose} />}
    />
  );
}
