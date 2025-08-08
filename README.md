# 📺 Telegram Bot Mini Web App – Serial Episode Downloader

This is a full-featured, mobile-responsive mini web app integrated with a Telegram bot for watching and downloading episodes of the serial **"Pyaar Kii Yeh Ek Kahani – Season 1"**.

## 🌟 Features

- 🎬 10 Episodes with Google Drive streaming + download
- 🖼️ Beautiful UI with episode thumbnails and animations
- 📱 Mobile-responsive design
- 🔢 Real-time view/download count tracker
- 🔄 Pagination + Search + Filter options
- 📂 Admin upload panel (optional in full version)
- 🚀 Telegram Bot integration (optional extension)
- 📥 Progress bar in `download.html`
- 🏠 Home button for easy navigation

## 📁 Project Structure

telegram_web_app/
├── assets/
│   └── images/           # Thumbnails for each episode
├── css/
│   └── style.css         # Animated and responsive styles
├── js/
│   ├── episodes.js       # Handles rendering, pagination, search
│   └── download.js       # View/download count tracker
├── data/
│   └── episodes.json     # Episode data with titles, links, thumbnails
├── download.html         # Download page
├── index.html            # Main episode list page
├── server.js             # Node.js backend (optional)
├── telegram_bot.py       # Telegram bot that serves episodes
└── README.md             # This file


🚀 Features
✅ Dynamic episode loading from episodes.json
✅ 🎞️ Watch/Download buttons with Google Drive links
✅ 📈 View/Download counter tracking
✅ 📱 Mobile-friendly and animated UI
✅ 🔍 Search bar & 🎛️ Filter dropdown
✅ 🎬 Modal video player and stylish progress animation
✅ 🔁 Pagination (6 episodes per page)

)

🔧 How to Run Locally
1. Clone This Project
git clone https://github.com/yourusername/telegram_web_app.git
cd telegram_web_app

2. Open index.html directly in browser
Or serve it with a simple local server for full functionality:
npx serve .

3. (Optional) Start the Node.js backend
node server.js

4. (Optional) Run the Telegram Bot
Ensure you have Python 3 and install the required packages:

Copy and paste in terminal
pip install python-telegram-bot flask
python telegram_bot.py


🤖 Telegram Bot Commands
/start – Welcome message with episode list

/episodes – Sends inline web app to open in browser

Inline Button: “🎬 Open Episodes Web App” – opens the HTML frontend

🔗 Google Drive Episode Links
Episodes are securely hosted on Google Drive. Direct access is provided for both watching and downloading.

🔐 Download/View Tracking
Each time a user clicks a Download button:

An animated progress shows

Download counter updates in localStorage

Data is synced for each user

🛠️ Technologies Used
HTML5, CSS3 (with animation)

JavaScript (Vanilla)

JSON for data storage

Node.js & Express (optional backend)

Python Telegram Bot

🌐 Demo
🔗 Live Web App Demo – (Link if hosted online)

📸 Screenshots
Episode List	Mobile View	Download Page

📌 To-Do
 Add real-time DB sync for views/downloads

 Admin panel for uploading episodes

 Add categories/mood-based filtering

👨‍💻 Author
Made with ❤️ by mahakal
📅 Updated: August 2025
