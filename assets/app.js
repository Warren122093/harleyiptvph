// --- Group definitions ---
const channelGroups = {
  "TFC": [
    "pbb_ce_live_tfc_","tfc_asia","tfc_europe","tfc_canada","cinemo_tfc","cinemaone_tfc","teleradyo_tfc_","anc_hd_tfc_","myx_tfc"
  ],
  "GMA": [
    "gma_pinoy_tv","gma_pinoy_tv_tfc_","gma_life_tv","gma_news_tv"
  ],
  "Sports": [
    "one_sports_cig_","one_sports_plus","uaap_varsity","pba_rush_hd","nba_tv_ph_cig_","nba_tv_ph_24_7","premier_sports_cig_","premier_sports_2_cig_","spotv_hd_cig_","spotv_2_hd_cig_"
  ],
  "News": [
    "anc_hd_tfc_","teleradyo_tfc_","cnn_international_cig_","bbc_news_cig_","channel_news_asia_cig_","bloomberg","abc_australia_cig_","france24_cig_","rptv_cig_"
  ],
  "General": [
    "a2z_cig_","ibc_cig_","ptv4_cig_","knowledge_channels","knowledge_channels_cig_","deped_tv","tvup","media_pilipinas_tv"
  ],
  "Entertainment": [
    "cinemaone_tfc","cinemo_tfc","myx_philippines","rock_action","rock_entertaiment","lotus_macau_cig_","sari_sari","buko_tv","tvn_premium_hd"
  ],
  "Cartoon": [
    "cartoon_network"
  ],
  "All Channels": [] // Will be filled automatically
};

// This will hold the channels loaded from Firestore
let channels = {};

// Mobile+Desktop support
const groupDropdowns = [document.getElementById('groupDropdown'), document.getElementById('groupDropdownDesktop')].filter(Boolean);
const channelSearches = [document.getElementById('channelSearch'), document.getElementById('channelSearchDesktop')].filter(Boolean);
const channelLists = [document.getElementById('channelList'), document.getElementById('channelListDesktop')].filter(Boolean);
const video = document.getElementById('video');

// --- FIREBASE LOADING LOGIC --- //
async function loadChannelsFromFirebase() {
  // Firebase SDKs must be included in the HTML as <script type="module"> before this script
  // Example import (should be in your HTML):
  // import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  // import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

  // Firebase config
  const firebaseConfig = {
    apiKey: "AIzaSyAOD_WjTx_QV4NmdWOA1qn1iw2Bfhck8do",
    authDomain: "harley1-dc7c4.firebaseapp.com",
    projectId: "harley1-dc7c4",
    storageBucket: "harley1-dc7c4.firebasestorage.app",
    messagingSenderId: "364436057378",
    appId: "1:364436057378:web:4e6a59f39f132e0dc1897b",
    measurementId: "G-XJDDS9HC2S"
  };

  // Only initialize if not already done
  if (!window._firebaseInitialized) {
    window.firebaseApp = firebase.initializeApp(firebaseConfig);
    window._firebaseInitialized = true;
  }
  const db = firebase.firestore ? firebase.firestore() : window.firebaseApp.firestore();

  const snapshot = await db.collection('free server').get();
  channels = {};
  snapshot.forEach(doc => {
    // Use the document ID as the key
    channels[doc.id] = doc.data();
  });

  // Fill "All Channels" group dynamically
  channelGroups["All Channels"] = Object.keys(channels);

  // Now that channels are loaded, initialize UI:
  populateGroupDropdowns();
  renderChannelLists("All Channels");
  // Optionally select and play a default channel:
  const defaultKey = channelGroups["All Channels"][0];
  if (defaultKey) {
    channelLists.forEach(list => {
      const defaultItem = list.querySelector(`.channel-item[data-key="${defaultKey}"]`);
      if (defaultItem) defaultItem.classList.add('active');
    });
    loadChannel(defaultKey);
  }
}

// Populate group dropdowns
function populateGroupDropdowns() {
  groupDropdowns.forEach(dropdown => {
    dropdown.innerHTML = '';
    for (const group in channelGroups) {
      const opt = document.createElement('option');
      opt.value = group;
      opt.textContent = group;
      dropdown.appendChild(opt);
    }
    dropdown.value = "All Channels";
  });
}

