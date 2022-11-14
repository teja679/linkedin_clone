import { initializeApp } from "firebase/app";
import { getAuth  } from  'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAoiPlDfDFfIlFCzlO-aSfaSny9e1KUu5U",
    authDomain: "linkedin-clone-612f3.firebaseapp.com",
    projectId: "linkedin-clone-612f3",
    storageBucket: "linkedin-clone-612f3.appspot.com",
    messagingSenderId: "247907133676",
    appId: "1:247907133676:web:c324f19a05bd8688e51dc9",
  };

  export const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app) 
  export const db = getFirestore(app)

