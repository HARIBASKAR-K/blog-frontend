import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAz2fnyuq2iokJszom0poyTFOwEhQKQQF8",
  authDomain: "one-last-try-af368.firebaseapp.com",
  projectId: "one-last-try-af368",
  storageBucket: "one-last-try-af368.firebasestorage.app",
  messagingSenderId: "195143220571",
  appId: "1:195143220571:web:39f85e267a0186084f2e7e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;