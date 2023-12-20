import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-con'>
    <Header/>
    <Home/>
    </div>
  )
}

export default App
