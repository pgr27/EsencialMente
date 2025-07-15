import { db } from "../firestore/firebase-config";
import { doc, setDoc, getDoc } from "firebase/firestore";

/**
 * Crea un documento para el usuario en la colección "usuarios"
 * @param {string} uid - El UID del usuario en Firebase Auth
 * @param {string} nombreCompleto - Nombre del usuario
 * @param {string} email - Email del usuario (clave lógica)
 */
export const guardarUsuario = async (uid, nombreCompleto, email) => {
  try {
    await setDoc(doc(db, "usuarios", uid), {
      nombreCompleto,
      email,
    });
    console.log("Usuario guardado correctamente en Firestore");
  } catch (error) {
    console.error("Error al guardar usuario:", error.message);
  }
};

/**
 * Consulta el documento del usuario por su UID
 * @param {string} uid - UID del usuario
 * @returns {Object|null} - Datos del usuario o null si no existe
 */
export const obtenerUsuario = async (uid) => {
  try {
    const docRef = doc(db, "usuarios", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("Usuario no encontrado en Firestore");
      return null;
    }
  } catch (error) {
    console.error("Error al obtener usuario:", error.message);
    return null;
  }
};
