/**
 * Main Application Entry Point
 * Clean, professional implementation replacing obfuscated code
 * 
 * This file coordinates all application modules and handles initialization
 */

// Application state
const App = {
  initialized: false,
  modules: {
    auth: null,
    channels: null,
    ui: null
  }
};

/**
 * Initialize application
 */
function initApp() {
  if (App.initialized) return;
  
  try {
    console.log('🚀 Initializing Harley IPTV Application...');
    
    // Set initialization flag
    App.initialized = true;
    
    // Initialize based on current page
    const currentPage = getCurrentPage();
    
    switch (currentPage) {
      case 'login':
        initLoginPage();
        break;
      case 'main':
        initMainPage();
        break;
      case 'admin':
        initAdminPage();
        break;
      case 'account':
        initAccountPage();
        break;
      default:
        console.warn('Unknown page type:', currentPage);
    }
    
    console.log('✅ Application initialized successfully');
    
  } catch (error) {
    console.error('❌ Error initializing application:', error);
  }
}

/**
 * Determine current page type based on URL
 */
function getCurrentPage() {
  const path = window.location.pathname;
  
  if (path.includes('index.html') || path === '/') {
    return 'login';
  } else if (path.includes('index2.html')) {
    return 'main';
  } else if (path.includes('index3.html')) {
    return 'admin';
  } else if (path.includes('index4.html')) {
    return 'account';
  }
  
  return 'unknown';
}

/**
 * Initialize login page
 */
function initLoginPage() {
  console.log('📱 Initializing login page...');
  // Auth module handles login page initialization
}

/**
 * Initialize main application page
 */
function initMainPage() {
  console.log('📺 Initializing main IPTV page...');
  
  // Initialize all modules for main app
  // Channel management is handled by channel-manager.js
  // UI utilities are handled by ui-utils.js
}

/**
 * Initialize admin page
 */
function initAdminPage() {
  console.log('⚙️ Initializing admin page...');
  
  // Admin-specific initialization
  initAdminFeatures();
}

/**
 * Initialize account page  
 */
function initAccountPage() {
  console.log('👤 Initializing account page...');
  
  // Account-specific initialization
  initAccountFeatures();
}

/**
 * Initialize admin features
 */
function initAdminFeatures() {
  // Password protection for admin area
  const unlockSection = document.getElementById('unlockSection');
  const mainContent = document.getElementById('mainContent');
  const passwordInput = document.getElementById('adminPassword');
  const unlockBtn = document.getElementById('unlockBtn');
  
  if (unlockBtn && passwordInput) {
    unlockBtn.addEventListener('click', () => {
      const password = passwordInput.value.trim();
      
      // Simple password check (in production, this would be more secure)
      if (password === 'admin2025' || password === 'harleyiptv') {
        if (unlockSection) unlockSection.style.display = 'none';
        if (mainContent) mainContent.style.display = 'block';
        
        // Initialize admin tools
        initAdminTools();
      } else {
        alert('Incorrect password. Please try again.');
        passwordInput.value = '';
        passwordInput.focus();
      }
    });
    
    // Enter key support
    passwordInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        unlockBtn.click();
      }
    });
  }
}

/**
 * Initialize admin tools
 */
function initAdminTools() {
  // Channel injection tool
  const injectBtn = document.getElementById('injectBtn');
  const bulkInjectBtn = document.getElementById('bulkInjectBtn');
  const fixJsonBtn = document.getElementById('fixJsonBtn');
  
  if (injectBtn) {
    injectBtn.addEventListener('click', handleChannelInjection);
  }
  
  if (bulkInjectBtn) {
    bulkInjectBtn.addEventListener('click', handleBulkInjection);
  }
  
  if (fixJsonBtn) {
    fixJsonBtn.addEventListener('click', handleJsonFix);
  }
  
  // Setup copy/clear button functionality
  setupCopyCleanButtons();
}

/**
 * Handle single channel injection
 */
