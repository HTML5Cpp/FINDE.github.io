
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
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
   
    // ...

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(uid)
        // ...
        alert(uid)
        updateUserProfile(user)
        //window.location.href = 'index.html';
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

function updateUserProfile(user){
  const userName = user.displayName;
  const userEmail = user.email;
  const userID= user.uid;

  localStorage.setItem("userID", userID);
}
