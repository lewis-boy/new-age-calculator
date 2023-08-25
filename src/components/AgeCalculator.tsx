'use client'
import React, { useState, useEffect } from 'react'

export default function AgeCalculator() {
    const [day, setDay] = useState(0)
    const [month, setMonth] = useState(0)
    const [year, setYear] = useState(0)

    const handleClick = () => {
        console.log("hello")
        console.log(4)
    }



    return (
        <div className="bg-white w-[343px] h-[486px] rounded-[24px] rounded-br-[100px] flex flex-col px-[24px] py-[48px] gap-[32px]">
            <form className="flex max-w-[295px] gap-[16px] relative">
                <div className="flex flex-col max-w-[87px]">
                    <input
                        type="number"
                        id="day"
                        required
                        min="1"
                        max="31"
                        className='peer rounded-[8px] px-[16px] py-[12px] text-mobile-md font-bold not-italic mt-[18px] appearance-none [appearance:textfield]
                                    invalid:[&:not(:placeholder-shown):not(:focus)]:border-light-red '
                        value={day}
                        onChange={(e) => setDay(e.target.valueAsNumber)} />
                    <label htmlFor="day" className="text-mobile-sm not-italic font-bold text-smokey-grey uppercase absolute
                                                    peer-invalid:text-light-red">Day</label>
                    <span className='text-light-red text-mobile-error'>Must be a valid day</span>
                </div>
                <div className="flex flex-col max-w-[87px]">
                    <input
                        type="number"
                        id="month"
                        min="1"
                        max="12"
                        className='peer rounded-[8px] px-[16px] py-[12px] text-mobile-md font-bold not-italic mt-[18px]
                        invalid:[&:not(:placeholder-shown):not(:focus)]:border-light-red'
                        value={month}
                        onChange={(e) => setMonth(e.target.valueAsNumber)} />
                    <label htmlFor="month" className="text-mobile-sm not-italic font-bold text-smokey-grey uppercase absolute
                                                        peer-invalid:text-light-red">Month</label>
                    <span className='text-light-red text-mobile-error'>Must be a valid month</span>
                </div>
                <div className="flex flex-col max-w-[87px]">
                    <input
                        type="number"
                        id="year"
                        min="1900"
                        className='peer rounded-[8px] px-[16px] py-[12px] text-mobile-md font-bold not-italic mt-[18px]
                        invalid:[&:not(:placeholder-shown):not(:focus)]:border-light-red'
                        value={year}
                        onChange={(e) => setYear(e.target.valueAsNumber)} />
                    <label htmlFor="year" className="text-mobile-sm not-italic font-bold text-smokey-grey uppercase absolute
                                                    peer-invalid:text-light-red">Year</label>
                    <span className='text-light-red text-mobile-error'>Must be in the past</span>
                </div>
            </form>
            <div className="w-full relative">
                <button onClick={handleClick} className='hover:cursor-pointer  flex mx-auto '>
                    <div className='w-full h-1 block border-t-2 border-light-grey absolute top-[50%] right-0'></div>
                    <img src="icon-arrow.svg" alt="down-arrow" className='w-[64px] h-[64px] rounded-full bg-purple z-10' />
                    {/* <div className='w-[50%] h-5 block border-t-4 border-light-grey absolute top-[50%] left-[60%] overflow-hidden'></div> */}
                </button>
            </div>
            <div className='flex flex-col text-mobile-lg font-extrabold'>
                <div className='flex'><span className='text-purple'>{year === 0 ? '--' : year}</span> years</div>
                <div className='flex'><span className='text-purple'>{month === 0 ? '--' : month}</span> months</div>
                <div className='flex'><span className='text-purple'>{day === 0 ? '--' : day}</span> days</div>
            </div>

        </div>
    )
}
