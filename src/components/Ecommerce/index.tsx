import WorldMap from "../../assets/ecommerce/world-map.svg?react";
import TaskChart from "../../assets/ecommerce/task-chart.svg?react";
import RevenueChart from "../../assets/ecommerce/revenue-chart.svg?react"
import SalesChart from "../../assets/ecommerce/sales-chart.svg?react";
import SalesValue from "../../assets/ecommerce/sales-value.svg?react"
import IncreaseChartIcon from "../../assets/ecommerce/increase-chart.svg?react"
import DecreaseChartIcon from "../../assets/ecommerce/decrease-chart.svg?react"
import SalesValue1 from "../../assets/ecommerce/sales-value-1.svg?react"

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
                            <div className="bg-custom-blue-1 rounded-2xl p-6 cursor-pointer hover:bg-gray-100 transition-all duration-300 hover:flex-row-reverse">
                                <p className="text-sm font-semibold text-black mb-2">Customers</p>
                                <div className="flex items-center justify-between cursor-pointer hover:bg-black/5 rounded-xl p-2 transition-all duration-300 hover:flex-row-reverse">
                                    <h2 className="text-2xl leading-9 font-semibold text-black">3,781</h2>
                                    <div className="flex items-center gap-1 transition-transform">
                                        <p className="text-xs leading-[18px] text-black">+11.01%</p>
                                        <IncreaseChartIcon />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-lightwhite dark:bg-white/5  rounded-2xl p-6 cursor-pointer hover:bg-gray-100 transition-all duration-300 hover:flex-row-reverse text-black dark:text-white">
                                <p className="text-sm font-semibold mb-2">Orders</p>
                                <div className="flex items-center justify-between cursor-pointer hover:bg-white/10 rounded-xl p-2 transition-all duration-300 hover:flex-row-reverse">
                                    <h2 className="text-2xl leading-9 font-semibold ">1,219</h2>
                                    <div className="flex items-center gap-1 transition-transform">
                                        <p className="text-xs leading-[18px]">-0.03%</p>
                                        <div className="text-black dark:text-white">
                                        <DecreaseChartIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-lightwhite dark:bg-white/5  rounded-2xl p-6 cursor-pointer hover:bg-gray-100 transition-all duration-300 hover:flex-row-reverse text-black dark:text-white">
                                <p className="text-sm font-semibold  mb-2">Revenue</p>
                                <div className="flex items-center justify-between cursor-pointer hover:bg-white/10 rounded-xl p-2 transition-all duration-300 hover:flex-row-reverse">
                                    <h2 className="text-2xl leading-9 font-semibold ">$695</h2>
                                    <div className="flex items-center gap-1 transition-transform">
                                        <p className="text-xs leading-[18px]">+15.03%</p>
                                        <div className="text-black dark:text-white">
                                        <DecreaseChartIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-custom-blue-2 rounded-2xl p-6">
                                <p className="text-sm font-semibold text-black mb-2">Growth</p>
                                <div className="flex items-center justify-between cursor-pointer hover:bg-black/5 p-2 rounded-xl hover:flex-row-reverse transition-all duration-300">
                                    <h2 className="text-2xl leading-9 font-semibold text-black transition-transform">30.1%</h2>
                                    <div className="flex items-center gap-1 transition-transform">
                                        <p className="text-xs leading-[18px] text-black">+6.08%</p>
                                        <IncreaseChartIcon />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="bg-lightwhite dark:bg-white/5 rounded-2xl p-6 w-full">
                            <h2 className="text-sm font-semibold text-black dark:text-white mb-4">Projections vs Actuals</h2>
                            <div className="text-black dark:text-white">

                                <TaskChart className="w-full cursor-pointer" />
                            </div>
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
                                    <div className="flex gap-8 items-center flex-none text-black dark:text-white">
                                        <div className="flex items-center text-xs">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="currentColor"></path>
                                            </svg>
                                            <p className="text-xs w-[130px] tracking-wide">Current Week <span className="font-semibold">$58,211</span></p>
                                        </div>
                                        <div className="flex items-center text-xs">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z" fill="currentcolor"></path>
                                            </svg>
                                            <p className="text-xs w-[140px] tracking-wide">Previous Week <span className="font-semibold">$68,768</span></p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="text-black dark:text-white">
                                <RevenueChart className="w-full cursor-pointer" />
                            </div>

                        </div>
                        <div className="bg-lightwhite dark:bg-white/5 p-6 rounded-2xl">
                            <h2 className="text-sm font-semibold text-black dark:text-white mb-4">Revenue by Location</h2>
                            <WorldMap className="w-full" />
                            <div className="flex flex-col gap-4">
                                <div className="group">
                                    <div className="flex items-center justify-between gap-2 text-xs text-black dark:text-white">
                                        <p>New York</p>
                                        <p>72K</p>
                                    </div>
                                    <div className="mt-1 h-[2px] relative w-full rounded-full overflow-hidden">
                                        <div className="w-full h-full bg-lightblue-300/20 absolute"></div>
                                        <div className="h-full bg-lightblue-300 absolute" style={{ width: '72%' }}></div>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className="flex items-center justify-between gap-2 text-xs text-black dark:text-white">
                                        <p>San Francisco</p>
                                        <p>39K</p>
                                    </div>
                                    <div className="mt-1 h-[2px] relative w-full rounded-full overflow-hidden">
                                        <div className="w-full h-full bg-lightblue-300/20 absolute"></div>
                                        <div className="h-full bg-lightblue-300 absolute" style={{ width: '39%' }}></div>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className="flex items-center justify-between gap-2 text-xs text-black dark:text-white">
                                        <p>Sydney</p>
                                        <p>25K</p>
                                    </div>
                                    <div className="mt-1 h-[2px] relative w-full rounded-full overflow-hidden">
                                        <div className="w-full h-full bg-lightblue-300/20 absolute"></div>
                                        <div className="h-full bg-lightblue-300 absolute" style={{ width: '25%' }}></div>
                                    </div>
                                </div>
                                <div className="group">
                                    <div className="flex items-center justify-between gap-2 text-xs text-black dark:text-white">
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

                                    <tbody className="text-xs font-normal text-black dark:text-white">
                                        <tr className="h-10 " >
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
                        <div className="bg-lightwhite dark:bg-white/5 p-6 rounded-2xl relative ">
                            <h2 className="text-sm font-semibold text-black dark:text-white mb-4">Total Sales</h2>
                            <div className="flex justify-center flex-col items-center	">
                                <SalesChart className="h-32	w-32 cursor-pointer" />
                                <SalesValue1 className="absolute top-36 left-16 cursor-pointer"/>
                                <div className="text-black dark:text-white">

                                    <SalesValue className=" h-40 w-32" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Default
