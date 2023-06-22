import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChV7-FNGUuEm8d8hxYFg8WoUdDhBuPTV8",
  authDomain: "portfolio-f999e.firebaseapp.com",
  databaseURL:
    "https://portfolio-f999e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-f999e",
  storageBucket: "portfolio-f999e.appspot.com",
  messagingSenderId: "735524378648",
  appId: "1:735524378648:web:191bedd0114b99cb4d4b6d",
};

// Initialize Firebase
let app;

// Vérifie si une application Firebase existe déjà
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // Utilise l'application Firebase existante
}

const database = getDatabase(app);

export { database };
