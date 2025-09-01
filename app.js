const channels = {
  test_clearkey: {
    name: "Test Clearkey Channel",
    url: "https://bitmovin-a.akamaihd.net/content/sintel/sintel.mpd", // Public DASH test stream
    keys: {
      // Example Clearkey (from Bitmovin test vectors)
      "1ae8ccd0e0e94d5a1c0e5a7c0a8d5f1a": "68e8f8f8a8e8e8e8e8e8e8e8e8e8e8e8"
    }
  },
  test_widevine: {
    name: "Test Widevine Channel",
    url: "https://storage.googleapis.com/shaka-demo-assets/angel-one-widevine/dash.mpd",
    license: {
      type: "com.widevine.alpha",
      url: "https://cwip-shaka-proxy.appspot.com/no_auth"
    }
  },
  // ... your other channels ...
};

const selectMobile = document.getElementById('channelSelect');
const selectDesktop = document.getElementById('channelSelectDesktop');
const video = document.getElementById('video');

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

let player = null;

// Load channel helper
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

  const drmConfig = {};

  if (channel.keys) {
    drmConfig.clearKeys = channel.keys;
  }

  if (channel.license && channel.license.type && channel.license.url) {
    drmConfig.servers = {
      [channel.license.type]: channel.license.url
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

// Load default channel (GMA PINOY TV) on page load
window.addEventListener('DOMContentLoaded', () => {
  const defaultChannelKey = 'test_widevine'; // Use test_widevine for testing
  selectMobile.value = defaultChannelKey;
  selectDesktop.value = defaultChannelKey;
  loadChannel(defaultChannelKey);
});
