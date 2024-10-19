import { useState } from "react";
import Default from "./components/default";
import Navbar from "./components/Navbar";
import OrderList from "./components/order/OrderList";
import MenuBar from "./components/Sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [componentToShow, setComponentToShow] = useState<string>('Default');

  const renderComponent = () => {
    switch (componentToShow) {
      case 'OrderList':
        return <OrderList />;
      default:
        return <Default />;
    }
  };

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
        {renderComponent()}
      </div>
      
      <MenuBar 
        isOpen={isSidebarOpen} 
        toggleMenu={() => setIsSidebarOpen(!isSidebarOpen)} 
        setComponentToShow={setComponentToShow}
      />
    </div>
  );
}

export default App;
