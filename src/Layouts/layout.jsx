// Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import NavScrollExample from "../components/navbar";
import Footer from "../components/footer";
// import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <div className="">
      <NavScrollExample />
      </div>
      <main style={{ marginTop: "4rem", padding: "1rem" }}>
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Layout;
