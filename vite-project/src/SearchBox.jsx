import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [err, setErr] = useState("");

  const getWeather = async (city) => {
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const API_KEY = import.meta.env.VITE_API_KEY;

      const response = await fetch(`${API_URL}${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) throw new Error("City not found");

      const data = await response.json();

      const result = {
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

      return result;
    } catch {
      setErr("City not found! Please try again.");
      return null;
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newInfo = await getWeather(city);
    if (newInfo) {
      updateInfo(newInfo);
      setErr("");
    }
    setCity("");
  };

  return (
    <div className="SearchBox">
      <h3>Search for a city</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />
        <br />
        <Button variant="contained" type="submit" style={{ marginTop: "10px" }}>
          Search
        </Button>
      </form>
      {err && <p style={{ color: "red" }}>{err}</p>}
    </div>
  );
}
