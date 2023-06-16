// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhKenoN75-bwRt6-Uke6vWIcWBvJGROTU",
  authDomain: "calendly-saas.firebaseapp.com",
  projectId: "calendly-saas",
  storageBucket: "calendly-saas.appspot.com",
  messagingSenderId: "943345691318",
  appId: "1:943345691318:web:b1d428bdee5b635ed8d417"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app