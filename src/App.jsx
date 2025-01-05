import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <NavBar/>&nbsp;&nbsp;
      <Home/>
      
      {' '} &nbsp;
      {' '} &nbsp;
      {' '} &nbsp;
      <Footer/>
    </>
  )
}

export default App
