const Weather = ({ weather, units }) => {
    if (!weather) return null;
  
    const { main, weather: weatherDetails, wind } = weather;
    const { temp, temp_min, temp_max, humidity } = main;
    const { description, icon } = weatherDetails[0];
    const windSpeed = wind.speed;
  
    const temperatureUnit = units === 'metric' ? '°C' : '°F';
    const windUnit = units === 'metric' ? 'm/s' : 'mph';
  
    return (
      <div className="weather-card">
        <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={description} />
        <div>
          <h2>{temp} {temperatureUnit}</h2>
          <p>{description.charAt(0).toUpperCase() + description.slice(1)}</p>
          <p>Min Temp: {temp_min} {temperatureUnit}</p>
          <p>Max Temp: {temp_max} {temperatureUnit}</p>
          <p>Humidity: {humidity}%</p>
          <p>Wind: {windSpeed} {windUnit}</p>
        </div>
      </div>
    );
  };
  
  export default Weather;