import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXPgvGZ2IIPGgAbIUvjyOFXWBJWzNce1c",
  authDomain: "dmmweb-ee1af.firebaseapp.com",
  databaseURL: "https://dmmweb-ee1af-default-rtdb.firebaseio.com",
  projectId: "dmmweb-ee1af",
  storageBucket: "dmmweb-ee1af.appspot.com",
  messagingSenderId: "752990094553",
  appId: "1:752990094553:web:06d9a2d80e37b9a3606ac8",
  measurementId: "G-64MQTXE8P1"
};
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
