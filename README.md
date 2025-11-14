# Per-Site List

**One offline to-do list per website.**  
No login. No tracking. No data leaves your browser.

[![Chrome](https://img.shields.io/badge/Chrome-Ready-blue?logo=google-chrome)](https://github.com/your-username/per-site-list/releases)
[![Firefox](https://img.shields.io/badge/Firefox-Under%20Review-orange?logo=firefox)](https://addons.mozilla.org/en-US/firefox/addon/per-site-list/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## Features

- **Separate list for every domain** (`github.com`, `youtube.com`, etc.)
- **100% local storage** using `chrome.storage.local` / `browser.storage.local`
- Add, check, delete items instantly
- Works on `http`, `https`, `localhost`, and `file://`
- **Zero data collection** – privacy-first design
- Lightweight: < 50 KB

---

## Screenshots

| Popup | Multiple Sites |
|------|----------------|
| ![Popup](screenshots/popup.png) | ![Multiple Sites](screenshots/multi-site.png) |

---

## Installation

### Chrome / Edge / Brave / Opera
1. Download the latest release:  
   [Per-Site-List-Chrome.zip](https://github.com/your-username/per-site-list/releases/latest/download/Per-Site-List-Chrome.zip)
2. Go to `chrome://extensions`
3. Enable **Developer mode**
4. Click **"Load unpacked"**
5. Select the extracted folder

### Firefox
**Coming soon!**  
Currently under review on [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/per-site-list/)

---

## How It Works

- Each domain gets its own key: `list_example.com`
- Data stored in `chrome.storage.local` (Chrome) or `browser.storage.local` (Firefox)
- No background scripts, no network calls
- Fully offline, even after restart

---

## Use Cases

- Save videos to watch later on YouTube
- Track tasks on project dashboards
- Keep shopping lists on Amazon
- Take notes on documentation sites

---

## Privacy

> **No data is collected, transmitted, or shared.**

- All lists stay in your browser
- No permissions beyond `storage` and `activeTab`
- No analytics, no telemetry, no ads

---

## Development

```bash
# Clone the repo
git clone https://github.com/your-username/per-site-list.git

# For Chrome: Load the folder via chrome://extensions
# For Firefox: Load via about:debugging
