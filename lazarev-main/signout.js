

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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Check if user is signed in
window.onload = function() {
    if (localStorage.getItem("isUserSignedIn") === "true") {
        alert("Active User " + localStorage.getItem("userEmail"));
        // window.location.replace("analytics.html");
    }
};

auth.onAuthStateChanged(function(user) {
    if (user) {
        // Store sign-in status and email in localStorage
        localStorage.setItem("isUserSignedIn", "true");
        localStorage.setItem("userEmail", user.email);
        alert("Active User " + user.email);
    } else {
        // Clear sign-in status from localStorage
        localStorage.clear();
        alert("No Active User");
    }
});

// auth.onAuthStateChanged(function() {
//     var user = auth.currentUser;
//     if (user) {
//         alert("Active User " + user.email);
//     } else {
//         alert("No Active User");
//     }
// });


function signOut() {
    var user = auth.currentUser;
    if (user) {
        if (confirm("Are you sure you want to sign out?")) {
            auth.signOut().then(() => {
                alert("You have been signed out successfully.");
                window.location.replace("index.html"); // Redirect to another page on success
            }).catch(e => {
                alert("Error signing out: " + e.message);
            });
        }
    } else {
        alert("No active user to sign out.");
    }
}
