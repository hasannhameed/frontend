import { toast } from "react-toastify";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtxCL2WxyyH_RuSBl7jMlY5Pdi0T6dQX4",
  authDomain: "netflix-clone-8532a.firebaseapp.com",
  projectId: "netflix-clone-8532a",
  storageBucket: "netflix-clone-8532a.appspot.com",
  messagingSenderId: "1005781622943",
  appId: "1:1005781622943:web:72afd7c04d4564977b02aa",
  measurementId: "G-EFL25EX5Z6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });

    console.log("User signed up:", user);
  } catch (error) {
    console.error("Sign-up error:", error);
    toast.error(error.message);
  }
};

const logIn = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", response.user);
  } catch (error) {
    console.error("Login error:", error);
    toast.error(error.message);
  }
};

const logOut = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Logout error:", error);
    alert(error.message);
    toast.error(error.message);
  }
};

export { auth, logOut, signUp, logIn, db };
