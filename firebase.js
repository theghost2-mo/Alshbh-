import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, update, onValue, off } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDVwLER-g5AL8TH52Go2sTEbS7O-HwaimE",
  authDomain: "mahjooz-aca56.firebaseapp.com",
  databaseURL: "https://mahjooz-aca56-default-rtdb.firebaseio.com",
  projectId: "mahjooz-aca56",
  storageBucket: "mahjooz-aca56.appspot.com",
  messagingSenderId: "339972782124",
  appId: "1:339972782124:web:49dabf8ed86f0ebfae3989",
  measurementId: "G-49LJS40ZG2"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, update, onValue, off };