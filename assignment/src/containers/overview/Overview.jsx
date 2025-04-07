import React, { useEffect, useRef } from 'react'
import { Line } from "react-chartjs-2"
import 'chart.js/auto'; // ADD THIS

import revenueData from "../../data/revenueData.json"
import { RangerSlider } from '../../components/RangeSlider';
import { Canada, India, Map, UAE, USA } from '../../assets/img';

export const Overview = () => {
    const chartRef = useRef(null);
    return (
        <div>
            <h4 className='text-[28px] font-bold mb-6'>Overview</h4>
            <div className='flex justify-start gap-[15px]'>
                <div className='size-[38rem] w-[44rem] h-fit p-1 border-solid border-[2px] rounded-[8px] border-gray-900'><Line ref={chartRef} data={{
                    labels: revenueData?.map((data) => data.label),
                    datasets: [
                        {
                            label: "Revenue",
                            data: revenueData.map((data) => data.revenue),
                            backgroundColor: "white",
                            borderColor: 'white'
                        }
                    ]
                }} /></div>
                <div className='size-[24rem] h-fit p-1 border-solid border-[2px] rounded-[8px] border-gray-900'>
                <h4 className='text-[20px] font-bold m-2'>Insights</h4>
                <div className='mb-3'>
                <h4 className='text-[16px] relative top-[14px] font-bold m-2'>Founders</h4>
                <div className='flex justify-start gap-[4rem] items-center'>
                <h4 className='text-[44px] font-bold m-2'>7.4K</h4>
                <div className='flex flex-col items-center'>
                    <p className='text-green-700'>+000%</p>
                    <p className='text-gray-500'>(000)</p>
                </div>
                </div>
                </div>
                <div className='mb-3'>
                <h4 className='text-[16px] relative top-[14px] font-bold m-2'>Investors</h4>
                <div className='flex justify-start gap-[4rem] items-center'>
                <h4 className='text-[44px] font-bold m-2'>6.09K</h4>
                <div className='flex flex-col items-center'>
                    <p className='text-green-700'>+000%</p>
                    <p className='text-gray-500'>(000)</p>
                </div>
                </div>
                </div>
                <div className='h-[1px] w-[75%] mt-2 mb-6 align-center mx-auto bg-gray-900'></div>
                <div className='flex justify-end'>
                    <a className='text-right text-[10px]'>View detailed insight <span className='pl-2 pr-4'><svg className="w-6 h-6 inline text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
</svg>
</span></a>
                </div>
                </div>
            </div>
            <div className='mt-5'>
            <div className='size-[100%] h-fit p-1 bg-no-repeat border-solid border-[2px] rounded-[8px] border-gray-900 bg-opacity-1' style={{background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${Map})`,backgroundPosition: "center", backgroundRepeat: 'no-repeat'}}>
                <div className="flex justify-between">
                <div className='flex flex-col justify-between items-baseline'>
                <h4 className='text-[20px] font-bold m-2'>Demographics</h4>
                <div className='border-solid border-[1px] rounded-[20px] px-4 py-1 border-gray-900'>
                <div className='flex gap-[15px]'>
                    <div className='flex items-center gap-[5px]'>
                        <div className='size-[10px] rounded-[50%] bg-blue-900'></div>
                        <h6>INDIA</h6>
                    </div>
                    <div className='flex items-center gap-[5px]'>
                        <div className='size-[10px] rounded-[50%] bg-red-900'></div>
                        <h6>USA</h6>
                    </div><div className='flex items-center gap-[5px]'>
                        <div className='size-[10px] rounded-[50%] bg-yellow-100'></div>
                        <h6>CANADA</h6>
                    </div><div className='flex items-center gap-[5px]'>
                        <div className='size-[10px] rounded-[50%] bg-green-900'></div>
                        <h6>UAE</h6>
                    </div>
                </div>
                </div>
                </div>
                <div className='mb-3 border-b-1 border-gray-900'>
                    <div className='flex items-center'>
                        <img src={India} className='size-[35px] w-[58px]' alt="" />
                    <RangerSlider title={"India"} demographicPercent={40} barColor={"blue"}/>

                    </div>
                    <div className='flex items-center'>
                        <img src={USA} className='size-[35px] w-[58px]' alt="" />
                    <RangerSlider title={"USA"} demographicPercent={25} barColor={"red"}/>
                    </div>
                    <div className='flex items-center'>
                    <img src={Canada} className='size-[35px] w-[58px]' alt="" />
                    <RangerSlider title={"Canada"} demographicPercent={10} barColor={"yellow"}/>
                    </div>
                    <div className='flex items-center'>
                    <img src={UAE} className='size-[35px] w-[58px]' alt="" />
                    <RangerSlider title={"UAE"} demographicPercent={7} barColor={"green"}/>
                    </div>
                </div>
                </div>
                <div className='flex justify-end'>
                    <a className='text-right text-[10px]'>View all countries <span className='pl-2 pr-4'><svg className="w-6 h-6 inline text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
</svg>
</span></a>
                </div>
                </div>
            </div>
        </div>
    )
}
