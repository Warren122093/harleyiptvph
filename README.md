# Harley IPTV

Harley IPTV is a responsive web application providing Pinoy and international IPTV channels via a modern, user-friendly interface. It features authentication, channel selection, and live streaming, and is built to work seamlessly across all devices.

---

## Features

- **User Authentication** (Login, Signup, Password Reset) powered by Firebase Auth
- **Channel Selection** with live streaming (DASH & HLS)
- **Responsive Design** (Mobile, Tablet, Desktop)
- **Modern UI** with professional icons (Bootstrap Icons)
- **About & Contact Overlays**
- **Live Clock**
- **Logout functionality**

---

## Tech Stack

| Technology      | Version       | Usage                                     |
|-----------------|--------------|-------------------------------------------|
| HTML5           | Latest       | Structure                                 |
| CSS3            | Latest       | Styling, Responsive Design                |
| JavaScript (ES6)| Latest       | UI Logic, Player, Auth                    |
| [Bootstrap](https://getbootstrap.com/) | 5.3.3 | Layout, Responsiveness, Offcanvas Navbar |
| [Bootstrap Icons](https://icons.getbootstrap.com/) | 1.11.3 | UI Icons |
| [Firebase](https://firebase.google.com/) | JS SDK 10.12.5 | Auth (Login, Signup, Reset)                |
| [Shaka Player](https://github.com/shaka-project/shaka-player) | 4.3.5 | DASH Streaming                             |
| [hls.js](https://github.com/video-dev/hls.js/) | Latest | HLS Streaming                               |

---

## Setup & Installation

1. **Clone the repository**
    ```sh
    git clone https://github.com/<your-org-or-user>/<your-repo>.git
    cd <your-repo>
    ```

2. **Open `index.html` in your browser**  
   No build step required. All dependencies are loaded via CDN.

3. **Configure Firebase**  
   Update your Firebase config in `index.html` if needed.

---

## Usage

- **Login or Sign Up** to access the IPTV service.
- **Select a Channel** from the sidebar or mobile drawer.
- **Watch Live TV** in the responsive video player.
- **Logout** available in the sidebar/mobile drawer.

---

## File Overview

- `index.html` — Authentication page (Login, Signup, Forgot Password)
- `index2.html` — Main IPTV player and channel selection
- `style.css` — Custom styles, responsive design
- `app.js` — Channel logic, player integration

---

## License

© 2025 Harley IPTV. All rights reserved.

---

## Contact

- Telegram: [@harleyiptv](https://t.me/harleyiptv)
