import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBlzc_RQIm9wo3zIjfP3Mz-YkFQDwtFZxg",
    authDomain: "firegram-e3e55.firebaseapp.com",
    projectId: "firegram-e3e55",
    storageBucket: "firegram-e3e55.appspot.com",
    messagingSenderId: "955060646154",
    appId: "1:955060646154:web:48a1218b7fdbd49cd64af3"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const projectStorage = getStorage();
const projectFirestore = getFirestore();

export { projectStorage, projectFirestore };
