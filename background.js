// background.js - Service Worker for Quran Radio Extension

const OFFSCREEN_DOCUMENT_PATH = 'offscreen.html';

let isOffscreenCreated = false;

// Ensure the offscreen document exists
async function ensureOffscreenDocument() {
  const existingContexts = await chrome.runtime.getContexts({
    contextTypes: ['OFFSCREEN_DOCUMENT'],
    documentUrls: [chrome.runtime.getURL(OFFSCREEN_DOCUMENT_PATH)]
  });

  if (existingContexts.length > 0) {
    isOffscreenCreated = true;
    return;
  }

  if (isOffscreenCreated) return;

  await chrome.offscreen.createDocument({
    url: OFFSCREEN_DOCUMENT_PATH,
    reasons: ['AUDIO_PLAYBACK'],
    justification: 'تشغيل بث القرآن الكريم في الخلفية'
  });

  isOffscreenCreated = true;
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.target !== 'background') return;

  handleMessage(message).then(sendResponse).catch((err) => {
    console.error('Background error:', err);
    sendResponse({ success: false, error: err.message });
  });

  return true; // Keep channel open for async response
});

async function handleMessage(message) {
  switch (message.action) {
    case 'play':
      await ensureOffscreenDocument();
      await sendToOffscreen({ action: 'play', url: message.url, stationIndex: message.stationIndex });
      await chrome.storage.local.set({
        isPlaying: true,
        currentStation: message.stationIndex,
        currentUrl: message.url
      });
      return { success: true };

    case 'pause':
      await ensureOffscreenDocument();
      await sendToOffscreen({ action: 'pause' });
      await chrome.storage.local.set({ isPlaying: false });
      return { success: true };

    case 'setVolume':
      await ensureOffscreenDocument();
      await sendToOffscreen({ action: 'setVolume', volume: message.volume });
      await chrome.storage.local.set({ volume: message.volume });
      return { success: true };

    case 'getState':
      const state = await chrome.storage.local.get(['isPlaying', 'currentStation', 'volume', 'currentUrl']);
      return { success: true, state };

    default:
      return { success: false, error: 'Unknown action' };
  }
}

async function sendToOffscreen(message) {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage({ ...message, target: 'offscreen' }, (response) => {
      if (chrome.runtime.lastError) {
        reject(new Error(chrome.runtime.lastError.message));
      } else {
        resolve(response);
      }
    });
  });
}

// On install, set default state
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    isPlaying: false,
    currentStation: 0,
    volume: 0.8,
    currentUrl: ''
  });
});
