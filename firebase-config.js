// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATTd9On54OjygmT1WwlzdGZ5vwplJNfqo",
  authDomain: "zenx-5af38.firebaseapp.com",
  databaseURL: "https://zenx-5af38-default-rtdb.firebaseio.com",
  projectId: "zenx-5af38",
  storageBucket: "zenx-5af38.firebasestorage.app",
  messagingSenderId: "365458295743",
  appId: "1:365458295743:web:a9a148c1e05d5855432f0a",
  measurementId: "G-KESJG1TNS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Export the initialized services
export { app, db };