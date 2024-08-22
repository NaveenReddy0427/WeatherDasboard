const Forecast = ({ forecast, units }) => {
    if (!forecast) return null;
  
    const dailyForecast = forecast.list.filter(item =>
      item.dt_txt.includes('12:00:00')
    );
  
    const temperatureUnit = units === 'metric' ? '°C' : '°F';
  
    return (
      <div className="forecast">
        {dailyForecast.map((item) => {
          const { main, weather, dt_txt } = item;
          const { temp } = main;
          const { description, icon } = weather[0];
          const date = new Date(dt_txt).toLocaleDateString();
  
          return (
            <div key={dt_txt} className="forecast-card">
              <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={description} />
              <div>
                <h2>{date}</h2>
                <p>{temp} {temperatureUnit}</p>
                <p>{description.charAt(0).toUpperCase() + description.slice(1)}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default Forecast;