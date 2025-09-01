// Bitmovin Player integration for your channel list.
// You must have Bitmovin Player JS loaded on your page.
// See https://bitmovin.com/docs/player/getting-started for setup and license key.

// Example: <script src="https://cdn.bitmovin.com/player/web/8/bitmovinplayer.js"></script>
// And a <div id="player"></div> for the Bitmovin player.

const channels = {
  pbb_ce_live_tfc_: {
    name: "PBB CE LIVE (TFC)",
    url: "https://abslive.akamaized.net/dash/live/2112806/pbbmain/manifest.mpd",
    keys: {
      "8438e8495659425585a09749cd6bc39a": "9d92b12db092fe6bdf2207ef7a2a9e65"
    }
  },
  // ... (all your other channels as in your data)
};

const selectMobile = document.getElementById('channelSelect');
const selectDesktop = document.getElementById('channelSelectDesktop');

// Helper to populate a select element with channels
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

// Populate both selectors
populateChannels(selectMobile);
populateChannels(selectDesktop);

let playerInstance = null;

// Helper to convert clearkey object to Bitmovin format
function keysToBitmovin(keysObj) {
  // Bitmovin expects: { key: "KEY", keyId: "KEY_ID" }
  const arr = [];
  for (const keyId in keysObj) {
    arr.push({ key: keysObj[keyId], keyId });
  }
  return arr;
}

// Load channel with Bitmovin Player
function loadChannelBitmovin(channelKey) {
  const channel = channels[channelKey];
  if (!channel) return;

  if (playerInstance) {
    playerInstance.destroy();
    playerInstance = null;
  }

  // Bitmovin player config
  const conf = {
    key: 'YOUR_BITMOVIN_PLAYER_LICENSE_KEY', // <-- replace with your Bitmovin license key
    playback: {
      autoplay: true
    },
    source: {
      dash: channel.url,
      drm: {
        // Widevine/Clearkey config
        widevine: channel.license?.url ? { LA_URL: channel.license.url } : undefined,
        clearkey: channel.keys ? { key: keysToBitmovin(channel.keys) } : undefined
      }
    }
  };

  playerInstance = new bitmovin.player.Player(document.getElementById('player'), conf);
}

// Sync and load channel on change
function onChannelChange(e) {
  const selectedKey = e.target.value;
  selectMobile.value = selectedKey;
  selectDesktop.value = selectedKey;
  if (selectedKey) {
    loadChannelBitmovin(selectedKey);

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

// Load default channel (GMA PINOY TV) on page load
window.addEventListener('DOMContentLoaded', () => {
  const defaultChannelKey = 'gma_pinoy_tv';
  selectMobile.value = defaultChannelKey;
  selectDesktop.value = defaultChannelKey;
  loadChannelBitmovin(defaultChannelKey);
});
