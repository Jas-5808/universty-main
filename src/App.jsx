import "./App.css";
import Header from "./components/Header";
import Aside from "./components/Aside";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-col h-screen font-sans">
        <Header toggleSidebar={toggleSidebar} />
        <div className="flex flex-1 relative">
          <Aside isExpanded={isSidebarExpanded} />
          <main
            className={`flex-1 transition-colors ${
              isSidebarExpanded ? "bg-opacity-50" : ""
            }`}
          >
            <Outlet />
          </main>
          <div
            className={`overlay absolute inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 ${
              isSidebarExpanded ? "opacity-100" : "hidden"
            }`}
            onClick={toggleSidebar} 
          />
        </div>
      </div>
    </>
  );
}

export default App;
