import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAoiPlDfDFfIlFCzlO-aSfaSny9e1KUu5U",
    authDomain: "linkedin-clone-612f3.firebaseapp.com",
    projectId: "linkedin-clone-612f3",
    storageBucket: "linkedin-clone-612f3.appspot.com",
    messagingSenderId: "247907133676",
    appId: "1:247907133676:web:c324f19a05bd8688e51dc9",
    measurementId: "G-9XRNG56RY8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { db, auth };