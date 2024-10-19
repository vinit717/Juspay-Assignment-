import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import SidebarIcon from '../../assets/navbar/sidebarIcon.svg?react';
import BookmarkIcon from '../../assets/navbar/bookmarkIcon.svg?react';
import NotificationIcon from '../../assets/navbar/notification.svg?react';
import MoonIcon from '../../assets/navbar/moon.svg?react';
import SunIcon from '../../assets/navbar/sun.svg?react';
import ClockIcon from '../../assets/navbar/clock.svg?react';
import NotificationBar from '../Notifications';
import Search from './Search';

interface NavbarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  isNotificationOpen: boolean;
  setIsNotificationOpen: (open: boolean) => void;
}

const Navbar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  isNotificationOpen,
  setIsNotificationOpen,
}: NavbarProps) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleNotificationBar = () => setIsNotificationOpen(!isNotificationOpen);

  return (
    <div className="relative">
      <div
        className={`border-b border-black/10 dark:border-white/10 py-[22px] px-7 flex items-center justify-between transition-all ${
          isSidebarOpen ? 'ml-[212px]' : ''
        } ${isNotificationOpen ? 'mr-[280px]' : ''}`}
      >
        <div className="flex items-center gap-2">
          <button onClick={toggleSidebar} className="text-black dark:text-white cursor-pointer">
            <SidebarIcon />
          </button>
          <button className="text-black dark:text-white">
            <BookmarkIcon />
          </button>
          <div>
            <nav aria-label="breadcrumb" className="w-full py-1 px-2">
              <ol className="flex space-x-3">
                <li className="flex items-center">
                  <a href="" className="flex items-center text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white">
                    Dashboard
                  </a>
                </li>
                <li className="flex items-center space-x-1">
                  <span className="text-black/40 dark:text-white/40">/</span>
                  <a href="" className="flex items-center px-3 text-black dark:text-white">
                    Default
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Search/>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="relative w-8 h-8 p-1 text-black dark:text-white cursor-pointer"
            >
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
            <button
              type="button"
              className="relative w-8 h-8 p-1 text-black dark:text-white cursor-pointer"
            >
              <ClockIcon />
            </button>
            <button
              onClick={toggleNotificationBar}
              type="button"
              className="relative w-7 h-7 p-1 text-black dark:text-white cursor-pointer"
            >
              <NotificationIcon />
              {!isNotificationOpen && (
                <span className="flex absolute w-3 h-3 right-px top-[5px]">
                  <span className="animate-ping absolute -left-[3px] -top-[3px] inline-flex h-full w-full rounded-full bg-black/50 dark:bg-white/50 opacity-75"></span>
                  <span className="relative inline-flex rounded-full w-[6px] h-[6px] bg-black dark:bg-white"></span>
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      <NotificationBar isOpen={isNotificationOpen} toggleNotification={toggleNotificationBar} />
    </div>
  );
};

export default Navbar;
