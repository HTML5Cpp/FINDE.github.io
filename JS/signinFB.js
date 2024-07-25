// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBwsAv6dmm4HbMxgYOAdHC_DEHzTA1bcRM",
    authDomain: "finde-48f65.firebaseapp.com",
    projectId: "finde-48f65",
    storageBucket: "finde-48f65.appspot.com",
    messagingSenderId: "680778733071",
    appId: "1:680778733071:web:432d88d768d95db26e757a",
    measurementId: "G-94SF3KMG9X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
auth.languageCode = 'es'


//SIGNIN CORREO
const submitSign = document.getElementById('sign-btn')
submitSign.addEventListener("click", function(event) {
  event.preventDefault()

    let email = document.getElementById('UserEmail').value
    let pass = document.getElementById('UserPassword').value

    createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert('Usuario Creado')
      window.location.href = 'login.html';
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
  
  
})

const submitSign2 = document.getElementById('sign-btn2')
submitSign2.addEventListener("click", function(event) {
  event.preventDefault()

    let email2 = document.getElementById('ResEmail').value
    let pas2s = document.getElementById('ResPassword').value   

    createUserWithEmailAndPassword(auth, email2, pas2s)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert('Usuario Creado')
      window.location.href = 'login.html';
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
})
