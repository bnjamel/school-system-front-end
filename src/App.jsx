import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="lg:flex lg:flex-row">
      <div className="lg:flex lg:flex-col lg:flex-[0.9] flex-1">
        <Navbar />
      </div>
      <div className="lg:flex-[0.1]">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
