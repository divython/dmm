// Your web app's Firebase configuration
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

// window.onload = function() {
//     if (localStorage.getItem("isUserSignedIn") === "true") {
//         alert("Active User " + localStorage.getItem("userEmail"));
//         window.location.replace("analytics.html");
//     }
// };

// auth.onAuthStateChanged(function(user) {
//     if (user) {
//         // Store sign-in status and email in localStorage
//         localStorage.setItem("isUserSignedIn", "true");
//         localStorage.setItem("userEmail", user.email);
//         alert("Active User " + user.email);
//     } else {
//         // Clear sign-in status from localStorage
//         localStorage.clear();
//         alert("No Active User");
//     }
// });

auth.onAuthStateChanged(function() {
    var user = auth.currentUser;
    if (user) {
        alert("Active User " + user.email);
    } else {
        alert("No Active User");
    }
});

// function signUp() {
//     var user = auth.currentUser;
//     if (user) {
//         alert("Already Logged in")
//     } else {
//         var email = document.getElementById("email");
//         var password = document.getElementById("password");
//         auth.createUserWithEmailAndPassword(email.value, password.value).catch(e => alert(e.message));
//         alert("SignUp");
//         window.location.replace("analytics.html");
//     }
// }

function signUp() {
    var user = auth.currentUser;
    if (user) {
        alert("Already Logged in");
    } else {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                alert("SignUp Successful");
                // window.location.replace("analytics.html");
            })
            .catch(e => alert(e.message));
    }
}

function signIn() {
    var user = auth.currentUser;
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    if (!(user)) {
        auth.signInWithEmailAndPassword(email.value, password.value).catch(e => alert(e.message));
        alert("Signing in");
        // window.location.replace("analytics.html");
    } else {
        alert("Already Logged in");
    }
}

function signOut() {
    var user = auth.currentUser;
    if (user) {
        if (confirm(" Are you sure to SignOut?")) {
            auth.signOut().catch(e => alert(e.message));
            alert("Signed Out");
            window.location.replace("index.html");
        }
    } else {
        alert("No Active User to SignOut");
    }
}





function deleteUser() {
    var user = auth.currentUser;
    if (user) {
        if (confirm("Are you sure to Delete " + user.email + " Account")) {
            alert("User " + user.email + " Deleted");
            user.delete().then(function() {}).catch(e => alert(e.message));
        }
    } else {
        alert("No Active User to Delete");
    }
}

document.getElementById('clear').addEventListener('submit', clear);

function clear(e) {
    e.preventDefault();
    alert("Page Cleared");
    document.getElementById('clear').reset();
}
