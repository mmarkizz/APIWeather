import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <div className='col col-lg-12 text-center'>
          <h1>Получаем погоду через API</h1>
        </div>
        
        <div className='pricing-table row'>
          <div className='package featured'>
            <p className='package name'>Penza</p>

            <hr>
            <p className='price'>10&deg;</p>
            <p className='disclaimer'>Clouds</p>
            </hr>

            <ul className='features'>
              <li>Feature 1</li>
            </ul>

            <button className='button-primary'>Go</button>

          </div>
        </div>
        <script src='script.js'></script>
    </div>
    </>
  )
}

export default App
