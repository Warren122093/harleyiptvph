import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAOD_WjTx_QV4NmdWOA1qn1iw2Bfhck8do",
  authDomain: "harley1-dc7c4.firebaseapp.com",
  projectId: "harley1-dc7c4",
  storageBucket: "harley1-dc7c4.appspot.com",
  messagingSenderId: "364436057378",
  appId: "1:364436057378:web:4e6a59f39f132e0dc1897b",
  measurementId: "G-XJDDS9HC2S"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Register
document.getElementById('registerForm').onsubmit = async function(e) {
  e.preventDefault();
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert('Registration successful! You can now log in.');
    document.getElementById('registerForm').reset();
  } catch (error) {
    alert("Registration error: " + error.message);
  }
};

// Login
document.getElementById('loginForm').onsubmit = async function(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert('Login successful!');
    document.getElementById('loginForm').reset();
    window.location.href = "index2.html";
  } catch (error) {
    alert("Login error: " + error.message);
  }
};

// Forgot Password
document.getElementById('forgotPasswordBtn').onclick = async function() {
  const email = prompt('Please enter your email address for password reset:');
  if (email) {
    try {
      await sendPasswordResetEmail(auth, email);
      alert('Password reset email sent! Please check your inbox.');
    } catch (error) {
      alert('Error sending reset email: ' + error.message);
    }
  }
};

// Logout
document.getElementById('logoutBtn').onclick = function() {
  signOut(auth);
  alert('Logged out!');
};

// Auth state UI updates
onAuthStateChanged(auth, function(user) {
  const authSection = document.getElementById('authSection');
  const authStatus = document.getElementById('authStatus');
  const userEmail = document.getElementById('userEmail');
  const logoutBtn = document.getElementById('logoutBtn');
  if (user) {
    authSection.style.display = 'none';
    authStatus.textContent = 'Welcome, you are logged in.';
    userEmail.textContent = user.email;
    logoutBtn.style.display = 'inline-block';
  } else {
    authSection.style.display = 'block';
    authStatus.textContent = 'Please login or register to continue.';
    userEmail.textContent = '';
    logoutBtn.style.display = 'none';
  }
});

// Overlay logic (unchanged)
window.openOverlay = function(overlayId) {
  document.getElementById(overlayId).classList.add('active');
  document.body.style.overflow = 'hidden';
}
window.closeOverlay = function(overlayId) {
  document.getElementById(overlayId).classList.remove('active');
  document.body.style.overflow = '';
}
document.getElementById('aboutOverlay').onclick = function(e) {
  if (e.target === this) closeOverlay('aboutOverlay');
};
document.getElementById('contactOverlay').onclick = function(e) {
  if (e.target === this) closeOverlay('contactOverlay');
};
