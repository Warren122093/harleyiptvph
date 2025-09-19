/**
 * Authentication Module
 * Handles user authentication, login, signup, and password reset
 */

let auth = null;
let db = null;

/**
 * Initialize Firebase Auth
 */
function initFirebaseAuth() {
  const firebaseConfig = {
    apiKey: "AIzaSyBVK8D6gGdExTzC1fHWWE9qJOuKCKj8V8Y",
    authDomain: "harley-iptv-ph.firebaseapp.com",
    projectId: "harley-iptv-ph", 
    storageBucket: "harley-iptv-ph.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef123456",
    measurementId: "G-ABCD123456"
  };

  const app = firebase.initializeApp(firebaseConfig);
  auth = firebase.auth();
  db = firebase.firestore();

  return { app, auth, db };
}

/**
 * Show message to user
 */
function showMessage(text, isError = false) {
  const messageEl = document.getElementById('message');
  if (messageEl) {
    messageEl.textContent = text;
    messageEl.style.color = isError ? 'red' : 'green';
  }
}

/**
 * Switch between forms
 */
function setupFormSwitching() {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const forgotForm = document.getElementById('forgotForm');

  // Show signup form
  document.getElementById('showSignup')?.addEventListener('click', () => {
    loginForm?.classList.add('hidden');
    signupForm?.classList.remove('hidden');
    forgotForm?.classList.add('hidden');
    showMessage('');
  });

  // Show login from signup
  document.getElementById('showLoginFromSignup')?.addEventListener('click', () => {
    signupForm?.classList.add('hidden');
    loginForm?.classList.remove('hidden');
    showMessage('');
  });

  // Show forgot password form
  document.getElementById('showForgot')?.addEventListener('click', () => {
    loginForm?.classList.add('hidden');
    forgotForm?.classList.remove('hidden');
    signupForm?.classList.add('hidden');
    showMessage('');
  });

  // Show login from forgot
  document.getElementById('showLoginFromForgot')?.addEventListener('click', () => {
    forgotForm?.classList.add('hidden');
    loginForm?.classList.remove('hidden');
    showMessage('');
  });
}

/**
 * Login with email
 */
async function loginWithEmail(email, password) {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    showMessage('Login successful! Redirecting...', false);
    setTimeout(() => {
      window.location.href = 'index2.html';
    }, 1000);
  } catch (error) {
    showMessage('Login failed: ' + error.message, true);
  }
}

/**
 * Handle login (email or username)
 */
async function handleLogin() {
  const userOrEmail = document.getElementById('loginUserOrEmail')?.value.trim();
  const password = document.getElementById('loginPassword')?.value;
  
  showMessage('');

  if (!userOrEmail || !password) {
    showMessage('Please fill in all fields.', true);
    return;
  }

  // Check if input is email or username
  if (userOrEmail.includes('@')) {
    // It's an email
    await loginWithEmail(userOrEmail, password);
  } else {
    // It's a username - look up email
    try {
      const usersRef = db.collection('users');
      const q = usersRef.where('username', '==', userOrEmail);
      const querySnapshot = await q.get();
      
      if (querySnapshot.empty) {
        showMessage('No user found with that username.', true);
        return;
      }
      
      const userDoc = querySnapshot.docs[0];
      const email = userDoc.data().email;
      
      if (!email) {
        showMessage('No email found for that username.', true);
        return;
      }
      
      await loginWithEmail(email, password);
    } catch (error) {
      showMessage('Login failed: ' + error.message, true);
    }
  }
}

/**
 * Handle signup
 */
async function handleSignup() {
  const username = document.getElementById('signupUsername')?.value.trim();
  const email = document.getElementById('signupEmail')?.value;
  const password = document.getElementById('signupPassword')?.value;
  
  showMessage('');

  if (!username) {
    showMessage('Username is required.', true);
    return;
  }

  if (!email || !password) {
    showMessage('Please fill in all fields.', true);
    return;
  }

  if (password.length < 6) {
    showMessage('Password must be at least 6 characters.', true);
    return;
  }

  try {
    // Check if username already exists
    const usersRef = db.collection('users');
    const q = usersRef.where('username', '==', username);
    const querySnapshot = await q.get();
    
    if (!querySnapshot.empty) {
      showMessage('Username already taken.', true);
      return;
    }

    // Create user account
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Store user data in Firestore
    await db.collection('users').doc(user.uid).set({
      username: username,
      email: email,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      role: 'user'
    });

    showMessage('Account created successfully! Redirecting...', false);
    setTimeout(() => {
      window.location.href = 'index2.html';
    }, 1000);

  } catch (error) {
    showMessage('Signup failed: ' + error.message, true);
  }
}

/**
 * Handle forgot password
 */
async function handleForgotPassword() {
  const email = document.getElementById('forgotEmail')?.value.trim();
  
  showMessage('');

  if (!email) {
    showMessage('Please enter your email.', true);
    return;
  }

  try {
    await auth.sendPasswordResetEmail(email);
    showMessage('Password reset email sent! Check your inbox.', false);
  } catch (error) {
    showMessage('Error: ' + error.message, true);
  }
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
  // Login button
  document.getElementById('loginBtn')?.addEventListener('click', handleLogin);

  // Signup button  
  document.getElementById('signupBtn')?.addEventListener('click', handleSignup);

  // Forgot password button
  document.getElementById('forgotBtn')?.addEventListener('click', handleForgotPassword);

  // Enter key listeners
  document.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const activeForm = document.querySelector('div:not(.hidden)');
      
      if (activeForm?.id === 'loginForm') {
        handleLogin();
      } else if (activeForm?.id === 'signupForm') {
        handleSignup();
      } else if (activeForm?.id === 'forgotForm') {
        handleForgotPassword();
      }
    }
  });
}

/**
 * Initialize authentication
 */
function initAuth() {
  try {
    initFirebaseAuth();
    setupFormSwitching();
    setupEventListeners();
    
    // Check if user is already logged in
    auth.onAuthStateChanged((user) => {
      if (user && window.location.pathname.includes('index.html')) {
        // User is logged in and on login page, redirect to main app
        window.location.href = 'index2.html';
      }
    });
    
  } catch (error) {
    console.error('Error initializing auth:', error);
    showMessage('Error initializing authentication system.', true);
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAuth);
} else {
  initAuth();
}

// Export functions for global access
window.initAuth = initAuth;
window.handleLogin = handleLogin;
window.handleSignup = handleSignup;
window.handleForgotPassword = handleForgotPassword;