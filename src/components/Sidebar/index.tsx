import React, { useState } from 'react';
import userprofile from "../../assets/sidebar/userProfile.svg";
import defaulticon from "../../assets/sidebar/defaulticon.svg";

interface MenuBarProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MenuBar: React.FC<MenuBarProps> = ({ isOpen }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const toggleSubmenuItem = (submenu: string) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  const ArrowIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.659675 9.35355C0.446775 9.15829 0.446775 8.84171 0.659675 8.64645L4.25 5.35355C4.4629 5.15829 4.4629 4.84171 4.25 4.64645L0.659675 1.35355C0.446776 1.15829 0.446776 0.841709 0.659675 0.646446C0.872575 0.451184 1.21775 0.451185 1.43065 0.646446L5.02098 3.93934C5.65967 4.52513 5.65968 5.47487 5.02098 6.06066L1.43065 9.35355C1.21775 9.54882 0.872574 9.54882 0.659675 9.35355Z"
        fill="currentcolor"
      />
    </svg>
  );

  return (
    <nav
      className={`fixed top-0 left-0 h-full w-[212px] bg-white dark:bg-black/10 shadow-lg transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } ease-in-out z-40 flex-none border-r border-black/10 dark:border-white/10 transition-all duration-300`}
    >
      <div className="flex p-4">
        <span className='mr-3 pl-3'>
          <img src={userprofile} alt="user" />
        </span>
        <p className='text-sm text-black dark:text-white'>ByeWind</p>
      </div>
      <ul className="relative h-[calc(100vh-58px)] flex flex-col gap-1 overflow-y-auto overflow-x-hidden p-2 py-0">
        <p className="pl-3 my-2 text-sm">
          <span className="text-black/40 dark:text-white/40 mr-4">Favourites</span>
          <span className="text-black/20 ">Recently</span>
        </p>

        <li className="flex pl-3 py-2 hover:bg-black/5 relative cursor-pointer rounded-lg transition-all duration-300 w-[180px] h-7">
          <a
            href="#"
            className="text-black dark:text-white flex items-center before:content-[''] before:absolute before:top-1.5 before:left-0 before:h-4 before:w-1 before:rounded before:bg-transparent hover:before:bg-black dark:hover:before:bg-white w-full"
          >
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3Z" fill="#1C1C1C" fillOpacity="0.2" />
            </svg>
            <span className="ml-2">Overview</span>
          </a>
        </li>

        <li className="flex pl-3 py-2 hover:bg-black/5 relative cursor-pointer rounded-lg transition-all duration-300 w-[180px] h-7">
          <a
            href="#"
            className="text-black dark:text-white flex items-center before:content-[''] before:absolute before:top-1.5 before:left-0 before:h-4 before:w-1 before:rounded before:bg-transparent hover:before:bg-black dark:hover:before:bg-white w-full"
          >
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3Z" fill="#1C1C1C" fillOpacity="0.2" />
            </svg>
            <span className="ml-2">Projects</span>
          </a>
        </li>

        <p className="pl-3 my-2 text-black/60 dark:text-white/40 text-sm">Dashboards</p>
        <li className="flex pl-3 py-2 hover:bg-black/5 relative cursor-pointer rounded-lg transition-all duration-300 w-[180px] h-7">
          <a
            href="#"
            className="text-black dark:text-white flex items-center before:content-[''] before:absolute before:top-1.5 before:left-0 before:h-4 before:w-1 before:rounded before:bg-transparent hover:before:bg-black dark:hover:before:bg-white w-full"
          > 
          <img src={defaulticon} alt='default icon'></img>
            <span className="ml-2">Default</span>
          </a>
        </li>
        <li
          className="  relative cursor-pointer transition-all duration-300 w-[180px]"
          onClick={() => toggleSubmenu('ecommerce')}
        >
          <div className="pl-3 text-black dark:text-white flex items-center justify-between rounded-lg hover:bg-black/5 h-7">
            <div className="flex items-center">
              <ArrowIcon isOpen={activeMenu === 'ecommerce'} />
              <span className="ml-2">E-commerce</span>
            </div>
          </div>
        </li>
        <li
          className="relative cursor-pointer transition-all duration-300 w-[180px]"
          onClick={() => toggleSubmenu('projects')}
        >
          <div className="pl-3  text-black dark:text-white flex items-center justify-between rounded-lg hover:bg-black/5 h-7">
            <div className="flex items-center">
              <ArrowIcon isOpen={activeMenu === 'projects'} />
              <span className="ml-2">Projects</span>
            </div>
          </div>
        </li>
        <li
          className="relative cursor-pointer transition-all duration-300 w-[180px]"
          onClick={() => toggleSubmenu('onlineCourses')}
        >
          <div className="pl-3 text-black dark:text-white flex items-center justify-between rounded-lg hover:bg-black/5 h-7">
            <div className="flex items-center">
              <ArrowIcon isOpen={activeMenu === 'onlineCourses'} />
              <span className="ml-2">Online Courses</span>
            </div>
          </div>

        </li>

        <p className="pl-3 my-2 text-black/60 dark:text-white/40 text-sm">Pages</p>
        <li
          className="py-2 relative cursor-pointer transition-all duration-300 w-[180px]"
          onClick={() => toggleSubmenuItem('user-profile')}
        >
          <div className="pl-3 text-black dark:text-white flex items-center justify-between rounded-lg hover:bg-black/5 h-7">
            <div className="flex items-center w-full">
              <ArrowIcon isOpen={activeSubmenu === 'user-profile'} />
              <span className="ml-2">User Profile</span>
            </div>
          </div>
          {activeSubmenu === 'user-profile' && (
            <ul className='space-y-0.5'>
                <li className="flex pl-3 py-2 hover:bg-black/5 relative cursor-pointer rounded-lg transition-all duration-300 w-[180px] h-7">
          <a
            href="#"
            className="text-black dark:text-white flex items-center before:content-[''] before:absolute before:top-1.5 before:left-0 before:h-4 before:w-1 before:rounded before:bg-transparent hover:before:bg-black dark:hover:before:bg-white w-full"
          >
            <span className="ml-2">Overview</span>
          </a>
        </li>
        <li className="flex pl-3 py-2 hover:bg-black/5 relative cursor-pointer rounded-lg transition-all duration-300 w-[180px] h-7">
          <a
            href="#"
            className="text-black dark:text-white flex items-center before:content-[''] before:absolute before:top-1.5 before:left-0 before:h-4 before:w-1 before:rounded before:bg-transparent hover:before:bg-black dark:hover:before:bg-white w-full"
          >
            <span className="ml-2">Projects</span>
          </a>
        </li>

        <li className="flex pl-3 py-2 hover:bg-black/5 relative cursor-pointer rounded-lg transition-all duration-300 w-[180px] h-7">
          <a
            href="#"
            className="text-black dark:text-white flex items-center before:content-[''] before:absolute before:top-1.5 before:left-0 before:h-4 before:w-1 before:rounded before:bg-transparent hover:before:bg-black dark:hover:before:bg-white w-full"
          >
            <span className="ml-2">Campaigns</span>
          </a>
        </li>

        <li className="flex pl-3 py-2 hover:bg-black/5 relative cursor-pointer rounded-lg transition-all duration-300 w-[180px] h-7">
          <a
            href="#"
            className="text-black dark:text-white flex items-center before:content-[''] before:absolute before:top-1.5 before:left-0 before:h-4 before:w-1 before:rounded before:bg-transparent hover:before:bg-black dark:hover:before:bg-white w-full"
          >
            <span className="ml-2">Documents</span>
          </a>
        </li>

        <li className="flex pl-3 py-2 hover:bg-black/5 relative cursor-pointer rounded-lg transition-all duration-300 w-[180px] h-7">
          <a
            href="#"
            className="text-black dark:text-white flex items-center before:content-[''] before:absolute before:top-1.5 before:left-0 before:h-4 before:w-1 before:rounded before:bg-transparent hover:before:bg-black dark:hover:before:bg-white w-full"
          >
            <span className="ml-2">Followers</span>
          </a>
        </li>

            </ul>
          )}
        </li>



        <li
          className="relative cursor-pointer transition-all duration-300 w-[180px]"
          onClick={() => toggleSubmenuItem('account')}
        >
          <div className="pl-3 text-black dark:text-white flex items-center justify-between rounded-lg hover:bg-black/5 h-7">
            <div className="flex items-center w-full">
              <ArrowIcon isOpen={activeSubmenu === 'account'} />
              <span className="ml-2">Account</span>
            </div>
          </div>
        </li>


        
        <li
          className="relative cursor-pointer transition-all duration-300 w-[180px]"
          onClick={() => toggleSubmenuItem('corporate')}
        >
          <div className="pl-3 text-black dark:text-white flex items-center justify-between rounded-lg hover:bg-black/5 h-7">
            <div className="flex items-center w-full">
              <ArrowIcon isOpen={activeSubmenu === 'corporate'} />
              <span className="ml-2">Corporate</span>
            </div>
          </div>
        </li>

        
        <li
          className="relative cursor-pointer transition-all duration-300 w-[180px]"
          onClick={() => toggleSubmenuItem('blog')}
        >
          <div className="pl-3 text-black dark:text-white flex items-center justify-between rounded-lg hover:bg-black/5 h-7">
            <div className="flex items-center w-full">
              <ArrowIcon isOpen={activeSubmenu === 'blog'} />
              <span className="ml-2">Blog</span>
            </div>
          </div>
        </li>

        
        <li
          className="relative cursor-pointer transition-all duration-300 w-[180px]"
          onClick={() => toggleSubmenuItem('social')}
        >
          <div className="pl-3 text-black dark:text-white flex items-center justify-between rounded-lg hover:bg-black/5 h-7">
            <div className="flex items-center w-full">
              <ArrowIcon isOpen={activeSubmenu === 'social'} />
              <span className="ml-2">Social</span>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;
