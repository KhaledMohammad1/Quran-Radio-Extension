// offscreen.js - Handles actual audio playback

const audio = document.getElementById('quranAudio');

// Listen for messages from background
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.target !== 'offscreen') return;

  switch (message.action) {
    case 'play':
      playStation(message.url)
        .then(() => sendResponse({ success: true }))
        .catch((err) => sendResponse({ success: false, error: err.message }));
      return true;

    case 'pause':
      audio.pause();
      sendResponse({ success: true });
      return true;

    case 'setVolume':
      audio.volume = message.volume;
      sendResponse({ success: true });
      return true;

    default:
      sendResponse({ success: false, error: 'Unknown action' });
      return true;
  }
});

async function playStation(url) {
  if (audio.src !== url) {
    audio.src = url;
    audio.load();
  }
  try {
    await audio.play();
  } catch (err) {
    console.error('Audio play error:', err);
    throw err;
  }
}

// Handle audio errors gracefully
audio.addEventListener('error', (e) => {
  console.error('Audio stream error:', e);
});

audio.addEventListener('stalled', () => {
  console.warn('Audio stream stalled, attempting reload...');
  const currentSrc = audio.src;
  setTimeout(() => {
    if (audio.paused === false) {
      audio.src = currentSrc;
      audio.load();
      audio.play().catch(console.error);
    }
  }, 3000);
});