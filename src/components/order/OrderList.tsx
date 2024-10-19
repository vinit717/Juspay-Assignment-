import avatar6 from "../../assets/notification/avatar-6.svg"
import avatar7 from "../../assets/notification/avatar-7.svg"
import avatar8 from "../../assets/notification/avatar-8.svg"
import avatar9 from "../../assets/notification/avatar-9.svg"
import avatar10 from "../../assets/notification/avatar-10.svg"

import Calender from "../../assets/order-list/calender.svg?react"
import LeftArrow from "../../assets/order-list/left-arrow.svg?react";
import RightArrow from "../../assets/order-list/right-arrow.svg?react";
import MenuIcon from "../../assets/order-list/menu-icon.svg?react"
import AddIcon from "../../assets/order-list/add-icon.svg?react"
import SortIcon from "../../assets/order-list/sort-icon.svg?react"
import SuffleIcon from "../../assets/order-list/suffle-icon.svg?react";
import Search from "../Navbar/Search"

const OrderList = () => {
    return (
        <div className="h-[calc(100vh-73px)] overflow-y-auto overflow-x-hidden">
            <div className="p-7 min-h-[calc(100vh-145px)]">
                <div className="px-2 py-1 mb-4">
                    <p className="text-sm font-semibold text-custom-black dark:text-white">Order List</p>
                </div>
                <div className="p-2 bg-lightwhite dark:bg-white/5 rounded-lg flex gap-2 justify-between mb-2 h-11" >
                    <div className="flex items-center gap-4">
                        <div className="flex gap-2 items-center text-custom-black dark:text-white">
                            <button type="button" className="p-1 rounded-lg bg-transparent hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300">
                                <AddIcon />
                            </button>
                            <button type="button" className="p-1 rounded-lg bg-transparent hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300">
                                <SortIcon />
                            </button>
                            <button type="button" className="p-1 rounded-lg bg-transparent hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300">
                                <SuffleIcon />
                            </button>
                        </div>

                    </div>
                    <Search />
                </div>
                <div className="grid grid-cols-1 gap-3">
                    <div >
                        <table className="w-full">
                            <thead>
                                <tr className="h-10	text-xs  text-custom-grey-1 dark:text-custom-grey-2 border-b border-black/20 dark:border-white/5 text-left	">
                                    <th className="flex items-center pt-3">
                                        <input id="all" name="remember-me" type="checkbox" className="h-3 w-3 rounded-lg border-custom-grey-1 dark:border-custom-grey-2 accent-black checked:bg-black checked:text-white dark:accent-custom-blue-2 dark:checked:text-black cursor-pointer" />
                                        <label htmlFor="all" className="ml-1.5 font-normal">Order ID</label>
                                    </th>
                                    <th className="font-normal">User</th>
                                    <th className="font-normal">Project</th>
                                    <th className="font-normal">Address</th>
                                    <th className="font-normal">Date Order</th>
                                    <th className="font-normal">Order Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className="text-custom-black dark:text-white">
                                <tr className="group text-xs border-b border-black/20 dark:border-white/5 h-10 hover:bg-lightwhite dark:hover:bg-white/5 cursor-pointer">
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center">
                                            <input
                                                id="order1"
                                                name="remember-me"
                                                type="checkbox"
                                                className="h-3 w-3 rounded-lg border-custom-grey-1 dark:border-custom-grey-2 accent-black checked:bg-black checked:text-white dark:accent-custom-blue-2 dark:checked:text-black cursor-pointer"
                                            />
                                            <label htmlFor="order1" className="ml-1.5 block">#CM9801</label>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap min-w-[150px]">
                                        <div className="flex items-center gap-2">
                                            <img
                                                className="w-6 h-6 flex-none rounded-full overflow-hidden object-cover ring-2 ring-white dark:ring-black"
                                                src={avatar6}
                                                alt=""
                                            />
                                            <p className="flex-1">Natali Craig</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap">Landing Page</td>
                                    <td className="min-w-[150px]">Meadow Lane Oakland, New York</td>
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center gap-1">
                                            <Calender />
                                            <p>Just now</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center text-xs text-[#8A8CD9]">
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z"
                                                    fill="currentcolor"
                                                ></path>
                                            </svg>
                                            <p>In Progress</p>
                                        </div>
                                    </td>
                                    <td>
                                        <button
                                            type="button"
                                            className="p-1 text-transparent group-hover:text-black dark:group-hover:text-white"
                                        >
                                            <MenuIcon />
                                        </button>
                                    </td>
                                </tr>

                                <tr className="group text-xs border-b border-black/20 dark:border-white/5 h-10 hover:bg-lightwhite dark:hover:bg-white/5 cursor-pointer	">
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center">
                                            <input id="order2" name="remember-me" type="checkbox" className="h-3 w-3 rounded-lg border-custom-grey-1  dark:border-custom-grey-2 accent-black checked:bg-black checked:text-white dark:accent-custom-blue-2 dark:checked:text-black cursor-pointer" />
                                            <label htmlFor="order2" className="ml-1.5 block">#CM9802</label>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap min-w-[150px]">
                                        <div className="flex items-center gap-2">
                                            <img className="w-6 h-6 flex-none rounded-full overflow-hidden object-cover ring-2 ring-white dark:ring-black" src={avatar10} alt="" />
                                            <p className="flex-1">Kate Morrison</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap">CRM Admin pages</td>
                                    <td className="min-w-[150px]">Lady San Francisco</td>
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center gap-1 ">
                                            <Calender />
                                            <p>A minute ago</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center text-xs text-[#4AA785]">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="currentcolor"></path>
                                            </svg>
                                            <p>Competed</p>
                                        </div>
                                    </td>
                                    <td>
                                        <button type="button" className="p-1 text-transparent group-hover:text-black dark:group-hover:text-white">
                                            <MenuIcon />
                                        </button>
                                    </td>
                                </tr>
                                <tr className="group text-xs border-b border-black/20 dark:border-white/5 h-10 hover:bg-lightwhite dark:hover:bg-white/5 cursor-pointer	">
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center">
                                            <input id="order3" name="remember-me" type="checkbox" className="h-3 w-3 rounded-lg border-custom-grey-1  dark:border-custom-grey-2 accent-black checked:bg-black checked:text-white dark:accent-custom-blue-2 dark:checked:text-black cursor-pointer" />
                                            <label htmlFor="order3" className="ml-1.5 block">#CM9803</label>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap min-w-[150px]">
                                        <div className="flex items-center gap-2">
                                            <img className="w-6 h-6 flex-none rounded-full overflow-hidden object-cover ring-2 ring-white dark:ring-black" src={avatar7} alt="" />
                                            <p className="flex-1">Drew Cano</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap">Client Project</td>
                                    <td className="min-w-[150px]">Bagwell Avenue Ocala</td>
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center gap-1">
                                            <Calender />
                                            <p>1 hour ago</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center text-xs text-[#59A8D4]">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="currentcolor"></path>
                                            </svg>
                                            <p>Pending</p>
                                        </div>
                                    </td>
                                    <td>
                                        <button type="button" className="p-1 text-transparent group-hover:text-black dark:group-hover:text-white">
                                            <MenuIcon />
                                        </button>
                                    </td>
                                </tr>
                                <tr className="group text-xs border-b border-black/20 dark:border-white/5 h-10 hover:bg-lightwhite dark:hover:bg-white/5 cursor-pointer	">
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center">
                                            <input id="order4" name="remember-me" type="checkbox" className="h-3 w-3 rounded-lg border-custom-grey-1  dark:border-custom-grey-2 accent-black checked:bg-black checked:text-white dark:accent-custom-blue-2 dark:checked:text-black cursor-pointer" />
                                            <label htmlFor="order4" className="ml-1.5 block">#CM9804</label>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap min-w-[150px]">
                                        <div className="flex items-center gap-2">
                                            <img className="w-6 h-6 flex-none rounded-full overflow-hidden object-cover ring-2 ring-white dark:ring-black" src={avatar8} alt="" />
                                            <p className="flex-1">Orlando Diggs</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap">Admin Dashboard</td>
                                    <td className="min-w-[150px]">Washburn Baton Rouge</td>
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center gap-1">
                                            <Calender />
                                            <p>Yesterday</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center text-xs text-[#FFC555]">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="currentcolor"></path>
                                            </svg>
                                            <p>Approved</p>
                                        </div>
                                    </td>
                                    <td>
                                        <button type="button" className="p-1 text-transparent group-hover:text-black dark:group-hover:text-white">
                                            <MenuIcon />
                                        </button>
                                    </td>
                                </tr>
                                <tr className="group text-xs border-b border-black/20 dark:border-white/5 h-10 hover:bg-lightwhite dark:hover:bg-white/5 cursor-pointer	">
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center">
                                            <input id="order5" name="remember-me" type="checkbox" className="h-3 w-3 rounded-lg border-custom-grey-1  dark:border-custom-grey-2 accent-black checked:bg-black checked:text-white dark:accent-custom-blue-2 dark:checked:text-black cursor-pointer" />
                                            <label htmlFor="order5" className="ml-1.5 block">#CM9805</label>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap min-w-[150px]">
                                        <div className="flex items-center gap-2">
                                            <img className="w-6 h-6 flex-none rounded-full overflow-hidden object-cover ring-2 ring-white dark:ring-black" src={avatar9} alt="" />
                                            <p className="flex-1">Andi Lane</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap">App Landing Page</td>
                                    <td className="min-w-[150px]">Nest Lane Olivette</td>
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center gap-1">
                                            <Calender />
                                            <p>Feb 2, 2023</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center text-xs text-black/40 dark:text-white/40">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="currentcolor"></path>
                                            </svg>
                                            <p>Rejected</p>
                                        </div>
                                    </td>
                                    <td>
                                        <button type="button" className="p-1 text-transparent group-hover:text-black dark:group-hover:text-white">
                                            <MenuIcon />
                                        </button>
                                    </td>
                                </tr>
                                <tr className="group text-xs border-b border-black/20 dark:border-white/5 h-10 hover:bg-lightwhite dark:hover:bg-white/5 cursor-pointer	">
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center">
                                            <input id="order6" name="remember-me" type="checkbox" className="h-3 w-3 rounded-lg border-custom-grey-1  dark:border-custom-grey-2 accent-black checked:bg-black checked:text-white dark:accent-custom-blue-2 dark:checked:text-black cursor-pointer" />
                                            <label htmlFor="order6" className="ml-1.5 block">#CM9801</label>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap min-w-[150px]">
                                        <div className="flex items-center gap-2">
                                            <img className="w-6 h-6 flex-none rounded-full overflow-hidden object-cover ring-2 ring-white dark:ring-black" src={avatar6} alt="" />
                                            <p className="flex-1">Natali Craig</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap">Landing Page</td>
                                    <td className="min-w-[150px]">Meadow Lane Oakland</td>
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center gap-1">
                                            <Calender />
                                            <p>Just now</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center text-xs text-[#8A8CD9]">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="currentcolor"></path>
                                            </svg>
                                            <p>In Progress</p>
                                        </div>
                                    </td>
                                    <td>
                                        <button type="button" className="p-1 text-transparent group-hover:text-black dark:group-hover:text-white">
                                            <MenuIcon />
                                        </button>
                                    </td>
                                </tr>
                                <tr className="group text-xs border-b border-black/20 dark:border-white/5 h-10 hover:bg-lightwhite dark:hover:bg-white/5 cursor-pointer	">
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center">
                                            <input
                                                id="order7"
                                                name="remember-me"
                                                type="checkbox"
                                                className="h-3 w-3 rounded-lg border-custom-grey-1  dark:border-custom-grey-2 accent-black checked:bg-black checked:text-white dark:accent-custom-blue-2 dark:checked:text-black cursor-pointer"
                                            />
                                            <label htmlFor="order7" className="ml-1.5 block">#CM9802</label>
                                        </div>

                                    </td>
                                    <td className="whitespace-nowrap min-w-[150px]">
                                        <div className="flex items-center gap-2">
                                            <img className="w-6 h-6 flex-none rounded-full overflow-hidden object-cover ring-2 ring-white dark:ring-black" src={avatar10} alt="" />
                                            <p className="flex-1">Kate Morrison</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap">CRM Admin pages</td>
                                    <td className="min-w-[150px]">Larry San Francisco</td>
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center gap-1">
                                            <Calender />
                                            <p>A minute ago</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center text-xs text-[#4AA785]">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="currentcolor"></path>
                                            </svg>
                                            <p>Competed</p>
                                        </div>
                                    </td>
                                    <td>
                                        <button type="button" className="p-1 text-transparent group-hover:text-black dark:group-hover:text-white">
                                            <MenuIcon />
                                        </button>
                                    </td>
                                </tr>
                                <tr className="group text-xs border-b border-black/20 dark:border-white/5 h-10 hover:bg-lightwhite dark:hover:bg-white/5 cursor-pointer	">
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center">
                                            <input id="order8" name="remember-me" type="checkbox" className="h-3 w-3 rounded-lg border-custom-grey-1  dark:border-custom-grey-2 accent-black checked:bg-black checked:text-white dark:accent-custom-blue-2 dark:checked:text-black cursor-pointer" />
                                            <label htmlFor="order8" className="ml-1.5 block">#CM9803</label>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap min-w-[150px]">
                                        <div className="flex items-center gap-2">
                                            <img className="w-6 h-6 flex-none rounded-full overflow-hidden object-cover ring-2 ring-white dark:ring-black" src={avatar7} alt="" />
                                            <p className="flex-1">Drew Cano</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap">Client Project</td>
                                    <td className="min-w-[150px]">Bagwell Avenue Ocala</td>
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center gap-1">
                                            <Calender />
                                            <p>1 hour ago</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center text-xs text-[#59A8D4]">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="currentcolor"></path>
                                            </svg>
                                            <p>Pending</p>
                                        </div>
                                    </td>
                                    <td>
                                        <button type="button" className="p-1 text-transparent group-hover:text-black dark:group-hover:text-white">
                                            <MenuIcon />
                                        </button>
                                    </td>
                                </tr>
                                <tr className="group text-xs border-b border-black/20 dark:border-white/5 h-10 hover:bg-lightwhite dark:hover:bg-white/5 cursor-pointer	">
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center">
                                            <input id="order9" name="remember-me" type="checkbox" className="h-3 w-3 rounded-lg border-custom-grey-1  dark:border-custom-grey-2 accent-black checked:bg-black checked:text-white dark:accent-custom-blue-2 dark:checked:text-black cursor-pointer" />
                                            <label htmlFor="order9" className="ml-1.5 block">#CM9804</label>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap min-w-[150px]">
                                        <div className="flex items-center gap-2">
                                            <img className="w-6 h-6 flex-none rounded-full overflow-hidden object-cover ring-2 ring-white dark:ring-black" src={avatar8} alt="" />
                                            <p className="flex-1">Orlando Diggs</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap">Admin Dashboard</td>
                                    <td className="min-w-[150px]">Washburn Baton Rouge</td>
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center gap-1">
                                            <Calender />
                                            <p>Yesterday</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center text-xs text-[#FFC555]">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="currentcolor"></path>
                                            </svg>
                                            <p>Approved</p>
                                        </div>
                                    </td>
                                    <td>
                                        <button type="button" className="p-1 text-transparent group-hover:text-black dark:group-hover:text-white">
                                            <MenuIcon />
                                        </button>
                                    </td>
                                </tr>
                                <tr className="group text-xs border-b border-black/20 dark:border-white/5 h-10 hover:bg-lightwhite dark:hover:bg-white/5 cursor-pointer	">
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center">
                                            <input id="order10" name="remember-me" type="checkbox" className="h-3 w-3 rounded-md border-custom-grey-1 dark:border-custom-grey-2 accent-black checked:bg-black checked:text-white dark:checked:bg-black dark:accent-custom-blue-2 dark:checked:text-black cursor-pointer" />
                                            <label htmlFor="order10" className="ml-1.5 block">#CM9805</label>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap min-w-[150px]">
                                        <div className="flex items-center gap-2">
                                            <img className="w-6 h-6 flex-none rounded-full overflow-hidden object-cover ring-2 ring-white dark:ring-black" src={avatar9} alt="" />
                                            <p className="flex-1">Andi Lane</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap">App Landing Page</td>
                                    <td className="min-w-[150px]">Nest Lane Olivette</td>
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center gap-1">
                                            <Calender />
                                            <p>Feb 2, 2023</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap">
                                        <div className="flex items-center text-xs text-black/40 dark:text-white/40">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="currentcolor"></path>
                                            </svg>
                                            <p>Rejected</p>
                                        </div>
                                    </td>
                                    <td>
                                        <button type="button" className="p-1 text-transparent group-hover:text-black dark:group-hover:text-white">
                                            <MenuIcon />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-end items-center gap-2 text-custom-black dark:text-white">
                        <button type="button" className="p-1 bg-transparent rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300">
                            <LeftArrow />
                        </button>
                        <ul className="flex gap-2">
                            <li><a href="javaScript:;" className="inline-block w-7 h-7 leading-7 text-center bg-transparent rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300">1</a></li>
                            <li><a href="javaScript:;" className="inline-block w-7 h-7 leading-7 text-center bg-transparent rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300">2</a></li>
                            <li><a href="javaScript:;" className="inline-block w-7 h-7 leading-7 text-center bg-transparent rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300">3</a></li>
                            <li><a href="javaScript:;" className="inline-block w-7 h-7 leading-7 text-center bg-transparent rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300">4</a></li>
                            <li><a href="javaScript:;" className="inline-block w-7 h-7 leading-7 text-center bg-transparent rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300">5</a></li>
                        </ul>
                        <button type="button" className="p-1 bg-transparent rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300">
                            <RightArrow />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderList
