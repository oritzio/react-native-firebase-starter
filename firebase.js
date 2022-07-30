import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "Z39Anp432McbPkLrURA",
  authDomain: "appname.firebaseapp.com",
  projectId: "appname",
  storageBucket: "appname.appspot.com",
  messagingSenderId: "802252760134",
  appId: "1:802252760134:web:8f90a75a7eb91919355647"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }