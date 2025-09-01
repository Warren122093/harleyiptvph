// Add Firebase SDKs for Auth
// <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"></script>
// <script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"></script>

// Your Firebase config here
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  // ... rest of your config
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Registration handler
document.getElementById('registerForm').onsubmit = async function(e) {
  e.preventDefault();
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    alert('Registration successful! You can now log in.');
    document.getElementById('registerForm').reset();
  } catch (error) {
    alert(error.message);
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
    // Redirect or show logged-in UI
  } catch (error) {
    alert(error.message);
  }
};

// (Optional) Log out
document.getElementById('logoutBtn').onclick = function() {
  auth.signOut();
  alert('Logged out!');
};

// Show/hide UI based on auth state
auth.onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById('authStatus').textContent = `Logged in as ${user.email}`;
    document.getElementById('logoutBtn').style.display = 'inline-block';
  } else {
    document.getElementById('authStatus').textContent = 'Not logged in';
    document.getElementById('logoutBtn').style.display = 'none';
  }
});
