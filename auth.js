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
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  // Register handler
  document.getElementById('registerForm').onsubmit = async function(e) {
    e.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      alert('Registration successful!');
      document.getElementById('registerForm').reset();
      document.getElementById('login-tab').click(); // Switch to login tab
    } catch (error) {
      alert("Registration error: " + error.message);
    }
  };

  // Login handler
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

  // Forgot Password handler
  document.getElementById('forgotPasswordBtn').onclick = async function() {
    const email = prompt('Please enter your email address for password reset:');
    if (email) {
      try {
        await auth.sendPasswordResetEmail(email);
        alert('Password reset email sent! Please check your inbox.');
      } catch (error) {
        alert('Error sending reset email: ' + error.message);
      }
    }
  };

  // Change Password handler
  document.getElementById('changePasswordForm').onsubmit = async function(e) {
    e.preventDefault();
    const user = auth.currentUser;
    const newPassword = document.getElementById('newPassword').value;
    if (user) {
      try {
        await user.updatePassword(newPassword);
        alert('Password changed successfully!');
        document.getElementById('changePasswordForm').reset();
      } catch (error) {
        alert('Error changing password: ' + error.message);
      }
    } else {
      alert('No user is logged in.');
    }
  };

  // Logout handler
  document.getElementById('logoutBtn').onclick = function() {
    auth.signOut();
    alert('Logged out!');
  };

  // Auth state UI updates
  auth.onAuthStateChanged(function(user) {
    const authSection = document.getElementById('authSection');
    const authStatus = document.getElementById('authStatus');
    const userEmail = document.getElementById('userEmail');
    const logoutBtn = document.getElementById('logoutBtn');
    const changePasswordSection = document.getElementById('changePasswordSection');
    if (user) {
      authSection.style.display = 'block';
      authStatus.textContent = 'Welcome, you are logged in.';
      userEmail.textContent = user.email;
      logoutBtn.style.display = 'inline-block';
      changePasswordSection.style.display = 'block';
    } else {
      authSection.style.display = 'block';
      authStatus.textContent = 'Please login or register to continue.';
      userEmail.textContent = '';
      logoutBtn.style.display = 'none';
      changePasswordSection.style.display = 'none';
    }
  });
});
