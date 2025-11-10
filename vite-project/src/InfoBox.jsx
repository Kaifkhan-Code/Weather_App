import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import GrainIcon from "@mui/icons-material/Grain";
import CloudIcon from "@mui/icons-material/Cloud";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const IMAGES = {
    Clear: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    Clouds: "https://images.unsplash.com/photo-1526318472351-bc6c2c8b36b0?auto=format&fit=crop&w=800&q=60",
    Rain: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=60",
    Snow: "https://images.unsplash.com/photo-1600289031461-79bf89a47a3d?auto=format&fit=crop&w=800&q=60",
    Mist: "https://images.unsplash.com/photo-1526676037777-349f80e8c1a1?auto=format&fit=crop&w=800&q=60",
    Haze: "https://images.unsplash.com/photo-1473615695634-d284ec918736?auto=format&fit=crop&w=800&q=60",
    Thunderstorm: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
    Default: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  };

  const weatherImage = IMAGES[info.weatherType] || IMAGES.Default;

  const getIcon = () => {
    switch (info.weatherType) {
      case "Clear":
        return <WbSunnyIcon fontSize="large" color="warning" />;
      case "Clouds":
        return <CloudIcon fontSize="large" color="action" />;
      case "Rain":
        return <GrainIcon fontSize="large" color="primary" />;
      case "Snow":
        return <AcUnitIcon fontSize="large" color="info" />;
      case "Thunderstorm":
        return <ThunderstormIcon fontSize="large" color="secondary" />;
      default:
        return <WbSunnyIcon fontSize="large" />;
    }
  };

  return (
    <div className="InfoBox">
      <h2>
        Weather in {info.city}, {info.country} {getIcon()}
      </h2>
      <div className="card">
        <Card sx={{ maxWidth: 345, margin: "auto" }}>
          <CardMedia
            component="img"
            height="180"
            image={weatherImage}
            alt={info.weatherType}
            onError={(e) => (e.target.src = IMAGES.Default)}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.weatherType}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Temperature: {info.temp}°C (Min: {info.tempMin}°C, Max: {info.tempMax}°C)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Feels like {info.feelsLike}°C
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Humidity: {info.humidity}%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Pressure: {info.pressure} hPa
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Wind Speed: {info.windSpeed} m/s
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
