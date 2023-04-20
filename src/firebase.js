import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHBtFNLrq_hwVg5LS5cnQl4zYnovLHtm4",
  authDomain: "firereact-d64d3.firebaseapp.com",
  projectId: "firereact-d64d3",
  storageBucket: "firereact-d64d3.appspot.com",
  messagingSenderId: "838483052255",
  appId: "1:838483052255:web:0b0462a2273ccf4f578b6a",
  measurementId: "G-LCG2CZ4V0H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { app, db };
