// Importa las funciones necesarias desde Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Tu configuración de Firebase (puedes obtenerla desde el panel de Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyCqknmQR1s3VieF-oRmWc2r_N_2_GJM5PM",
  authDomain: "jovenesencial.firebaseapp.com",
  projectId: "jovenesencial",
  storageBucket: "jovenesencial.firebasestorage.app",
  messagingSenderId: "242943513326",
  appId: "1:242943513326:web:ac2239fcaffe81686fd9ff",
  measurementId: "G-0RY3KFPFNE",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta Firestore y Auth para usarlos en otros archivos
export const db = getFirestore(app);
export const auth = getAuth(app);
