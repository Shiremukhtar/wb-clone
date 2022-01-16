// import firebase from "firebase";
import { initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC4AwZxySNzeX-V-cWLM5sPkWJcs_QGhxQ",
  authDomain: "wb-clone-b4d2a.firebaseapp.com",
  projectId: "wb-clone-b4d2a",
  storageBucket: "wb-clone-b4d2a.appspot.com",
  messagingSenderId: "382783260722",
  appId: "1:382783260722:web:e2ba5179a77827d847d42b",
  measurementId: "G-BZCW5063R4",
};



const app = initializeApp(firebaseConfig);
//const db = firebaseApp.firestore();
export const auth = getAuth(app)


//  export { auth, provider };
//export default db;
