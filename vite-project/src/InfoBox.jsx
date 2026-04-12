import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import GrainIcon from "@mui/icons-material/Grain";
import CloudIcon from "@mui/icons-material/Cloud";

import "./InfoBox.css";

export default function InfoBox({ info }) {
  
  if (!info) return null;

  const IMAGES = {
    Clear: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
    Clouds: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=800&q=60",
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
        return <WbSunnyIcon fontSize="small" color="warning" />;
      case "Clouds":
        return <CloudIcon fontSize="small" />;
      case "Rain":
        return <GrainIcon fontSize="small" color="primary" />;
      case "Snow":
        return <AcUnitIcon fontSize="small" />;
      case "Thunderstorm":
        return <ThunderstormIcon fontSize="small" />;
      default:
        return <WbSunnyIcon fontSize="small" />;
    }
  };

  return (
    <Box className="InfoBox">
      <Typography variant="h6" className="title">
        {info.city}, {info.country} {getIcon()}
      </Typography>

      <Card className="weatherCard">
        
        <CardMedia
          component="img"
          height="130"
          image={weatherImage}
          alt={info.weatherType}
          onError={(e) => (e.target.src = IMAGES.Default)}
        />

        <CardContent>
          <Typography variant="h6" className="weatherType">
            {info.weatherType}
          </Typography>

          <Typography variant="h4" className="temp">
            {info.temp}°C
          </Typography>

          <Grid container spacing={1}>
            <Grid item xs={6}>
              <div className="detailBox">
                <p>Feels</p>
                <h4>{info.feelsLike}°C</h4>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className="detailBox">
                <p>Humidity</p>
                <h4>{info.humidity}%</h4>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className="detailBox">
                <p>Pressure</p>
                <h4>{info.pressure} hPa</h4>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className="detailBox">
                <p>Wind</p>
                <h4>{info.windSpeed} m/s</h4>
              </div>
            </Grid>
          </Grid>

          <Typography variant="body2" className="minmax">
            Min: {info.tempMin}°C | Max: {info.tempMax}°C
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}