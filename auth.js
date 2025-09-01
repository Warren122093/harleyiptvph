document.addEventListener('DOMContentLoaded', function() {
  const firebaseConfig = {
    apiKey: "AIzaSyAOD_WjTx_QV4NmdWOA1qn1iw2Bfhck8do",
    authDomain: "harley1-dc7c4.firebaseapp.com",
    projectId: "harley1-dc7c4",
    storageBucket: "harley1-dc7c4.appspot.com",
    messagingSenderId: "364436057378",
    appId: "1:364436057378:web:4e6a59f39f132e0dc1897b",
    measurementId: "G-XJDDS9HC2S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  document.getElementById('registerForm').onsubmit = async function(e) {
    e.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      alert('Registration successful! You can now log in.');
      document.getElementById('registerForm').reset();
    } catch (error) {
      alert("Registration error: " + error.message);
    }
  };

  document.getElementById('loginForm').onsubmit = async function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      alert('Login successful!');
      document.getElementById('loginForm').reset();
      window.location.href = "index2.html";
    } catch (error) {
      alert("Login error: " + error.message);
    }
  };

  document.getElementById('logoutBtn').onclick = function() {
    auth.signOut();
    alert('Logged out!');
  };

  auth.onAuthStateChanged(function(user) {
    const watchBtn = document.getElementById('watchBtn');
    const authSection = document.getElementById('authSection');
    const authStatus = document.getElementById('authStatus');
    const userEmail = document.getElementById('userEmail');
    const logoutBtn = document.getElementById('logoutBtn');
    if (user) {
      watchBtn.classList.add('authenticated');
      authSection.style.display = 'none';
      authStatus.textContent = 'Welcome, you are logged in.';
      userEmail.textContent = user.email;
      logoutBtn.style.display = 'inline-block';
    } else {
      watchBtn.classList.remove('authenticated');
      authSection.style.display = 'block';
      authStatus.textContent = 'Please login or register to continue.';
      userEmail.textContent = '';
      logoutBtn.style.display = 'none';
    }
  });
});
