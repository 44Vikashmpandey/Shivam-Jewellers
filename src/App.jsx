import React, { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, HashRouter, Route, Router, Routes } from 'react-router-dom'


function App() {
  const Layout = React.lazy(() => import("./Layouts/layout"));
  const Home = React.lazy(() => import("./pages/home/"));
  const AllJewelleryList = React.lazy(() => import("./pages/Jewellery"));
  const Contactus = React.lazy(() => import("./pages/contactus"));

  return (
    <>

      
      <HashRouter>
      <Suspense fallback={<div>Loading..</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route  index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="contactus" element={<Contactus />} />
      <Route path=':name/Products' element={<AllJewelleryList/>} />
        </Route>
      </Routes>
      </Suspense>
    </HashRouter>
    </>
  )
}

export default App
