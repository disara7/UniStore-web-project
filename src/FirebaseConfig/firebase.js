import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,GoogleAuthProvider,signInWithPopup,signInWithEmailAndPassword, signOut, fetchSignInMethodsForEmail, deleteUser, reauthenticateWithCredential, EmailAuthProvider, reauthenticateWithPopup } from 'firebase/auth'
import { getFirestore, collection, addDoc, setDoc, doc, updateDoc, getDocs,getDoc,deleteDoc,query,where } from 'firebase/firestore';
import { getStorage,ref, getDownloadURL, uploadBytesResumable  } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDAfh6WUlC2Z48vPIQARTGkTZZc4PforAk",
    authDomain: "unistore-6273f.firebaseapp.com",
    projectId: "unistore-6273f",
    storageBucket: "unistore-6273f.appspot.com",
    messagingSenderId: "708838579996",
    appId: "1:708838579996:web:9ea7d290403a6197aea4d9",
    measurementId: "G-V3N47MX9YV"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app, "gs://unistore-6273f.appspot.com");
const provider = new GoogleAuthProvider();


export { 
  auth, 
  firestore, 
  createUserWithEmailAndPassword, 
  collection, 
  addDoc, 
  ref, 
  storage, 
  getDownloadURL, 
  uploadBytesResumable, 
  setDoc,
  doc,
  updateDoc,
  onAuthStateChanged,
  provider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  getDocs,getDoc,
  fetchSignInMethodsForEmail,
  deleteDoc,
  deleteUser,
  reauthenticateWithCredential,
  EmailAuthProvider,
  reauthenticateWithPopup,
  GoogleAuthProvider,
  query,
  where
 };