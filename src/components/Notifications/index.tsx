import avatar1 from "../../assets/notification/avatar-1.svg"
import avatar2 from "../../assets/notification/avatar-2.svg"
import avatar3 from "../../assets/notification/avatar-3.svg"
import avatar4 from "../../assets/notification/avatar-4.svg"
import avatar5 from "../../assets/notification/avatar-5.svg"
import avatar6 from "../../assets/notification/avatar-6.svg"
import avatar7 from "../../assets/notification/avatar-7.svg"
import avatar8 from "../../assets/notification/avatar-8.svg"
import avatar9 from "../../assets/notification/avatar-9.svg"
import avatar10 from "../../assets/notification/avatar-10.svg"
import avatar11 from "../../assets/notification/avatar-11.svg"
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
          <div className="right-sidebar fixed right-0 bg-white dark:bg-black bottom-0 z-50 w-[280px] border-l border-black/10 dark:border-white/10 transition-all duration-300">
            <div className="flex flex-col gap-9 px-6 py-[22px] h-screen overflow-y-auto overflow-x-hidden">
                <div>
                    <h4 className="font-semibold text-black dark:text-white mb-5">Notifications</h4>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2">
                            <div className="h-6 w-6 flex-none p-1 text-black bg-custom-blue-1	 rounded-lg">
                                <svg width="32" height="32" className="w-4 h-4" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 13C6 13 6 10.9662 6.78626 9.10724C6.78626 9.10724 7.54538 7.31249 8.92893 5.92893C8.92893 5.92893 10.3125 4.54538 12.1072 3.78626C12.1072 3.78626 13.9662 3 16 3C16 3 18.0338 3 19.8928 3.78626C19.8928 3.78626 21.6875 4.54538 23.0711 5.92893C23.0711 5.92893 24.4546 7.31249 25.2137 9.10724C25.2137 9.10724 26 10.9662 26 13V19C26 19 26 21.0338 25.2137 22.8928C25.2137 22.8928 24.4546 24.6875 23.0711 26.0711C23.0711 26.0711 21.6875 27.4546 19.8928 28.2137C19.8928 28.2137 18.0338 29 16 29C16 29 13.9662 29 12.1072 28.2137C12.1072 28.2137 10.3125 27.4546 8.92893 26.0711C8.92893 26.0711 7.54538 24.6875 6.78626 22.8928C6.78626 22.8928 6 21.0338 6 19V13ZM8 13V19C8 19 8 22.3137 10.3431 24.6569C10.3431 24.6569 12.6863 27 16 27C16 27 19.3137 27 21.6569 24.6569C21.6569 24.6569 24 22.3137 24 19V13C24 13 24 9.68629 21.6569 7.34315C21.6569 7.34315 19.3137 5 16 5C16 5 12.6863 5 10.3431 7.34315C10.3431 7.34315 8 9.68629 8 13Z" fill="currentcolor"></path>
                                    <path d="M25 18H28C28.5523 18 29 17.5523 29 17C29 16.4477 28.5523 16 28 16H25C24.4477 16 24 16.4477 24 17C24 17.5523 24.4477 18 25 18Z" fill="currentcolor"></path>
                                    <path d="M4 18H7C7.55228 18 8 17.5523 8 17C8 16.4477 7.55228 16 7 16H4C3.44772 16 3 16.4477 3 17C3 17.5523 3.44772 18 4 18Z" fill="currentcolor"></path>
                                    <path d="M4 22H7.225C7.77728 22 8.225 21.5523 8.225 21C8.225 20.4477 7.77728 20 7.225 20H4C3.44772 20 3 20.4477 3 21C3 21.5523 3.44772 22 4 22Z" fill="currentcolor"></path>
                                    <path d="M4 14H28C28.5523 14 29 13.5523 29 13C29 12.4477 28.5523 12 28 12H4C3.44772 12 3 12.4477 3 13C3 13.5523 3.44772 14 4 14Z" fill="currentcolor"></path>
                                    <path d="M15 17V28C15 28.5523 15.4477 29 16 29C16.5523 29 17 28.5523 17 28V17C17 16.4477 16.5523 16 16 16C15.4477 16 15 16.4477 15 17Z" fill="currentcolor"></path>
                                    <path d="M24.775 22H28C28.5523 22 29 21.5523 29 21C29 20.4477 28.5523 20 28 20H24.775C24.2227 20 23.775 20.4477 23.775 21C23.775 21.5523 24.2227 22 24.775 22Z" fill="currentcolor"></path>
                                    <path d="M6.2989 4.22515L9.2739 7.05015C9.45973 7.22661 9.70622 7.325 9.96249 7.325L9.96437 7.325L9.98834 7.32467C10.2535 7.31781 10.505 7.20591 10.6876 7.01359C10.8641 6.82776 10.9625 6.58127 10.9625 6.325L10.9625 6.32312L10.9622 6.29915C10.9553 6.03402 10.8434 5.78247 10.6511 5.59985L7.67608 2.77485C7.49024 2.59839 7.24376 2.5 6.98749 2.5L6.96163 2.50033C6.69651 2.50719 6.44496 2.61909 6.26234 2.81141C6.08587 2.99724 5.98749 3.24373 5.98749 3.5L5.98782 3.52585C5.99468 3.79098 6.10658 4.04253 6.2989 4.22515Z" fill="currentcolor"></path>
                                    <path d="M24.299 2.77477L21.3365 5.58727C21.1442 5.76988 21.0322 6.02141 21.0254 6.28653L21.025 6.3125L21.0253 6.33458C21.0308 6.58313 21.1286 6.82071 21.2998 7.00101C21.4824 7.19335 21.7339 7.30528 21.9991 7.31216L22.025 7.3125L22.0471 7.31226C22.2957 7.30677 22.5332 7.20889 22.7135 7.03773L25.676 4.22523C25.8684 4.04262 25.9803 3.79109 25.9872 3.52596L25.9875 3.5L25.9873 3.47791C25.9818 3.22937 25.8839 2.99179 25.7128 2.81149C25.5301 2.61915 25.2786 2.50722 25.0135 2.50034L24.9875 2.5L24.9654 2.50024C24.7169 2.50573 24.4793 2.60361 24.299 2.77477Z" fill="currentcolor"></path>
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="whitespace-nowrap overflow-hidden text-ellipsis w-[200px] text-black dark:text-white">You have a bug that needs to be fixed.</p>
                                <p className="text-xs text-black/40 dark:text-white/40">5m ago</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="h-6 w-6 flex-none p-1 text-black bg-custom-blue-2 rounded-lg">
                                <svg width="32" height="32" className="w-4 h-4" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 3C16 3 17.8304 3 19.5035 3.70768C19.5035 3.70768 21.1188 4.39089 22.364 5.63604C22.364 5.63604 23.6091 6.88119 24.2923 8.49649C24.2923 8.49649 25 10.1696 25 12C25 12 25 13.8304 24.2923 15.5035C24.2923 15.5035 23.6091 17.1188 22.364 18.364C22.364 18.364 21.1188 19.6091 19.5035 20.2923C19.5035 20.2923 17.8304 21 16 21C16 21 14.1696 21 12.4965 20.2923C12.4965 20.2923 10.8812 19.6091 9.63604 18.364C9.63604 18.364 8.39089 17.1188 7.70768 15.5035C7.70768 15.5035 7 13.8304 7 12C7 12 7 10.1696 7.70768 8.49649C7.70768 8.49649 8.39089 6.88119 9.63604 5.63604C9.63604 5.63604 10.8812 4.39089 12.4965 3.70767C12.4965 3.70767 14.1696 3 16 3ZM16 5C16 5 13.1005 5 11.0503 7.05025C11.0503 7.05025 9 9.1005 9 12C9 12 9 14.8995 11.0503 16.9497C11.0503 16.9497 13.1005 19 16 19C16 19 18.8995 19 20.9497 16.9497C20.9497 16.9497 23 14.8995 23 12C23 12 23 9.1005 20.9497 7.05025C20.9497 7.05025 18.8995 5 16 5Z" fill="currentcolor"></path>
                                    <path d="M22.5005 22.7409C25.5174 24.4828 27.2589 27.4999 27.2589 27.4999C27.3915 27.7296 27.6099 27.8973 27.8661 27.9659C27.9505 27.9886 28.0376 28 28.125 28C28.1355 28 28.146 27.9999 28.1564 27.9995C28.3212 27.9943 28.4821 27.9485 28.6249 27.8661C28.9344 27.6875 29.125 27.3573 29.125 27C29.125 26.9846 29.1246 26.9691 29.1239 26.9537C29.1165 26.7941 29.071 26.6385 28.9911 26.5001C26.9816 23.0188 23.5006 21.0089 23.5006 21.0089C20.0196 18.9989 16 18.9989 16 18.9989C11.9804 18.9989 8.4994 21.0089 8.4994 21.0089C5.01869 23.0187 3.00924 26.4996 3.00924 26.4996C2.9215 26.6516 2.875 26.8245 2.875 27L2.87516 27.0181C2.87664 27.0995 2.88803 27.1803 2.9091 27.2589C2.97776 27.5151 3.14538 27.7335 3.37508 27.8661C3.52708 27.9538 3.69949 28 3.875 28C3.89351 28 3.91201 27.9995 3.93049 27.9985C4.26751 27.9797 4.57233 27.7923 4.74107 27.4999C6.48262 24.4828 9.49948 22.7409 9.49948 22.7409C12.5163 20.9989 16 20.9989 16 20.9989C19.4837 20.9989 22.5005 22.7409 22.5005 22.7409Z" fill="currentcolor"></path>
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="whitespace-nowrap overflow-hidden text-ellipsis w-[200px] text-black dark:text-white">New user registered</p>
                                <p className="text-xs text-black/40 dark:text-white/40">1:23 AM</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="h-6 w-6 flex-none p-1 text-black bg-custom-blue-1	 rounded-lg">
                                <svg width="32" height="32" className="w-4 h-4" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 13C6 13 6 10.9662 6.78626 9.10724C6.78626 9.10724 7.54538 7.31249 8.92893 5.92893C8.92893 5.92893 10.3125 4.54538 12.1072 3.78626C12.1072 3.78626 13.9662 3 16 3C16 3 18.0338 3 19.8928 3.78626C19.8928 3.78626 21.6875 4.54538 23.0711 5.92893C23.0711 5.92893 24.4546 7.31249 25.2137 9.10724C25.2137 9.10724 26 10.9662 26 13V19C26 19 26 21.0338 25.2137 22.8928C25.2137 22.8928 24.4546 24.6875 23.0711 26.0711C23.0711 26.0711 21.6875 27.4546 19.8928 28.2137C19.8928 28.2137 18.0338 29 16 29C16 29 13.9662 29 12.1072 28.2137C12.1072 28.2137 10.3125 27.4546 8.92893 26.0711C8.92893 26.0711 7.54538 24.6875 6.78626 22.8928C6.78626 22.8928 6 21.0338 6 19V13ZM8 13V19C8 19 8 22.3137 10.3431 24.6569C10.3431 24.6569 12.6863 27 16 27C16 27 19.3137 27 21.6569 24.6569C21.6569 24.6569 24 22.3137 24 19V13C24 13 24 9.68629 21.6569 7.34315C21.6569 7.34315 19.3137 5 16 5C16 5 12.6863 5 10.3431 7.34315C10.3431 7.34315 8 9.68629 8 13Z" fill="currentcolor"></path>
                                    <path d="M25 18H28C28.5523 18 29 17.5523 29 17C29 16.4477 28.5523 16 28 16H25C24.4477 16 24 16.4477 24 17C24 17.5523 24.4477 18 25 18Z" fill="currentcolor"></path>
                                    <path d="M4 18H7C7.55228 18 8 17.5523 8 17C8 16.4477 7.55228 16 7 16H4C3.44772 16 3 16.4477 3 17C3 17.5523 3.44772 18 4 18Z" fill="currentcolor"></path>
                                    <path d="M4 22H7.225C7.77728 22 8.225 21.5523 8.225 21C8.225 20.4477 7.77728 20 7.225 20H4C3.44772 20 3 20.4477 3 21C3 21.5523 3.44772 22 4 22Z" fill="currentcolor"></path>
                                    <path d="M4 14H28C28.5523 14 29 13.5523 29 13C29 12.4477 28.5523 12 28 12H4C3.44772 12 3 12.4477 3 13C3 13.5523 3.44772 14 4 14Z" fill="currentcolor"></path>
                                    <path d="M15 17V28C15 28.5523 15.4477 29 16 29C16.5523 29 17 28.5523 17 28V17C17 16.4477 16.5523 16 16 16C15.4477 16 15 16.4477 15 17Z" fill="currentcolor"></path>
                                    <path d="M24.775 22H28C28.5523 22 29 21.5523 29 21C29 20.4477 28.5523 20 28 20H24.775C24.2227 20 23.775 20.4477 23.775 21C23.775 21.5523 24.2227 22 24.775 22Z" fill="currentcolor"></path>
                                    <path d="M6.2989 4.22515L9.2739 7.05015C9.45973 7.22661 9.70622 7.325 9.96249 7.325L9.96437 7.325L9.98834 7.32467C10.2535 7.31781 10.505 7.20591 10.6876 7.01359C10.8641 6.82776 10.9625 6.58127 10.9625 6.325L10.9625 6.32312L10.9622 6.29915C10.9553 6.03402 10.8434 5.78247 10.6511 5.59985L7.67608 2.77485C7.49024 2.59839 7.24376 2.5 6.98749 2.5L6.96163 2.50033C6.69651 2.50719 6.44496 2.61909 6.26234 2.81141C6.08587 2.99724 5.98749 3.24373 5.98749 3.5L5.98782 3.52585C5.99468 3.79098 6.10658 4.04253 6.2989 4.22515Z" fill="currentcolor"></path>
                                    <path d="M24.299 2.77477L21.3365 5.58727C21.1442 5.76988 21.0322 6.02141 21.0254 6.28653L21.025 6.3125L21.0253 6.33458C21.0308 6.58313 21.1286 6.82071 21.2998 7.00101C21.4824 7.19335 21.7339 7.30528 21.9991 7.31216L22.025 7.3125L22.0471 7.31226C22.2957 7.30677 22.5332 7.20889 22.7135 7.03773L25.676 4.22523C25.8684 4.04262 25.9803 3.79109 25.9872 3.52596L25.9875 3.5L25.9873 3.47791C25.9818 3.22937 25.8839 2.99179 25.7128 2.81149C25.5301 2.61915 25.2786 2.50722 25.0135 2.50034L24.9875 2.5L24.9654 2.50024C24.7169 2.50573 24.4793 2.60361 24.299 2.77477Z" fill="currentcolor"></path>
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="whitespace-nowrap overflow-hidden text-ellipsis w-[200px] text-black dark:text-white">You have a bug that needs to be fixed.</p>
                                <p className="text-xs text-black/40 dark:text-white/40">0:32 AM</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="h-6 w-6 flex-none p-1 text-black bg-custom-blue-2 rounded-lg">
                                <svg width="32" height="32" className="w-4 h-4" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0001 11C16.0001 11 18.0712 11 19.5357 12.4645C19.5357 12.4645 21.0001 13.9289 21.0001 16C21.0001 16 21.0001 18.0711 19.5357 19.5355C19.5357 19.5355 18.0712 21 16.0001 21C16.0001 21 13.9291 21 12.4646 19.5355C12.4646 19.5355 11.0001 18.0711 11.0001 16C11.0001 16 11.0001 13.9289 12.4646 12.4645C12.4646 12.4645 13.9291 11 16.0001 11ZM16.0001 13C16.0001 13 14.7575 13 13.8788 13.8787C13.8788 13.8787 13.0001 14.7574 13.0001 16C13.0001 16 13.0001 17.2426 13.8788 18.1213C13.8788 18.1213 14.7575 19 16.0001 19C16.0001 19 17.2428 19 18.1214 18.1213C18.1214 18.1213 19.0001 17.2426 19.0001 16C19.0001 16 19.0001 14.7574 18.1214 13.8787C18.1214 13.8787 17.2428 13 16.0001 13Z" fill="currentcolor"></path>
                                    <path d="M10.3443 10.3449C10.5319 10.1574 10.6376 9.90267 10.6376 9.63745C10.6376 9.37243 10.5324 9.11824 10.3451 8.93074C10.1576 8.7432 9.90283 8.63745 9.63762 8.63745C9.37259 8.63745 9.1184 8.74266 8.9309 8.92995C7.54836 10.311 6.79081 12.1123 6.79081 12.1123C5.99988 13.9737 5.99988 16 5.99988 16C5.99988 18.0262 6.79225 19.891 6.79225 19.891C7.54836 21.6889 8.9309 23.0699 8.9309 23.0699C9.1184 23.2572 9.37259 23.3624 9.63762 23.3624C9.90283 23.3623 10.1577 23.2568 10.3451 23.0692C10.5324 22.8817 10.6376 22.6275 10.6376 22.3625C10.6375 22.0972 10.532 21.8424 10.3443 21.655C9.23969 20.5515 8.63298 19.1089 8.63298 19.1089C7.99988 17.6189 7.99988 16 7.99988 16C7.99988 14.381 8.63442 12.8876 8.63442 12.8876C9.23969 11.4484 10.3443 10.3449 10.3443 10.3449Z" fill="currentcolor"></path>
                                    <path d="M23.0697 8.93034C24.452 10.3112 25.208 12.1089 25.208 12.1089C26.0003 13.9737 26.0003 16 26.0003 16C26.0003 18.0262 25.2094 19.8876 25.2094 19.8876C24.4519 21.6889 23.0693 23.0699 23.0693 23.0699C22.8943 23.2447 22.6608 23.3485 22.4138 23.3611C22.3968 23.362 22.3797 23.3624 22.3626 23.3624C22.0972 23.3624 21.8427 23.2569 21.6551 23.0692C21.4794 22.8933 21.3755 22.6583 21.3637 22.4099C21.363 22.3941 21.3626 22.3783 21.3626 22.3624C21.3628 22.0972 21.4683 21.8424 21.6559 21.655C22.7605 20.5515 23.3658 19.1123 23.3658 19.1123C24.0003 17.6189 24.0003 16 24.0003 16C24.0003 14.381 23.3672 12.891 23.3672 12.891C22.7605 11.4484 21.6559 10.3449 21.6559 10.3449C21.4681 10.1574 21.3626 9.90286 21.3626 9.63745C21.3626 9.37448 21.4662 9.12209 21.6509 8.93494L21.6551 8.93073C21.8207 8.76492 22.0393 8.66255 22.2728 8.6415C22.3024 8.63882 22.3322 8.63747 22.3621 8.63745C22.6228 8.63745 22.8738 8.73929 23.0605 8.92125L23.0697 8.93034Z" fill="currentcolor"></path>
                                    <path d="M6.8072 6.8072L6.81177 6.80261C6.99651 6.61546 7.1001 6.36307 7.1001 6.1001C7.1001 5.83456 6.99449 5.57993 6.80656 5.39234L6.79799 5.3839C6.61125 5.20193 6.36083 5.1001 6.1001 5.1001C6.07041 5.10012 6.03981 5.10147 6.01024 5.10414C5.7767 5.12521 5.558 5.22768 5.39234 5.39364C3.32494 7.46503 2.17976 10.159 2.17976 10.159C1 12.9622 1 16.0001 1 16.0001C1 19.038 2.1784 21.838 2.1784 21.838C3.32458 24.535 5.39234 26.6066 5.39234 26.6066C5.5797 26.7943 5.83396 26.8999 6.09918 26.9001C6.11489 26.9001 6.13152 26.8997 6.14721 26.899C6.39554 26.8873 6.6306 26.7835 6.80655 26.6079C6.99448 26.4203 7.10009 26.1656 7.1001 25.9001C7.1001 25.8832 7.09967 25.8662 7.0988 25.8493C7.08623 25.6023 6.98258 25.3687 6.80785 25.1936C5.01375 23.3962 4.0218 21.0622 4.0218 21.0622C3 18.6343 3 16.0001 3 16.0001C3 13.3659 4.02043 10.9412 4.02043 10.9412C5.01357 8.60439 6.8072 6.8072 6.8072 6.8072Z" fill="currentcolor"></path>
                                    <path d="M26.6085 5.39425L26.6073 5.39299C26.4199 5.20568 26.166 5.10034 25.9011 5.1001C25.6362 5.1001 25.3812 5.2052 25.1937 5.39234C25.0062 5.57988 24.9001 5.83488 24.9001 6.1001C24.9001 6.365 25.0053 6.61907 25.1924 6.80655C26.9865 8.60396 27.9784 10.938 27.9784 10.938C29.0002 13.3659 29.0002 16.0001 29.0002 16.0001C29.0002 18.6343 27.9798 21.059 27.9798 21.059C26.9865 23.3962 25.1924 25.1936 25.1924 25.1936C25.0053 25.3811 24.9001 25.6352 24.9001 25.9001C24.9004 26.1653 25.006 26.4205 25.1937 26.6079C25.3812 26.795 25.6352 26.9001 25.9001 26.9001C26.1654 26.8999 26.4205 26.7943 26.6079 26.6066C28.6757 24.535 29.8205 21.8412 29.8205 21.8412C31.0002 19.038 31.0002 16.0001 31.0002 16.0001C31.0002 12.9622 29.8218 10.1622 29.8218 10.1622C28.6758 7.4656 26.6085 5.39425 26.6085 5.39425Z" fill="currentcolor"></path>
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="whitespace-nowrap overflow-hidden text-ellipsis w-[200px] text-black dark:text-white">Andi Lane subscribed to you</p>
                                <p className="text-xs text-black/40 dark:text-white/40">Yesterday 12:39 AM</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-black dark:text-white mb-5">Activities</h4>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2">
                            <div className="h-6 w-6 flex-none rounded-full overflow-hidden">
                                <img src={avatar1} className="object-cover" alt="avatar" />
                            </div>
                            <div className="flex-1">
                                <p className="whitespace-nowrap overflow-hidden text-ellipsis w-[200px] text-black dark:text-white">Edited the details of Project X</p>
                                <p className="text-xs text-black/40 dark:text-white/40">5m ago</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="h-6 w-6 flex-none rounded-full overflow-hidden">
                                <img src={avatar2} className="object-cover" alt="avatar" />
                            </div>
                            <div className="flex-1">
                                <p className="whitespace-nowrap overflow-hidden text-ellipsis w-[200px] text-black dark:text-white">Released a new version</p>
                                <p className="text-xs text-black/40 dark:text-white/40">1:23 AM</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="h-6 w-6 flex-none rounded-full overflow-hidden">
                                <img src={avatar3} className="object-cover" alt="avatar" />
                            </div>
                            <div className="flex-1">
                                <p className="whitespace-nowrap overflow-hidden text-ellipsis w-[200px] text-black dark:text-white">Submitted a bug</p>
                                <p className="text-xs text-black/40 dark:text-white/40">Yesterday 12:39 AM</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="h-6 w-6 flex-none rounded-full overflow-hidden">
                                <img src={avatar4} className="object-cover" alt="avatar" />
                            </div>
                            <div className="flex-1">
                                <p className="whitespace-nowrap overflow-hidden text-ellipsis w-[200px] text-black dark:text-white">Modified A data in Page X</p>
                                <p className="text-xs text-black/40 dark:text-white/40">Last Thursday 3:34 AM</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="h-6 w-6 flex-none rounded-full overflow-hidden">
                                <img src={avatar5} className="object-cover" alt="avatar" />
                            </div>
                            <div className="flex-1">
                                <p className="whitespace-nowrap overflow-hidden text-ellipsis w-[200px] text-black dark:text-white">Deleted a page in Project X</p>
                                <p className="text-xs text-black/40 dark:text-white/40">Aug 11</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-black dark:text-white mb-5">Contacts</h4>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 items-center">
                            <img src={avatar6} className="h-6 w-6 flex-none rounded-full object-cover" alt="avatar" />
                            <p className="text-black dark:text-white">Natali Craig</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src={avatar7} className="h-6 w-6 flex-none rounded-full object-cover" alt="avatar" />
                            <p className="text-black dark:text-white">Drew Cano</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src={avatar8} className="h-6 w-6 flex-none rounded-full object-cover" alt="avatar"  />
                            <p className="text-black dark:text-white">Orlando Diggs</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src={avatar9} className="h-6 w-6 flex-none rounded-full object-cover" alt="avatar" />
                            <p className="text-black dark:text-white">Andi Lane</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src={avatar10} className="h-6 w-6 flex-none rounded-full object-cover" alt="avatar"/>
                            <p className="text-black dark:text-white">Kate Morrison</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img src={avatar11} className="h-6 w-6 flex-none rounded-full object-cover" alt="avatar"/>
                            <p className="text-black dark:text-white">Koray Okumus</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
      );
    };

export default NotificationBar;