function handleChannelInjection() {
  const channelData = document.getElementById('channelInput')?.value.trim();
  const messageEl = document.getElementById('injectMsg');
  
  if (!channelData) {
    showAdminMessage(messageEl, 'Please enter channel data.', true);
    return;
  }
  
  try {
    const data = JSON.parse(channelData);
    
    if (!data.name || !data.url) {
      showAdminMessage(messageEl, 'Channel must have name and url fields.', true);
      return;
    }
    
    // Here you would inject to Firebase
    showAdminMessage(messageEl, 'Channel injection simulation - would save to database.', false);
    
  } catch (error) {
    showAdminMessage(messageEl, 'Invalid JSON format: ' + error.message, true);
  }
}

/**
 * Handle bulk channel injection
 */
function handleBulkInjection() {
  const bulkData = document.getElementById('bulkChannelInput')?.value.trim();
  const messageEl = document.getElementById('bulkInjectMsg');
  
  if (!bulkData) {
    showAdminMessage(messageEl, 'Please enter bulk channel data.', true);
    return;
  }
  
  try {
    const data = JSON.parse(bulkData);
    
    if (!Array.isArray(data)) {
      showAdminMessage(messageEl, 'Bulk data must be an array of channels.', true);
      return;
    }
    
    // Validate each channel
    for (let i = 0; i < data.length; i++) {
      const channel = data[i];
      if (!channel.name || !channel.url) {
        showAdminMessage(messageEl, `Channel at index ${i} missing name or url.`, true);
        return;
      }
    }
    
    showAdminMessage(messageEl, `Bulk injection simulation - would save ${data.length} channels.`, false);
    
  } catch (error) {
    showAdminMessage(messageEl, 'Invalid JSON format: ' + error.message, true);
  }
}

/**
 * Handle JSON formatting tool
 */
function handleJsonFix() {
  const input = document.getElementById('fixJsonIn')?.value.trim();
  const output = document.getElementById('fixedJsonOut');
  const messageEl = document.getElementById('fixJsonMsg');
  
  if (!input) {
    showAdminMessage(messageEl, 'Please enter JSON to format.', true);
    return;
  }
  
  try {
    const parsed = JSON.parse(input);
    const formatted = JSON.stringify(parsed, null, 2);
    
    if (output) {
      output.value = formatted;
    }
    
    showAdminMessage(messageEl, 'JSON formatted successfully.', false);
    
  } catch (error) {
    showAdminMessage(messageEl, 'Invalid JSON: ' + error.message, true);
  }
}

/**
 * Setup copy and clear button functionality
 */
function setupCopyCleanButtons() {
  // Copy buttons
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-copy');
      const target = document.getElementById(targetId);
      
      if (target && target.value) {
        navigator.clipboard.writeText(target.value).then(() => {
          // Temporarily change button text
          const originalText = btn.innerHTML;
          btn.innerHTML = '<i class="bi bi-check"></i>';
          setTimeout(() => {
            btn.innerHTML = originalText;
          }, 1000);
        });
      }
    });
  });
  
  // Clear buttons
  document.querySelectorAll('[data-clear]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-clear');
      const target = document.getElementById(targetId);
      
      if (target) {
        target.value = '';
        target.focus();
      }
    });
  });
}

/**
 * Show admin message
 */
function showAdminMessage(element, message, isError = false) {
  if (element) {
    element.textContent = message;
    element.className = isError ? 'small text-danger' : 'small text-success';
  }
}

/**
 * Initialize account features
 */
function initAccountFeatures() {
  // Account page would handle user profile display
  // This would integrate with Firebase Auth to show user details
  
  loadAccountInfo();
}

/**
 * Load account information
 */
function loadAccountInfo() {
  if (typeof firebase !== 'undefined' && firebase.auth) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        displayAccountInfo(user);
      } else {
        // Redirect to login if not authenticated
        window.location.href = 'index.html';
      }
    });
  }
}

/**
 * Display account information
 */
function displayAccountInfo(user) {
  const usernameEl = document.getElementById('usernameValue');
  const emailEl = document.getElementById('emailValue');
  const createdEl = document.getElementById('createdValue');
  
  if (usernameEl) usernameEl.textContent = user.displayName || 'User';
  if (emailEl) emailEl.textContent = user.email || 'N/A';
  if (createdEl && user.metadata?.creationTime) {
    createdEl.textContent = new Date(user.metadata.creationTime).toLocaleDateString();
  }
}

/**
 * Global error handler
 */
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

/**
 * Global unhandled promise rejection handler
 */
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Export for global access
window.App = App;
window.initApp = initApp;