importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging-compat.js");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAAJDn2R97m_90l1GlAl5sZ_Z4pOrEZIWY",
    authDomain: "kutagjej.firebaseapp.com",
    projectId: "kutagjej",
    storageBucket: "kutagjej.appspot.com",
    messagingSenderId: "862406504590",
    appId: "1:862406504590:web:1c95e1496eed9bd84b59df",
    measurementId: "G-LPEWP1X0K3"
  };

  firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// todo Set up background message handler