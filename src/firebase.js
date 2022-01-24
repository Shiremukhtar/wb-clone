// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyC4AwZxySNzeX-V-cWLM5sPkWJcs_QGhxQ",
//   authDomain: "wb-clone-b4d2a.firebaseapp.com",
//   projectId: "wb-clone-b4d2a",
//   storageBucket: "wb-clone-b4d2a.appspot.com",
//   messagingSenderId: "382783260722",
//   appId: "1:382783260722:web:e2ba5179a77827d847d42b",
//   measurementId: "G-BZCW5063R4",
// };

console.log(process.env)
const { REACT_APP_API_KEY  } = process.env;
const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: "wajibuug-clone.firebaseapp.com",
  projectId: "wajibuug-clone",
  storageBucket: "wajibuug-clone.appspot.com",
  messagingSenderId: "688884755262",
  appId: "1:688884755262:web:b8447620f9fd3c9a5e5a6f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
export const auth = getAuth(app);

//  export { auth, provider };
export default db;
