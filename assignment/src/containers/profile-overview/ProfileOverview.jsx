import React, { useRef } from 'react'
import { RangerSlider } from '../../components/RangeSlider';
import { Canada, India, Map, UAE, USA, User } from '../../assets/img';
import { Joomla } from '../../assets/icons';

export const ProfileOverview = () => {
    const chartRef = useRef(null);
    return (
        <div>
            <h4 className='text-[28px] hidden md:block font-bold mb-6'>Overview</h4>
                <div className='flex flex-col md:flex-row md:items-start w-full md:gap-[15px] border-solid border-[2px] p-2 md:p-4 rounded-[8px] border-gray-900'>
                    <img src={User} className='rounded-[10px] flex-1 w-[50%] md:max-w-[7.8rem]' alt="" />
                    <div className="flex flex-col">
                    <div className='flex items-center mt-3'>
                        <h5 className='text-[24px] w-40 font-bold'>Mr. A</h5>
                        <svg class="w-6 h-6 text-blue-500 dark:blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clip-rule="evenodd" />
                        </svg>

                    </div>
                    <div className='flex items-center'>
                        <h5 className='text-[12px] w-40 font-bold'>Co-Founder & CEO @ Vertx</h5>
                        <img src={Joomla} className='w-3' alt="" />

                    </div>
                    <div className='flex md:flex-col md:justify-start md:items-start items-center mt-1 md: mt-2 md:gap-[22px] justify-between'>
                        <h5 className='text-[8px] rounded-[1px] px-2 font-bold bg-white text-black'>Entreprenuer</h5>
                        <div className='flex gap-[10px]'>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white bg-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                                <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                            </svg>

                            <svg className="w-[22px] h-[22px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                            </svg>


                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
                            </svg>

                        </div>

                    </div>

                    </div>
                </div>
            <div className='mt-5 flex flex-col md:flex-row gap-[15px]'>
                <div className='p-4 border-solid border-[2px] rounded-[8px] border-gray-900 bg-opacity-1'>
                    <h4 className='text-[18px] font-bold'>Founded Companies</h4>
                    <h1 className='text-[64px] font-bold'>02</h1>
                    <div className="flex justify-between items-start gap-[6rem]">
                        <div className='flex gap-[10px]'>
                        <img src={Joomla} className='w-10' alt="" />
                        <div className='flex flex-col'>
                            <h3 className='text-[14px] font-bold px-1'>Vertx <span className='bg-green-700 text-[8px] ml-3 rounded-[3px] px-2'>CEO</span></h3>
                            <p>Founded in 2025. in Fintech</p>
                        </div>

                        </div>
                        <p className='text-[10px]'>View Profile</p>
                    </div>
                    <div className="flex justify-between mt-5 items-start gap-[6rem]">
                        <div className='flex gap-[10px]'>
                        <img src={Joomla} className='w-10' alt="" />
                        <div className='flex flex-col'>
                            <h3 className='text-[14px] font-bold px-1'>Company <span className='bg-purple-400 text-[8px] ml-3 rounded-[3px] px-2'>PROPIETOR</span></h3>
                            <p>Details/Information like acquired</p>
                        </div>

                        </div>
                        <p className='text-[10px]'>View Profile</p>
                    </div>
                </div>
                <div className='p-4 border-solid border-[2px] rounded-[8px] border-gray-900 bg-opacity-1'>
                    <h4 className='text-[18px] font-bold'>Experience</h4>
                    <h1 className='text-[64px] font-bold'>03</h1>
                    <div className="flex justify-between items-center mb-2 gap-[8rem] md:gap-[14rem]">
                        <div className='flex gap-[10px] items-center'>
                        <img src={Joomla} className='w-10' alt="" />
                        <div className='flex flex-col'>
                            <h3 className='text-[14px] font-bold px-1'>Vertx</h3>
                        </div>

                        </div>
                        <p className='text-[10px]'>View Profile</p>
                    </div>
                    <div className="flex justify-between items-center mb-2 gap-[8rem] md:gap-[14rem]">
                        <div className='flex gap-[10px] items-center'>
                        <img src={Joomla} className='w-10' alt="" />
                        <div className='flex flex-col'>
                            <h3 className='text-[14px] font-bold px-1'>Vertx</h3>
                        </div>

                        </div>
                        <p className='text-[10px]'>View Profile</p>
                    </div>
                    <div className="flex justify-between items-center mb-2 gap-[8rem] md:gap-[14rem]">
                        <div className='flex gap-[10px] items-center'>
                        <img src={Joomla} className='w-10' alt="" />
                        <div className='flex flex-col'>
                            <h3 className='text-[14px] font-bold px-1'>Vertx</h3>
                        </div>

                        </div>
                        <p className='text-[10px]'>View Profile</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
