
interface NotificationBarProps {
  isOpen: boolean;
  toggleNotification: () => void;
}

const NotificationBar: React.FC<NotificationBarProps> = ({ isOpen }) => {
    return (
        <div
          className={`fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-gray-800 shadow-lg transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Notifications</h2>
            <ul>
              <li className="mb-2 text-black dark:text-white">Notification 1</li>
              <li className="mb-2 text-black dark:text-white">Notification 2</li>
              <li className="mb-2 text-black dark:text-white">Notification 3</li>
            </ul>
          </div>
        </div>
      );
    };

export default NotificationBar;
