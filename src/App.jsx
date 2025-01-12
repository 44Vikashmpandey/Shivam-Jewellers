import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import AppRouting from './routers/routes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <BrowserRouter>
      <NavBar/>
      {/* <AppRouting/> */}
      
      {/* <Footer/> */}
      </BrowserRouter>
    </>
  )
}

export default App
