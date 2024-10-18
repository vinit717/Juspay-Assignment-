import Default from "./components/default";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <div>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isNotificationOpen={isNotificationOpen}
        setIsNotificationOpen={setIsNotificationOpen}
      />
      
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? "ml-[212px]" : "ml-0"
        } ${isNotificationOpen ? "mr-[280px]" : "mr-0"}`}
      >
        <Default />
      </div>
    </div>
  );
}

export default App;
