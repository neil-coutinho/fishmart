import Rebase from "re-base";
import firebase from "firebase";



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBofPS1PTznKh4WAimxD3KjW9fqe7Tdnnw",
    authDomain: "catch-of-the-day-njc.firebaseapp.com",
    projectId: "catch-of-the-day-njc",
    storageBucket: "catch-of-the-day-njc.appspot.com",
    messagingSenderId: "662985616852",
    appId: "1:662985616852:web:aabf97eea218ce6ad1fa41",
    measurementId: "G-8GZ6453312",
    databaseURL : "https://catch-of-the-day-njc-default-rtdb.firebaseio.com/"

  })


  const base = Rebase.createClass(firebaseApp.database())
  export {firebaseApp}

  export default base;

