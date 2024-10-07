import { useState } from 'react';
import './App.css';
import axios from "axios";


const App=()=> {
  const [city, setCity] = useState('')
  const [weather, setWeather]=useState(null)

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6535a10f77e9bc00571f5dee3d65d630`)
      setWeather(response.data)
    } catch(error){
      if (error.response && error.response.status === 404) {
        alert(`Город "${city}" не найден.`);
      } else {
        alert(`Произошла ошибка: ${error.message}`);
      }
    }
  };

 return(
  <div>
    <h1 className=' top-0 left-0 transform -translate-y-1/2 relative'>Получаем погоду через API</h1>
      <form onSubmit={handleSubmit}>
        <input className='form-control'
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter a city"
        />
        <button type="submit">Get Weather</button>
      </form>

      {weather && (
        <div className='bg-lime-700 p-6 rounded-lg shadow-md mt-8'>
          <h2>{weather.name}</h2>
          <hr/>
          <p>Temperature: {weather.main.temp-273}°C</p>
          <hr/>
          <p>Description: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
 )
}

export default App
