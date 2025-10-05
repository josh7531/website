// 🔥 Your Firebase Config (replace with yours)
const firebaseConfig = {
  apiKey: "AIzaSyCaLdt-kJ5eMDQAEhk0c2_sAvB3Lcu28a8",
  authDomain: "ats-friendly-e0edf.firebaseapp.com",
  projectId: "ats-friendly-e0edf",
  storageBucket: "ats-friendly-e0edf.firebasestorage.app",
  messagingSenderId: "237104021981",
  appId: "1:237104021981:web:66566105366fa0670d7634"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

 auth.signInWithEmailAndPassword(email, password)
  .then(userCredential => {
    const user = userCredential.user;

    if (user.email === "godsonjitn@gmail.com") {
      window.location.href = "admin.html"; 
    } else {
      window.location.href = 'Users/Dashboard.html'; 
    }
  })
  .catch(error => {
    if (error.code === "auth/user-not-found") {
      document.getElementById("message").innerText = "❌ User not registered";
    } else if (error.code === "auth/wrong-password") {
      document.getElementById("message").innerText = "❌ Wrong password";
    } else if (error.code === "auth/invalid-email") {
      document.getElementById("message").innerText = "❌ Invalid email format";
    } else if (error.code === "auth/invalid-credential" || error.message.includes("INVALID_LOGIN_CREDENTIALS")) {
      // Catch the generic REST error
      document.getElementById("message").innerText = "❌ Email or password is wrong";
    } else {
      document.getElementById("message").innerText = "❌ " + error.message;
    }
  });

}
