import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RouterContent from "./components/RouterContent";

function App() {
  return (
    <div className="flex h-[100vh] overflow-hidden">
      <div className="flex-[1] md:flex-[.85]">
        <Navbar />
        <RouterContent />
      </div>
      <div className="red bg-blue-500 hidden lg:flex md:flex-[.15]">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
