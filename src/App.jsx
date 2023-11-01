import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RouterContent from "./components/RouterContent";

function App() {
  return (
    <div className="flex h-[100vh] overflow-hidden ">
      {/* Navbar */}
      <div className="w-full ">
        <Navbar />
        {/* Divider */}
        <div className="mt-1 p-[0.5px] bg-black"></div>
        {/* sub Navbar */}
        <div className=" hidden lg:flex justify-center">
          <Sidebar />
        </div>
        {/* Content */}
        <div className="flex justify-center">
          <RouterContent />
        </div>
      </div>
    </div>
  );
}

export default App;
