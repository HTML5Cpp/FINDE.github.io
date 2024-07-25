
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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
const provider = new GoogleAuthProvider();




//SIGNIN CORREO
const submitSign = document.getElementById('sign-btn')
submitSign.addEventListener("click", function(event) {
  event.preventDefault()
  const email = document.getElementById('UserEmail').value 
  const pass = document.getElementById('UserPassword').value 
  const pass2 = document.getElementById('UserPassword2').value 

  createUserWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert('Usuario Creado')
    window.location.href = 'index.html';
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})

//LOGIN CORREO
const submitLogin = document.getElementById('sign-btn2')
submitLogin.addEventListener("click", function(event) {
  event.preventDefault()
  const email = document.getElementById('UserEmail').value 
  const pass = document.getElementById('UserPassword').value 

  signInWithEmailAndPassword(auth, email, pass)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.location.href = 'index.html';
    // ...

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(uid)
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  
})





// GOOGLE LOGIN
const  googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener('click', function(){
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      const user = result.user;
      console.log(user);
      window.location.href = "../index.html"

    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });
})