# Harley IPTV

Harley IPTV is a responsive web application providing Pinoy and international IPTV channels via a modern, user-friendly interface. It enables seamless live streaming, authentication, and intuitive channel navigation for the best viewing experience.

---

## Features

- **User Authentication**
  - Login, Signup, and Password Reset via Firebase Auth
  - Secure user sessions and logout support

- **Channel Selection**
  - Browse and select from a curated list of Pinoy and international IPTV channels
  - Live streaming with support for both DASH and HLS formats
  - Channel switching without page reloads

- **Responsive Design**
  - Fully optimized for mobile, tablet, and desktop devices
  - Adaptive layouts using Bootstrap 5

- **Modern User Interface**
  - Clean, professional look with Bootstrap Icons
  - Offcanvas navigation for mobile devices
  - Intuitive controls for channel selection and playback

- **Live Streaming Player**
  - DASH playback powered by Shaka Player
  - HLS playback via hls.js
  - Seamless switching and robust error handling

- **About & Contact Overlays**
  - Modal overlays for app information and contacting support

- **Live Clock**
  - Real-time clock display in the interface

- **One-click Logout**
  - Fast and secure user sign out

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
    git clone https://github.com/Warren122093/harleyiptvph.git
    cd harleyiptvph
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
