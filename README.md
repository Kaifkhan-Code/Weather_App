🌦️ Weather App

A sleek and responsive Weather Forecast Application built using React (Vite) and Material-UI, powered by the OpenWeather API.
It allows users to search for any city and view real-time weather conditions like temperature, humidity, pressure, wind speed, and more.

🚀 Live Demo

👉 View App on Vercel

(Add your deployment link once you host it — e.g., Vercel, Netlify, etc.)

🧠 Features

✅ Real-time weather data using OpenWeather API
✅ Beautiful Material-UI design
✅ Dynamic background images based on weather conditions
✅ Default city weather (Ranchi) loaded on startup
✅ Error handling for invalid city names
✅ Responsive UI optimized for all screen sizes

🛠️ Tech Stack
Frontend	Tools                 Libraries
⚛️ React (Vite)	           Project setup and fast build tool
🎨 Material-UI (MUI)	     For modern and responsive UI
🌍 OpenWeather API	       For live weather data
💅 CSS3	                   Styling custom components

📂 Project Structure

vite-project/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx
│   ├── App.css
│   ├── InfoBox.jsx
│   ├── InfoBox.css
│   ├── SearchBox.jsx
│   ├── SearchBox.css
│   ├── WeatherApp.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── vite.config.js
└── README.md

⚙️ Environment Variables

Create a .env file in the root directory and add your API credentials:
VITE_API_URL=https://api.openweathermap.org/data/2.5/weather?q=
VITE_API_KEY=your_openweather_api_key_here


⚠️ Important:
Never upload your .env file to GitHub.
Make sure .env is included in your .gitignore.


🧩 Installation & Setup

Follow these steps to run the project locally:
# 1️⃣ Clone the repository
git clone https://github.com/Kaifkhan-Code/Weather_App.git

# 2️⃣ Navigate into the project
cd Weather_App

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
npm run dev


Now open 👉 http://localhost:5173 in your browser.

📸 Screenshots


🔧 API Reference

Base URL:
https://api.openweathermap.org/data/2.5/weather

Example Request:
https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric


📘 Learning Highlights

~ Managing component state with useState and useEffect
~ Fetching APIs asynchronously with async/await
~ Error handling and input validation
~ Passing props between parent and child components
~ Material-UI integration and theming

💻 Future Improvements

🌍 Add location-based weather using Geolocation API
🕒 Display hourly and weekly forecasts
💡 Add dark/light theme toggle
📱 Enhance mobile UI and accessibility
🤝 Contributing

~ Contributions, issues, and feature requests are welcome!
~ Feel free to open a pull request or issue to suggest improvements.


🧑‍💻 Author

👤 Kaif Khan
💼 MERN Stack Developer
📧 your.email@example.com
🌐 GitHub – Kaifkhan-Code
