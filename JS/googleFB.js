// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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
      updateUserProfile(user)
      //window.location.href = "usuario.html"

    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });
})

function updateUserProfile(user){
  const userName = user.displayName;
  const userEmail = user.email;
  const userID= user.uid;
  const userProfilePicture = user.photoURL;

  console.log('Usuario: ' + userName)
  console.log('Email: ' + userEmail)
  console.log('ID: ' + userID)

  localStorage.setItem("userID", userID);
}

const logout = document.getElementById("logout")

logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then( () => {
    console.log("LOGUEADO")
  })
})