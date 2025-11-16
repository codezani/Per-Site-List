# Per-Site List

**One offline to-do list per website.**  
No login. No tracking. No data leaves your browser.

[![Firefox Add-on](https://img.shields.io/amo/v/per-site-list?label=Firefox%20Add-on&color=orange&logo=firefox)](https://addons.mozilla.org/en-US/firefox/addon/per-site-list/)
[![Chrome Ready](https://img.shields.io/badge/Chrome-Ready-blue?logo=google-chrome)](https://github.com/your-username/per-site-list/releases/latest)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Downloads](https://img.shields.io/amo/d/per-site-list?label=Downloads)](https://addons.mozilla.org/en-US/firefox/addon/per-site-list/statistics/)

---

## 🚀 Live on Firefox Add-ons!

**Install with one click:**  
[Download from Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/per-site-list/)

---

## Features

- **Separate list for every domain** (`github.com`, `youtube.com`, etc.)
- **100% local storage** using `browser.storage.local`
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

### Firefox (Official)
[Install from Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/per-site-list/)

### Chrome / Edge / Brave / Opera
1. Download:  
   [Per-Site-List-Chrome.zip](https://github.com/your-username/per-site-list/releases/latest/download/Per-Site-List-Chrome.zip)
2. Go to `chrome://extensions`
3. Enable **Developer mode**
4. Click **"Load unpacked"**
5. Select the extracted folder

---

## How It Works

- Each domain gets its own key: `list_example.com`
- Data stored in `browser.storage.local`
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
- [Mozilla Privacy Review](https://addons.mozilla.org/en-US/firefox/addon/per-site-list/) – **"No data collected"**

---

## Development

```bash
# Clone the repo
git clone https://github.com/your-username/per-site-list.git

# For Firefox: Load via about:debugging
# For Chrome: Load via chrome://extensions
