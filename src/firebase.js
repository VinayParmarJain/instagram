import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCCnqvaW-UmazylDzGK5-ncvuhURVrokWg",
  authDomain: "instagram-cbbc8.firebaseapp.com",
  databaseURL: "https://instagram-cbbc8.firebaseio.com",
  projectId: "instagram-cbbc8",
  storageBucket: "instagram-cbbc8.appspot.com",
  messagingSenderId: "873304111428",
  appId: "1:873304111428:web:16666bfcf530a94a6dbf11",
  measurementId: "G-HG59MVSB9M",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
