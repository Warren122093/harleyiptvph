/**
 * Channel Management Module
 * Handles channel data, groups, and Firebase integration
 */

// Channel groups configuration
const channelGroups = {
  'TFC': [
    'TFC', 'ABS-CBN', 'GMA Network', 'TV5', 'One PH', 
    'Cinema One', 'Star Cinema', 'Kapamilya Channel', 'A2Z'
  ],
  'GMA': [
    'GMA 7', 'GTV', 'Heart of Asia', 'Hallypop'
  ],
  'Sports': [
    'Premier Sports', 'NBA TV', 'ESPN', 'Fox Sports', 'Cignal Sports', 
    'One Sports', 'TAP Sports', 'Blast TV', 'SPOTV', 'PBA Rush'
  ],
  'News': [
    'CNN Philippines', 'ANC', 'GMA News TV', 'One News', 
    'SMNI', 'NET 25', 'Teleradyo', 'CNN', 'BBC'
  ],
  'General': [
    'UNTV', 'IBC 13', '5Plus', 'Light TV', 'Knowledge Channel',
    'DWRR', 'DZRH TV', 'People\'s Television'
  ],
  'Entertainment': [
    'Jeepney TV', 'Kumu', 'PIE Channel', 'RPTV', 'MYX',
    'TAP TV', 'Myx Philippines', 'Rock Entertainment', 'WTN'
  ],
  'Cartoon': [
    'Cartoon Network'
  ],
  'All Channels': []
};

let channels = {};
let player = null;
let hls = null;

// DOM elements
const groupDropdowns = [
  document.getElementById('groupDropdown'), 
  document.getElementById('groupDropdownDesktop')
].filter(Boolean);

const channelSearches = [
  document.getElementById('channelSearch'), 
  document.getElementById('channelSearchDesktop')
].filter(Boolean);

const channelLists = [
  document.getElementById('channelList'), 
  document.getElementById('channelListDesktop')
].filter(Boolean);

const video = document.getElementById('video');

/**
 * Load channels from Firebase
 */
async function loadChannelsFromFirebase() {
  try {
    // Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyBVK8D6gGdExTzC1fHWWE9qJOuKCKj8V8Y",
      authDomain: "harley-iptv-ph.firebaseapp.com", 
      projectId: "harley-iptv-ph",
      storageBucket: "harley-iptv-ph.appspot.com",
      messagingSenderId: "123456789",
      appId: "1:123456789:web:abcdef123456",
      measurementId: "G-ABCD123456"
    };

    // Initialize Firebase if not already done
    if (!window.firebaseApp) {
      window.firebaseApp = firebase.initializeApp(firebaseConfig);
      window.firebaseInitialized = true;
    }

    const db = firebase.firestore ? firebase.firestore() : window.firebaseApp.firestore();
    const querySnapshot = await db.collection('channels').get();
    
    channels = {};
    querySnapshot.forEach(doc => {
      channels[doc.id] = doc.data();
    });

    // Populate all channels group
    channelGroups['All Channels'] = Object.keys(channels);
    
    populateGroupDropdowns();
    renderChannelLists('All Channels');

    // Auto-select first channel if available
    const firstChannel = channelGroups['All Channels'][0];
    if (firstChannel) {
      highlightSelectedChannel(firstChannel);
      loadChannel(firstChannel);
    }

  } catch (error) {
    console.error('Error loading channels from Firebase:', error);
  }
}

/**
 * Populate group dropdown menus
 */
function populateGroupDropdowns() {
  groupDropdowns.forEach(dropdown => {
    dropdown.innerHTML = '';
    
    for (const groupName in channelGroups) {
      const option = document.createElement('option');
      option.value = groupName;
      option.textContent = groupName;
      dropdown.appendChild(option);
    }
    
    dropdown.value = 'All Channels';
  });
}

/**
 * Render channel lists based on group and search filter
 */
function renderChannelLists(groupName, searchTerm = '') {
  channelLists.forEach(list => {
    list.innerHTML = '';
    
    const channelIds = channelGroups[groupName] || [];
    
    for (const channelId of channelIds) {
      const channel = channels[channelId];
      if (!channel) continue;
      
      // Filter by search term
      if (searchTerm && channel.name && 
          !channel.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        continue;
      }
      
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item list-group-item-action';
      listItem.style.cursor = 'pointer';
      listItem.dataset.channelId = channelId;
      listItem.textContent = channel.name || channelId;
      
      list.appendChild(listItem);
    }
  });
}

