import { useState, useEffect } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  useEffect(() => {
    async function fetchDefault() {
      try {
        const API_URL = import.meta.env.VITE_API_URL;
        const API_KEY = import.meta.env.VITE_API_KEY;

        const res = await fetch(`${API_URL}Ranchi&appid=${API_KEY}&units=metric`);
        const data = await res.json();

        setWeatherInfo({
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
        });
      } catch (err) {
        console.log(err);
      }
    }

    fetchDefault();
  }, []);

return (
  <div className="app">
    <div className="dashboard">
      <h2 className="title">🌦️ Weather App</h2>

      <SearchBox updateInfo={updateInfo} />

      {weatherInfo && <InfoBox info={weatherInfo} />}
    </div>
  </div>
);
}