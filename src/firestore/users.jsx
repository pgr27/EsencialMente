import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firestore/firebase-config";

// Crear perfil de usuario al registrarse
export const createUserProfile = async (uid, userData) => {
  try {
    await setDoc(doc(db, "usuarios", uid), userData);
    console.log("Perfil de usuario creado");
  } catch (error) {
    console.error("Error al crear perfil:", error.message);
  }
};

// Obtener datos del usuario
export const getUserProfile = async (uid) => {
  try {
    const docSnap = await getDoc(doc(db, "usuarios", uid));
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("Usuario no encontrado");
      return null;
    }
  } catch (error) {
    console.error("Error al obtener perfil:", error.message);
    return null;
  }
};

// Actualizar datos del usuario
export const updateUserProfile = async (uid, updatedData) => {
  try {
    await updateDoc(doc(db, "usuarios", uid), updatedData);
    console.log("Perfil actualizado");
  } catch (error) {
    console.error("Error al actualizar perfil:", error.message);
  }
};
