// 🔥 Your Firebase Config (replace with your project’s keys)
const firebaseConfig = {
  apiKey: "AIzaSyCaLdt-kJ5eMDQAEhk0c2_sAvB3Lcu28a8",
  authDomain: "ats-friendly-e0edf.firebaseapp.com",
  projectId: "ats-friendly-e0edf",
  storageBucket: "ats-friendly-e0edf.firebasestorage.app",
  messagingSenderId: "237104021981",
  appId: "1:237104021981:web:66566105366fa0670d7634"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Signup function
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      document.getElementById("message").innerText = "✅ Account created successfully!";
      setTimeout(() => {
        window.location.href = "index.html"; // redirect to login
      }, 1500);
    })
    .catch(error => {
      if (error.code === "auth/email-already-in-use") {
        document.getElementById("message").innerText = "❌ Email is already registered";
      } else if (error.code === "auth/invalid-email") {
        document.getElementById("message").innerText = "❌ Invalid email format";
      } else if (error.code === "auth/weak-password") {
        document.getElementById("message").innerText = "❌ Password should be at least 6 characters";
      } else {
        document.getElementById("message").innerText = "❌ " + error.message;
      }
    });
}
