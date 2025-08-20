import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { apiKey, authDomain, projectId, appId } from "./env"; 

const firebaseConfig = {
  apiKey: apiKey, 
  authDomain: authDomain,   
  projectId:  projectId,
  appId: appId,};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
