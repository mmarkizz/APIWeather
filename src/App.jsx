//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'


function App() {
  //const [count, setCount] = useState(0)

  return (
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
        <script src='script.js'></script>
    </div>
    </>
  )
}

export default App
