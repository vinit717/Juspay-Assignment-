import worldmap from "../../assets/ecommerce/world-map.svg";
import taskchart from "../../assets/ecommerce/task-chart.svg";
import revenuechart from "../../assets/ecommerce/revenue-chart.svg"
import saleschart from "../../assets/ecommerce/sales-chart.svg";
import salesvalue from "../../assets/ecommerce/sales-value.svg"

const Default = () => {
  return (
    <div className="h-[calc(100vh-73px)] overflow-y-auto overflow-x-hidden">
                <div className="p-4 sm:p-7 min-h-[calc(100vh-145px)]">
                    <div className="px-2 py-1 mb-4">
                        <p className="text-sm font-semibold text-black dark:text-white">eCommerce</p>
                    </div>
                    <div className="flex flex-col gap-7">
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-7">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                                <div className="bg-custom-blue-1 rounded-2xl p-6">
                                    <p className="text-sm font-semibold text-black mb-2">Customers</p>
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-2xl leading-9 font-semibold text-black">3781</h2>
                                        <div className="flex items-center gap-1">
                                            <p className="text-xs leading-[18px] text-black">+5.27%</p>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z" fill="#1C1C1C"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-custom-blue-2 rounded-2xl p-6">
                                    <p className="text-sm font-semibold text-black mb-2">Orders</p>
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-2xl leading-9 font-semibold text-black">3219</h2>
                                        <div className="flex items-center gap-1">
                                            <p className="text-xs leading-[18px] text-black">+1.75%</p>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z" fill="#1C1C1C"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-custom-blue-1 rounded-2xl p-6">
                                    <p className="text-sm font-semibold text-black mb-2">Revenue</p>
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-2xl leading-9 font-semibold text-black">$695</h2>
                                        <div className="flex items-center gap-1">
                                            <p className="text-xs leading-[18px] text-black">-0.56%</p>
                                            <svg width="16" height="16" className="rotate-180" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z" fill="#1C1C1C"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-custom-blue-2 rounded-2xl p-6">
                                    <p className="text-sm font-semibold text-black mb-2">Growth</p>
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-2xl leading-9 font-semibold text-black">30.1%</h2>
                                        <div className="flex items-center gap-1">
                                            <p className="text-xs leading-[18px] text-black">+1.48%</p>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z" fill="#1C1C1C"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-lightwhite dark:bg-white/5 rounded-2xl p-6 w-full">
                                <h2 className="text-sm font-semibold text-black dark:text-white mb-4">Projections vs Actuals</h2>
                                <img src={taskchart} className="w-full"></img>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-7">
                            <div className="lg:col-span-3 bg-lightwhite dark:bg-white/5 p-6 rounded-2xl">
                                <div className="flex justify-between gap-3 items-start md:items-center mb-4">
                                    <div className="flex flex-1 flex-col sm:flex-row items-start sm:items-center gap-7">
                                        <div className="inline-flex gap-1 text-sm font-normal">
                                            <p className="px-1.5 py-1 text-black dark:text-white font-semibold text-sm"><a href="">Revenue</a></p>
                                        </div>
                                        <p className="hidden md:block text-custom-grey-1 dark:text-white">|</p>
                                        <div className="flex gap-8 items-center flex-none">
                                            <div className="flex items-center text-xs">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="currentColor"></path>
                                                </svg>
                                                <p className="text-xs w-[130px] tracking-wide">Current Week <span className="font-semibold">$58,211</span></p>
                                            </div>
                                            <div className="flex items-center text-xs">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="#A8C5DA"></path>
                                                </svg>
                                                <p className="text-xs w-[140px] tracking-wide">Previous Week <span className="font-semibold">$68,768</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div x-data="{ dropdown: false}" className="dropdown ml-auto">
                                        <a href="javaScript:;" className="text-black dark:text-white">
                                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9 12.75C9.69036 12.75 10.25 13.3096 10.25 14C10.25 14.6904 9.69036 15.25 9 15.25C8.30964 15.25 7.75 14.6904 7.75 14C7.75 13.3096 8.30964 12.75 9 12.75Z" fill="currentColor"></path>
                                                <path d="M14 12.75C14.6904 12.75 15.25 13.3096 15.25 14C15.25 14.6904 14.6904 15.25 14 15.25C13.3096 15.25 12.75 14.6904 12.75 14C12.75 13.3096 13.3096 12.75 14 12.75Z" fill="currentColor"></path>
                                                <path d="M20.25 14C20.25 13.3096 19.6904 12.75 19 12.75C18.3096 12.75 17.75 13.3096 17.75 14C17.75 14.6904 18.3096 15.25 19 15.25C19.6904 15.25 20.25 14.6904 20.25 14Z" fill="currentColor"></path>
                                            </svg>
                                        </a>
                                        <ul x-show="dropdown" className="right-0 whitespace-nowrap">
                                            <li><a href="javascript:;">Weekly</a></li>
                                            <li><a href="javascript:;">Monthly</a></li>
                                            <li><a href="javascript:;">Yearly</a></li>
                                        </ul>
                                    </div> */}
                                    
                                </div>
                                <img src={revenuechart} className="w-full" alt="revenue chart"></img>

                            </div>
                            <div className="bg-lightwhite dark:bg-white/5 p-6 rounded-2xl">
                                <h2 className="text-sm font-semibold text-black dark:text-white mb-4">Revenue by Location</h2>
                                <img src={worldmap} className="w-full" alt="image" />
                                <div className="flex flex-col gap-4">
                                    <div className="group">
                                        <div className="flex items-center justify-between gap-2 text-xs">
                                            <p>New York</p>
                                            <p>72K</p>
                                        </div>
                                        <div className="mt-1 h-[2px] relative w-full rounded-full overflow-hidden">
                                            <div className="w-full h-full bg-lightblue-300/20 absolute"></div>
                                            <div className="h-full bg-lightblue-300 absolute" style={{ width: '72%' }}></div>
                                        </div>
                                    </div>
                                    <div className="group">
                                        <div className="flex items-center justify-between gap-2 text-xs">
                                            <p>San Francisco</p>
                                            <p>39K</p>
                                        </div>
                                        <div className="mt-1 h-[2px] relative w-full rounded-full overflow-hidden">
                                            <div className="w-full h-full bg-lightblue-300/20 absolute"></div>
                                            <div className="h-full bg-lightblue-300 absolute" style={{ width: '39%' }}></div>
                                        </div>
                                    </div>
                                    <div className="group">
                                        <div className="flex items-center justify-between gap-2 text-xs">
                                            <p>Sydney</p>
                                            <p>25K</p>
                                        </div>
                                        <div className="mt-1 h-[2px] relative w-full rounded-full overflow-hidden">
                                            <div className="w-full h-full bg-lightblue-300/20 absolute"></div>
                                            <div className="h-full bg-lightblue-300 absolute" style={{ width: '25%' }}></div>
                                        </div>
                                    </div>
                                    <div className="group">
                                        <div className="flex items-center justify-between gap-2 text-xs">
                                            <p>Singapore</p>
                                            <p>61K</p>
                                        </div>
                                        <div className="mt-1 h-[2px] relative w-full rounded-full overflow-hidden">
                                            <div className="w-full h-full bg-lightblue-300/20 absolute"></div>
                                            <div className="h-full bg-lightblue-300 absolute" style={{ width: '61%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-7">
                            <div className="lg:col-span-3 bg-lightwhite dark:bg-white/5 p-6 rounded-2xl">
                                <h2 className="text-sm font-semibold text-black dark:text-white mb-4">Top Selling Products</h2>
                                <div>
                                    <table className="table-hover min-w-[650px] w-full" >
                                    <thead className="border-b border-text-custom-grey-1 dark:border-text-custom-grey-2 h-10">
                                        <tr>
                                    <th className="text-xs text-custom-grey-1 dark:text-custom-grey-2 font-normal text-start">Name</th>
                                    <th className="text-xs text-custom-grey-1 dark:text-custom-grey-2 font-normal text-start ">Price</th>
                                    <th className="text-xs text-custom-grey-1 dark:text-custom-grey-2 font-normal text-start">Quantity</th>
                                    <th className="text-xs text-custom-grey-1 dark:text-custom-grey-2 font-normal text-start">Amount</th>
                                 </tr>
                                </thead>

                                        <tbody className="text-xs font-normal">
                                            <tr className="h-10" >
                                                <td className="whitespace-nowrap">ASOS Ridley High Waist</td>
                                                <td>$79.49</td>
                                                <td>82</td>
                                                <td>$6,518.18</td>
                                            </tr>
                                            <tr className="h-10">
                                                <td className="whitespace-nowrap">Marco Lightweight Shirt</td>
                                                <td>$128.50</td>
                                                <td>37</td>
                                                <td>$4,754.50</td>
                                            </tr>
                                            <tr className="h-10">
                                                <td className="whitespace-nowrap">Half Sleeve Shirt</td>
                                                <td>$39.99</td>
                                                <td>64</td>
                                                <td>$2,559.36</td>
                                            </tr>
                                            <tr className="h-10">
                                                <td className="whitespace-nowrap">Lightweight Jacket</td>
                                                <td>$20.00</td>
                                                <td>184</td>
                                                <td>$3,680.00</td>
                                            </tr>
                                            <tr className="h-10">
                                                <td className="whitespace-nowrap">Marco Shoes</td>
                                                <td>$28.49</td>
                                                <td>64</td>
                                                <td>$1,965.81</td>
                                            </tr>
                                            <tr className="h-10">
                                                <td className="whitespace-nowrap">ASOS Ridley High Waist</td>
                                                <td>$79.49</td>
                                                <td>82</td>
                                                <td>$6,518.18</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="bg-lightwhite dark:bg-white/5 p-6 rounded-2xl ">
                                <h2 className="text-sm font-semibold text-black dark:text-white mb-4">Total Sales</h2>
                                <div className="flex justify-center flex-col">
                                <img src={saleschart} alt="sales chart" className="h-32	w-32"/>
                                <img src={salesvalue} alt="sales value" className=" h-40 w-32"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Default
