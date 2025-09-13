import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDX-Fe3SLRNVKIVoTe0zObC9YLRCpb2BPI",
  authDomain: "aetheris-bcb7b.firebaseapp.com",
  projectId: "aetheris-bcb7b",
  storageBucket: "aetheris-bcb7b.firebasestorage.app",
  messagingSenderId: "247416180145",
  appId: "G-F6632F7ZHG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);