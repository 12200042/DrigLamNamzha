import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: "AIzaSyDZh-VFvhYfEuEuqP9F9QrEWe1Bir1UhFQ",
  apiKey:process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "driglamnamzha.firebaseapp.com",
  projectId: "driglamnamzha",
  storageBucket: "driglamnamzha.appspot.com",
  messagingSenderId: "140509930192",
  appId: "1:140509930192:web:bc53cbff49321e8c0c74d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);

export function logout(){
  signOut(auth);
}