import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RouterContent from "./components/RouterContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex h-[100vh] ">
      <div className="w-full ">
        {/* Navbar */}
        <div className="w-full fixed bg-white">
          <Navbar />
          {/* sub Navbar */}
          <div className=" hidden lg:flex justify-center ">
            <Sidebar />
          </div>
        </div>
        {/* Content */}
        <div className="">
          <RouterContent />
        </div>
        {/* Footer */}
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