/**
 * Highlight selected channel in all lists
 */
function highlightSelectedChannel(channelId) {
  channelLists.forEach(list => {
    const items = list.querySelectorAll('.list-group-item');
    items.forEach(item => {
      item.classList.remove('active');
    });
    
    const selectedItem = list.querySelector(`[data-channel-id="${channelId}"]`);
    if (selectedItem) {
      selectedItem.classList.add('active');
    }
  });
}

/**
 * Determine stream type based on URL
 */
function getStreamType(url) {
  if (url.includes('.mpd')) return 'dash';
  if (url.includes('.m3u8')) return 'hls';
  return null;
}

/**
 * Load and play a channel
 */
async function loadChannel(channelId) {
  const channel = channels[channelId];
  if (!channel || !channel.url) {
    console.warn('Channel not found or has no URL:', channelId);
    return;
  }

  // Clean up existing player
  if (player) {
    await player.destroy();
    player = null;
  }
  
  if (hls) {
    hls.destroy();
    hls = null;
  }

  const streamType = getStreamType(channel.url);
  
  if (streamType === 'dash') {
    // DASH streaming with Shaka Player
    shaka.polyfill.installAll();
    player = new shaka.Player(video);
    
    player.addEventListener('error', (event) => {
      console.error('Shaka Player Error code', event.detail.code, 'object', event.detail);
    });

    // Configure DRM if needed
    const config = {};
    if (channel.drmKey) {
      config.drm = channel.drmKey;
    }
    
    if (channel.drm && channel.drm.keyId && channel.drm.key) {
      config.drm = {
        [channel.drm.keyId]: channel.drm.key
      };
    }
    
    player.configure({ drm: config });

    try {
      await player.load(channel.url);
      video.play();
      scrollToVideo();
    } catch (error) {
      console.error('Error loading DASH stream:', error);
    }
    
  } else if (streamType === 'hls') {
    // HLS streaming
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS support
      video.src = channel.url;
      video.play();
      scrollToVideo();
    } else if (window.Hls) {
      // Use hls.js
      hls = new Hls();
      hls.attachMedia(video);
      hls.loadSource(channel.url);
      
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
        scrollToVideo();
      });
      
      hls.on(Hls.Events.ERROR, (event, data) => {
        console.error('HLS Error:', data);
      });
    } else {
      // Fallback to direct source
      video.src = channel.url;
      video.play();
      scrollToVideo();
    }
  } else {
    console.warn('Unsupported stream type for:', channel.url);
  }
}

/**
 * Scroll to video player
 */
function scrollToVideo() {
  document.getElementById('video').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// Event listeners
groupDropdowns.forEach((dropdown, index) => {
  dropdown.addEventListener('change', () => {
    // Sync all dropdowns
    groupDropdowns.forEach(d => d.value = dropdown.value);
    
    // Clear search boxes
    channelSearches.forEach(s => s.value = '');
    
    renderChannelLists(dropdown.value, '');
  });
});

channelSearches.forEach((searchBox, index) => {
  searchBox.addEventListener('input', () => {
    renderChannelLists(groupDropdowns[0].value, searchBox.value.trim());
  });
});

channelLists.forEach(list => {
  list.addEventListener('click', (event) => {
    if (event.target.classList.contains('list-group-item')) {
      const channelId = event.target.dataset.channelId;
      
      if (channelId) {
        // Highlight selected channel
        highlightSelectedChannel(channelId);
        
        // Load channel
        loadChannel(channelId);
        
        // Close mobile drawer if open
        const drawer = document.getElementById('navDrawer');
        if (window.innerWidth < 992 && drawer && drawer.classList.contains('show')) {
          const offcanvas = bootstrap.Offcanvas.getInstance(drawer);
          if (offcanvas) offcanvas.hide();
        }
      }
    }
  });
});

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
  loadChannelsFromFirebase();
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    // Page became visible - could reload channels here if needed
  }
});

// Export functions for global access
window.loadChannelsFromFirebase = loadChannelsFromFirebase;
window.loadChannel = loadChannel;