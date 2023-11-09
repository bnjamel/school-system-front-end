import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RouterContent from "./components/RouterContent";
import Footer from "./components/Footer";
import {useLocation} from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="flex h-[100vh] ">
      <div className="w-full ">
        {/* Navbar */}
        <div className="w-full fixed bg-white z-[100]">
          <Navbar location={location}/>
          {/* sub Navbar */}
          <div className=" hidden lg:flex justify-center ">
            <Sidebar location={location}/>
          </div>
        </div>
        {/* Content */}
        <div className="pb-[4rem]">
          <RouterContent />
        </div>
        {/* Footer */}
        <div className="pb-2 max-w-[1200px] mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
