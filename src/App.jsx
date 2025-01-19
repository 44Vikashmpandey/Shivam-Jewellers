import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import AppRouting from './routers/routes'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Layout from './Layouts/layout'
import Contactus from './pages/contactus'
import AllJewelleryList from './pages/Jewellery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* <BrowserRouter> */}
        {/* <div>
          <div className=''>
            <NavBar />


          </div>
          <div>
            <AppRouting />
          </div>
          <div className='mt-2'>
            <Layout/>
          <Footer />
          </div>
        </div> */}

{/* <AppRouting /> */}
       
      {/* </BrowserRouter> */}
      <BrowserRouter>
      <Routes>
        {/* All routes wrapped in Layout */}
        <Route path="/" element={<Layout />}>
          <Route  index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="contactus" element={<Contactus />} />
          {/* path: '/:name/Products',
      component : <AllJewelleryList/> */}
      <Route path=':name/Products' element={<AllJewelleryList/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
