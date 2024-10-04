import { useState } from 'react';
import './App.css';
import axios from "axios";


const App=()=> {
  const [city, setCity] = useState('')
  const [weather, setWeather]=useState(null)

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=34a13cba4834afab01a9379794cc87e6`)
      setWeather(response.data)
    } catch(error){
      console.error(error);
    }
  };

  /*return (
    <>
      <div className="App">
        <h1>Получаем погоду через API</h1>
        <div className='col col-lg-12 text-center bg-lime-400'>
        </div>
        
        <div className='pricing-table row'>
          <input className='form-control' type="text" id="name" placeholder="Введите название города" required></input>
          <button className='button-primary' type='submit'>Go</button>
          <div className="bg-lime-400">
            <p className='text-red-500'>Penza</p>

            <hr/>
            <p className='price'>10&deg;</p>
            <p className='disclaimer'>Clouds</p>
            <hr/>

            <ul className='features'>
              <li>Feature 1</li>
            </ul>

          </div>
        </div>
      
    </div>
    </>
  )*/
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
