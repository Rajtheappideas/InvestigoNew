import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTV1RUdj9Mm24IfdYIoKESeWcPCCUZH1E",
  authDomain: "investigo-352205.firebaseapp.com",
  projectId: "investigo-352205",
  storageBucket: "investigo-352205.appspot.com",
  messagingSenderId: "280497800596",
  appId: "1:280497800596:web:d63b18ef34f28a6b73bb81",
  measurementId: "G-V21K6LN1ZD",
};
export const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
