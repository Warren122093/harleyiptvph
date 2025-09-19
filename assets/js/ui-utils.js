/**
 * UI Utilities Module
 * Handles UI interactions, overlays, clock, and common utilities
 */

/**
 * Initialize and update the clock
 */
function initClock() {
  const clockElements = document.querySelectorAll('.cool-clock');
  
  function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
      hour12: true,
      hour: 'numeric',
      minute: '2-digit'
    });
    
    clockElements.forEach(clock => {
      if (clock) clock.textContent = timeString;
    });
  }
  
  // Update immediately and then every second
  updateClock();
  setInterval(updateClock, 1000);
}

/**
 * Show overlay
 */
function showOverlay(overlayId) {
  const overlay = document.getElementById(overlayId);
  if (overlay) {
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }
}

/**
 * Close overlay
 */
function closeOverlay(overlayId) {
  const overlay = document.getElementById(overlayId);
  if (overlay) {
    overlay.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
  }
}

/**
 * Setup overlay event listeners
 */
function setupOverlays() {
  // About button listeners
  document.getElementById('aboutBtn')?.addEventListener('click', () => {
    showOverlay('aboutOverlay');
  });
  
  document.getElementById('aboutDrawerBtn')?.addEventListener('click', () => {
    showOverlay('aboutOverlay');
    // Close drawer if on mobile
    const drawer = document.getElementById('navDrawer');
    if (drawer && drawer.classList.contains('show')) {
      const offcanvas = bootstrap.Offcanvas.getInstance(drawer);
      if (offcanvas) offcanvas.hide();
    }
  });

  // Contact button listeners  
  document.getElementById('contactBtn')?.addEventListener('click', () => {
    showOverlay('contactOverlay');
  });
  
  document.getElementById('contactDrawerBtn')?.addEventListener('click', () => {
    showOverlay('contactOverlay');
    // Close drawer if on mobile
    const drawer = document.getElementById('navDrawer');
    if (drawer && drawer.classList.contains('show')) {
      const offcanvas = bootstrap.Offcanvas.getInstance(drawer);
      if (offcanvas) offcanvas.hide();
    }
  });

  // Close overlay when clicking outside content
  document.querySelectorAll('.custom-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeOverlay(overlay.id);
      }
    });
  });

  // ESC key to close overlays
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.custom-overlay').forEach(overlay => {
        if (overlay.style.display === 'flex') {
          closeOverlay(overlay.id);
        }
      });
    }
  });
}

/**
 * Logout functionality
 */
function logout() {
  if (typeof firebase !== 'undefined' && firebase.auth) {
    firebase.auth().signOut().then(() => {
      window.location.href = 'index.html';
    }).catch((error) => {
      console.error('Logout error:', error);
      alert('Error logging out. Please try again.');
    });
  } else {
    // Fallback if Firebase not available
    window.location.href = 'index.html';
  }
}

/**
 * Setup logout button listeners
 */
function setupLogoutButtons() {
  document.querySelectorAll('[onclick="logout()"]').forEach(btn => {
    btn.removeAttribute('onclick');
    btn.addEventListener('click', logout);
  });
  
  // Also handle any logout links
  document.querySelectorAll('a[href="#"]').forEach(link => {
    if (link.textContent.includes('Logout')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        logout();
      });
    }
  });
}

/**
 * Setup responsive navigation
 */
function setupNavigation() {
  // Handle mobile menu toggle
  const mobileToggle = document.querySelector('.nav-hamburger');
  const drawer = document.getElementById('navDrawer');
  
  if (mobileToggle && drawer) {
    // Bootstrap handles the toggle, but we can add custom behavior here if needed
  }

  // Handle desktop sidebar toggle if any
  const desktopSidebar = document.querySelector('.desktop-sidebar');
  if (desktopSidebar) {
    // Add any desktop-specific navigation logic
  }
}

/**
 * Smooth scrolling for anchor links
 */
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Setup accessibility improvements
 */
function setupAccessibility() {
  // Add proper ARIA labels where missing
  const hamburgerBtn = document.querySelector('.nav-hamburger');
  if (hamburgerBtn && !hamburgerBtn.getAttribute('aria-label')) {
    hamburgerBtn.setAttribute('aria-label', 'Toggle navigation menu');
  }

  // Add role attributes where helpful
  const channelLists = document.querySelectorAll('.channel-list-scroll');
  channelLists.forEach(list => {
    if (!list.getAttribute('role')) {
      list.setAttribute('role', 'listbox');
      list.setAttribute('aria-label', 'Available channels');
    }
  });

  // Improve form accessibility
  const formInputs = document.querySelectorAll('input[placeholder]');
  formInputs.forEach(input => {
    if (!input.getAttribute('aria-label') && !input.previousElementSibling?.tagName === 'LABEL') {
      input.setAttribute('aria-label', input.placeholder);
    }
  });
}

/**
 * Show server cards (for admin page)
 */
function showServerCards() {
  const serverCardsContainer = document.getElementById('serverCards');
  if (!serverCardsContainer) return;
  
  // This would typically load server data from Firebase
  // For now, show a placeholder message
  serverCardsContainer.innerHTML = `
    <div class="alert alert-info" role="alert">
      <i class="bi bi-info-circle"></i>
      Server management functionality will be loaded here.
    </div>
  `;
}

/**
 * Initialize all UI components
 */
function initUI() {
  try {
    initClock();
    setupOverlays();
    setupLogoutButtons();
    setupNavigation();
    setupSmoothScrolling();
    setupAccessibility();
    
    // Initialize tooltips if Bootstrap is available
    if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });
    }
    
  } catch (error) {
    console.error('Error initializing UI:', error);
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initUI);
} else {
  initUI();
}

// Export functions for global access
window.showOverlay = showOverlay;
window.closeOverlay = closeOverlay;
window.logout = logout;
window.showServerCards = showServerCards;