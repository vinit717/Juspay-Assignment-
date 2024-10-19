import { useState } from "react";
import Default from "./components/default";
import Navbar from "./components/Navbar";
import OrderList from "./components/order/OrderList";


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [showClockComponent, setShowClockComponent] = useState(false);

  return (
    <div>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isNotificationOpen={isNotificationOpen}
        setIsNotificationOpen={setIsNotificationOpen}
        setShowClockComponent={setShowClockComponent}
      />
      
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? "ml-[212px]" : "ml-0"
        } ${isNotificationOpen ? "mr-[280px]" : "mr-0"}`}
      >
        {showClockComponent ? <OrderList /> : <Default />} 
      </div>
    </div>
  );
}

export default App;
