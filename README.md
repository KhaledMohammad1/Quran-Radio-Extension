# Quran Radio – Chrome Extension

Listen to Quran radio broadcasts and recitations while browsing, studying, or working.

## Overview

**Quran Radio** is a lightweight browser extension with an Arabic-first interface for listening to Quran recitations and radio streams. It supports a searchable listening experience, organized content sections, and convenient playback controls.

## Features

- Quran radio and recitation streams.
- Organized sections for browsing available content.
- Search to find a reciter or stream.
- Playback controls and volume adjustment.
- Arabic interface with a language switcher.
- Light and dark appearance options.
- Background audio playback using the extension's offscreen document.

## Compatibility

This extension uses **Manifest V3** and is intended for Chromium-based browsers that support unpacked extensions, such as:

- Google Chrome
- Microsoft Edge
- Other compatible Chromium-based browsers

## Installation

1. Download the latest extension ZIP from this repository.
2. Extract the ZIP file to a folder on your computer.
3. Open your browser's extensions page:
   - Chrome: `chrome://extensions`
   - Edge: `edge://extensions`
4. Enable **Developer mode**.
5. Select **Load unpacked**.
6. Choose the extracted extension folder (the folder containing `manifest.json`).
7. Pin **Quran Radio** from the Extensions menu for quick access.

## Updating

Download and extract the latest version, then open the extensions page and use **Reload** on the existing extension after selecting the updated folder if needed. Keep the extracted extension folder in a permanent location.

## Project structure

| File | Purpose |
|---|---|
| `manifest.json` | Extension metadata, permissions, and entry points |
| `background.js` | Background extension logic |
| `popup.html` | Popup interface |
| `popup.css` | Popup styling |
| `popup.js` | Interface behavior and playback controls |
| `offscreen.html` | Offscreen audio document |
| `offscreen.js` | Audio playback handling |
| `icon128.png` | Extension icon |

## Permissions

The extension declares these permissions:

- `storage` — save extension preferences locally.
- `offscreen` — support audio playback outside the popup window.

## Privacy

The extension's privacy information is available in [privacy.md](privacy.md).

واجهة الإضافة مخصصة للاستماع إلى إذاعة القرآن الكريم والتلاوات أثناء استخدام المتصفح أو المذاكرة. يمكنك تثبيتها باتباع خطوات التثبيت أعلاه، مع التأكد من اختيار المجلد الذي يحتوي على ملف `manifest.json`.
