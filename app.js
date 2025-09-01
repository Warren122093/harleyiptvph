// This example focuses on Widevine channels only.
// Make sure you have Shaka Player loaded and your video element is <video id="video"></video>

const channels = {
  "ALLTV": {
    name: "ALLTV",
    url: "http://143.44.136.110:6610/001/2/ch00000090990000001179/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    drm: {
      "com.widevine.alpha": {
        serverURL: "http://143.44.136.74:9443/widevine/?deviceId=02:00:00:00:00:00"
      }
    }
  },
  "DWIZ_News_TV": {
    name: "DWIZ News TV",
    url: "http://143.44.136.110:6610/001/2/ch00000090990000001109/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    drm: {
      "com.widevine.alpha": {
        serverURL: "http://143.44.136.74:9443/widevine/?deviceId=02:00:00:00:00:00"
      }
    }
  },
  "ANC": {
    name: "ANC",
    url: "http://143.44.136.110:6610/001/2/ch00000090990000001274/manifest.mpd?virtualDomain=001.live_hls.zte.com",
    drm: {
      "com.widevine.alpha": {
        serverURL: "http://143.44.136.74:9443/widevine/?deviceId=02:00:00:00:00:00"
      }
    }
  },
  // ... Add more Widevine channels in this format ...
};

// Select elements
const selectMobile = document.getElementById('channelSelect');
const selectDesktop = document.getElementById('channelSelectDesktop');
const video = document.getElementById('video');

// Helper to populate channels in selects
function populateChannels(select) {
  select.innerHTML = '';
  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = '-- Choose a Channel --';
  select.appendChild(defaultOption);
  for (const key in channels) {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = channels[key].name;
    select.appendChild(option);
  }
}

populateChannels(selectMobile);
populateChannels(selectDesktop);

let player = null;

// Load channel helper for Widevine
async function loadChannel(channelKey) {
  const channel = channels[channelKey];
  if (!channel) return;

  if (player) {
    await player.destroy();
  }

  shaka.polyfill.installAll();
  player = new shaka.Player(video);

  player.addEventListener('error', e => {
    console.error('Error code', e.detail.code, 'object', e.detail);
  });

  // DRM config for Widevine
  let drmConfig = {};
  if (channel.drm && channel.drm["com.widevine.alpha"] && channel.drm["com.widevine.alpha"].serverURL) {
    drmConfig.servers = {
      "com.widevine.alpha": channel.drm["com.widevine.alpha"].serverURL
    };
  }

  player.configure({ drm: drmConfig });

  try {
    await player.load(channel.url);
    video.play();
    document.querySelector('.player-wrapper').scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  } catch (error) {
    console.error("Failed to load channel:", error);
  }
}

// Sync and load channel on change
function onChannelChange(e) {
  const selectedKey = e.target.value;
  selectMobile.value = selectedKey;
  selectDesktop.value = selectedKey;
  if (selectedKey) {
    loadChannel(selectedKey);

    // Close mobile nav drawer if open
    const navDrawer = document.getElementById('navDrawer');
    if (window.innerWidth < 992 && navDrawer && navDrawer.classList.contains('show')) {
      const offcanvas = bootstrap.Offcanvas.getInstance(navDrawer);
      if (offcanvas) offcanvas.hide();
    }
  }
}

selectMobile.addEventListener('change', onChannelChange);
selectDesktop.addEventListener('change', onChannelChange);

// Load default channel on page load
window.addEventListener('DOMContentLoaded', () => {
  const keys = Object.keys(channels);
  if (keys.length) {
    const defaultChannelKey = keys[0];
    selectMobile.value = defaultChannelKey;
    selectDesktop.value = defaultChannelKey;
    loadChannel(defaultChannelKey);
  }
});
