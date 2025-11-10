import { useState, useEffect } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    feelsLike: 0,
    temp: 0,
    tempMin: 0,
    tempMax: 0,
    humidity: 0,
    pressure: 0,
    windSpeed: 0,
    weatherType: "Clear",
    city: "Ranchi",
    country: "IN",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  // Load Ranchi weather on startup
  useEffect(() => {
    async function fetchDefault() {
      try {
        const API_URL = import.meta.env.VITE_API_URL;
        const API_KEY = import.meta.env.VITE_API_KEY;
        const response = await fetch(`${API_URL}Ranchi&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        const defaultInfo = {
          temp: data.main.temp,
          tempMin: data.main.temp_min,
          tempMax: data.main.temp_max,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          feelsLike: data.main.feels_like,
          weatherType: data.weather[0].main,
          city: data.name,
          windSpeed: data.wind.speed,
          country: data.sys.country,
        };

        setWeatherInfo(defaultInfo);
      } catch (err) {
        console.error("Default weather load failed:", err);
      }
    }

    fetchDefault();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>🌦️ Weather App</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