// Render ListView Items (filtered)
function renderChannelLists(group, filter = "") {
  channelLists.forEach(list => {
    list.innerHTML = '';
    const keys = channelGroups[group] || [];
    for (const key of keys) {
      const channel = channels[key];
      if (!channel) continue;
      if (!filter || (channel.name && channel.name.toLowerCase().includes(filter.toLowerCase()))) {
        const item = document.createElement('li');
        item.className = 'list-group-item channel-item';
        item.style.cursor = 'pointer';
        item.dataset.key = key;
        item.textContent = channel.name || key;
        list.appendChild(item);
      }
    }
  });
}

// Channel playback logic
let player = null;
let hls = null;
function getStreamType(url) {
  if (url.endsWith('.mpd')) return 'dash';
  if (url.endsWith('.m3u8')) return 'hls';
  return null;
}
async function loadChannel(channelKey) {
  const channel = channels[channelKey];
  if (!channel) return;
  if (player) { await player.destroy(); player = null; }
  if (hls) { hls.destroy(); hls = null; }
  const type = getStreamType(channel.url);
  if (type === 'dash') {
    shaka.polyfill.installAll();
    player = new shaka.Player(video);
    player.addEventListener('error', e => { console.error('Error code', e.detail.code, 'object', e.detail); });
    const drmConfig = {};
    if (channel.keys) drmConfig.clearKeys = channel.keys;
    if (channel.license && channel.license.type && channel.license.url) {
      drmConfig.servers = { [channel.license.type]: channel.license.url };
    }
    player.configure({ drm: drmConfig });
    try {
      await player.load(channel.url);
      video.play();
      document.querySelector('.player-wrapper').scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch (error) {
      console.error("Failed to load channel:", error);
    }
  } else if (type === 'hls') {
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = channel.url;
      video.play();
      document.querySelector('.player-wrapper').scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (window.Hls) {
      hls = new Hls();
      hls.loadSource(channel.url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.play();
        document.querySelector('.player-wrapper').scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
      hls.on(Hls.Events.ERROR, function(event, data) {
        console.error('HLS.js error:', data);
      });
    } else {
      video.src = channel.url;
      video.play();
      document.querySelector('.player-wrapper').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  } else {
    console.error("Unknown stream type:", channel.url);
  }
}

// Sync group dropdowns and search inputs
groupDropdowns.forEach((dropdown, i) => {
  dropdown.addEventListener('change', () => {
    groupDropdowns.forEach(d => d.value = dropdown.value);
    channelSearches.forEach(s => s.value = "");
    renderChannelLists(dropdown.value, "");
  });
});
channelSearches.forEach((search, i) => {
  search.addEventListener('input', () => {
    renderChannelLists(groupDropdowns[0].value, search.value.trim());
  });
});

// Handle channel click (sync highlight on both lists)
channelLists.forEach(list => {
  list.addEventListener('click', (e) => {
    if (e.target.classList.contains('channel-item')) {
      channelLists.forEach(l => l.querySelectorAll('.active').forEach(el => el.classList.remove('active')));
      channelLists.forEach(l => {
        const match = l.querySelector(`.channel-item[data-key="${e.target.dataset.key}"]`);
        if (match) match.classList.add('active');
      });
      loadChannel(e.target.dataset.key);
      // Optionally close nav drawer on mobile
      const navDrawer = document.getElementById('navDrawer');
      if (window.innerWidth < 992 && navDrawer && navDrawer.classList.contains('show')) {
        const offcanvas = bootstrap.Offcanvas.getInstance(navDrawer);
        if (offcanvas) offcanvas.hide();
      }
    }
  });
});

// Initial load
window.addEventListener('DOMContentLoaded', () => {
  // Instead of loading static channels, fetch from Firebase:
  loadChannelsFromFirebase();
});

// Close navDrawer on any menu link click, including Home (mobile only)
document.querySelectorAll('#navDrawer .nav-link').forEach(link => {
  link.addEventListener('click', function() {
    const navDrawer = document.getElementById('navDrawer');
    if (window.innerWidth < 992 && navDrawer && navDrawer.classList.contains('show')) {
      const offcanvas = bootstrap.Offcanvas.getInstance(navDrawer);
      if (offcanvas) offcanvas.hide();
    }
  });
});