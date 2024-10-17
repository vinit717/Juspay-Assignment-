
interface MenuBarProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MenuBar: React.FC<MenuBarProps> = ({ isOpen }) => {
        return (
          <div
            className={`fixed top-0 left-0 h-full w-[212px] bg-white dark:bg-gray-800 shadow-lg transform ${
              isOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out z-50`}
          >
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4">Menu</h2>
              <ul>
                <li className="mb-2">
                  <a href="#" className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
                    Menu Item 1
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
                    Menu Item 2
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
                    Menu Item 3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        );
      };
      

export default MenuBar;
