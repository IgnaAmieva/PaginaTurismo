import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyBhKPGPqzsR0Yq1u5GC4xmkdY2POMW8ExI",
    authDomain: "frecuenciasurushuaia-1e061.firebaseapp.com",
    projectId: "frecuenciasurushuaia-1e061",
    storageBucket: "frecuenciasurushuaia-1e061.firebasestorage.app",
    messagingSenderId: "889124407912",
    appId: "1:889124407912:web:d3c9102e399ef5480d89dd",
    measurementId: "G-P8SFX8T03Q"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);