import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [err, setErr] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const getWeather = async (city) => {
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const API_KEY = import.meta.env.VITE_API_KEY;

      const response = await fetch(`${API_URL}${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) throw new Error("City not found");

      const data = await response.json();

      return {
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
    } catch {
      setErr("City not found! Please try again.");
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newInfo = await getWeather(city);

    if (newInfo) {
      updateInfo(newInfo);
      setErr("");
    }

    setCity("");
  };

  return (
    <Box className="searchWrapper">
      <Paper elevation={4} className="searchCard">
        <h2 className="searchTitle">🔍 Search Weather</h2>

        <form onSubmit={handleSubmit} className="searchForm">
          <TextField
            size="small"
            fullWidth
            label="Enter City"
            value={city}
            onChange={handleChange}
            required
          />

          {/* ✅ FIX IS HERE */}
          <Button
            type="submit"   // 🔥 THIS WAS MISSING
            variant="contained"
            size="small"
            fullWidth
            startIcon={<SearchIcon />}
            sx={{ mt: 1 }}
          >
            Search
          </Button>
        </form>

        {err && <p className="errorText">{err}</p>}
      </Paper>
    </Box>
  );
}