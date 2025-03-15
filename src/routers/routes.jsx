import { Route, Routes } from "react-router-dom"
import React, { Suspense } from "react"
const Layout = React.lazy(() => import("../Layouts/layout"));
const Home = React.lazy(() => import("../pages/home/"));
const AllJewelleryList = React.lazy(() => import("../pages/Jewellery"));
const Contactus = React.lazy(() => import("../pages/contactus"));

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

    
]


const AppRouting = () => {
    const paths  = AppPaths
    return (
        <>
        <Suspense fallback={<div>Loading....</div>}>

        <Routes>
        {paths.map((data, index) => {
            return (
              
                <Route exact  path={data.path} element={data.component} key={index} />
            )
        })}
      </Routes>

        </Suspense>
        </>
    )
}

export default AppRouting