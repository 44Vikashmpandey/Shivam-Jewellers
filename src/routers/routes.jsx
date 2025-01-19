import { Route, Routes } from "react-router-dom"
// import AppPaths from "./path"
// import PageNotFound from "../component/pageNotFound"
// import TestRouting from "./path"
// import AppPaths from "./path"
// import PageNotFound from "../component/pageNotFound"

import Contactus from "../pages/contactus"
import Home from "../pages/home"
import AllJewelleryList from "../pages/Jewellery"
import Layout from "../Layouts/layout"
// import NavScrollExample from "../components/navbar"

const AppPaths = [
    {
        path : '/',
        component: <Layout/>
    },
    {
      path : '/home',
      component: <Home/>
  },
    {
        path: '/contactus',
        component : <Contactus/>
    },
    {
      path: '/:name/Products',
      component : <AllJewelleryList/>
    }

    // {
    //     path : '/admin/:id/:name',
    //     component: <Amdin />
    // },
    // {
    //     path : '/home',
    //     component: <Home />
    // },
    // {
    //     path : '/about',
    //     component: <About />
    // },
    // {
    //     path : '/dashboard',
    //     component: <DashBoard />
    // },
    // {
    //     path : '/page-not-found',
    //     component: <PageNotFound />
    // }
]


const AppRouting = () => {
    const paths  = AppPaths
    return (
        <>
        <Routes>
        {/* <Route path="/" element={<Home />}/>
        <Route path="/admin" element={<Amdin />}/>
        <Route path="/home" element={ <Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/dashboard" element={<DashBoard />}/> */}
        {/* <Route element={<NavScrollExample/>}/> */}
        {/* <NavScrollExample/> */}
        {paths.map((data, index) => {
            return (
              
                <Route exact  path={data.path} element={data.component} key={index} />
            )
        })}
        {/* <Route path="*" element={<PageNotFound />} /> */}
        {/* <Route path="users" element={<Users />}>
          <Route path="me" element={<OwnUserProfile />} />
          <Route path=":id" element={<UserProfile />} />
        </Route> */}
      </Routes>
        </>
    )
}

export default AppRouting