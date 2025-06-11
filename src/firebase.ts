import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBrbW1xyaejI7OoSSxMmCwpQcr0sovdZYs",
  authDomain: "octopouce-fdb85.firebaseapp.com",
  projectId: "octopouce-fdb85",
  storageBucket: "octopouce-fdb85.firebasestorage.app",
  messagingSenderId: "689046316349",
  appId: "1:689046316349:web:6933dbb00324934c58d154",
  measurementId: "G-33CLMGB1E7",
  databaseURL: "https://octopouce-fdb85-default-rtdb.europe-west1.firebasedatabase.app" // ✅ AJOUTÉ
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
