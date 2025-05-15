// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDVwLER-g5AL8TH52Go2sTEbS7O-HwaimE",
  authDomain: "mahjooz-aca56.firebaseapp.com",
  projectId: "mahjooz-aca56",
  storageBucket: "mahjooz-aca56.firebasestorage.app",
  messagingSenderId: "339972782124",
  appId: "1:339972782124:web:49dabf8ed86f0ebfae3989",
  measurementId: "G-49LJS40ZG2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);