import sidebarIcon from '../../assets/navbar/sidebarIcon.svg';
import bookmarkIcon from '../../assets/navbar/bookmarkIcon.svg';
import searchIcon from '../../assets/navbar/searchIcon.svg';
import notification from '../../assets/navbar/notification.svg';
import moonIcon from '../../assets/navbar/moon.svg';
import sunIcon from '../../assets/navbar/sun.svg';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext'; 
const Index = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="border-b border-black/10 dark:border-white/10 py-[22px] px-7 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <button className='text-black dark:text-white'>
          <img src={sidebarIcon} alt="sidebar icon" />
        </button>
        <button className='text-black dark:text-white'>
          <img src={bookmarkIcon} alt="bookmark icon" />
        </button>
        <div>
          <nav aria-label='breadcrumb' className='w-full py-1 px-2'>
            <ol className="flex space-x-3">
              <li className='flex items-center'>
                <a href='/' className='flex items-center text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white'>Dashboard</a>
              </li>
              <li className='flex items-center space-x-1'>
                <span className="text-black/40 dark:text-white/40">/</span>
                <a href='/' className='flex items-center px-3 text-black dark:text-white'>Default</a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <form className='md:flex items-center hidden'>
          <label htmlFor="voice-search" className="sr-only">Search</label>
          <div className='relative w-full'>
            <div className="absolute inset-y-0 left-0 flex items-center pl-[6px] pointer-events-none">
              <img src={searchIcon} alt="search icon" />
            </div>
            <input type="text" id="voice-search" className="bg-black/5 dark:bg-black/20 border-0 text-black dark:text-white/40 text-sm rounded-lg block max-w-[160px] w-full px-[26px] p-1 focus:ring-0 focus:outline-0" placeholder="Search..." required />
            <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-2">
              <svg aria-hidden="true" className="w-4 h-4 text-black/20 dark:text-white/20 hover:text-black dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </form>
        <div className='flex items-center gap-2'>
          <div>
            <button type='button' onClick={toggleTheme} className='relative w-8 h-8 p-1 text-black dark:text-white'>
              <img src={theme === 'light' ? moonIcon : sunIcon} alt={theme === 'light' ? "moon icon" : "sun icon"} />
            </button>
          </div>
          <button type='button' className='relative w-7 h-7 p-1 text-black dark:text-white'>
            <img src={notification} alt="notification icon" />
            <span className="flex absolute w-3 h-3 right-px top-[5px]">
              <span className="animate-ping absolute -left-[3px] -top-[3px] inline-flex h-full w-full rounded-full bg-black/50 dark:bg-white/50 opacity-75"></span>
              <span className="relative inline-flex rounded-full w-[6px] h-[6px] bg-black dark:bg-white"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
