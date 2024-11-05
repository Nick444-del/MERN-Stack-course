import React from 'react'
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const About = () => {
    return (
        <>
            <div className='px-[60px]'>
                <div className="title flex items-center justify-center mb-[30px] py-[12px] pb-[20px]">
                    <h2 className='text-[32px] font-bold text-[#37517e] mb-[20px] pb-[20px] font-Jost uppercase font-Jost'>about us</h2>
                </div>
                <div className="about flex items-start justify-center">
                    <div className="left mt-[24px] px-[12px]">
                        <p className='mb-[16px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt debitis recusandae doloribus alias adipisci dicta tempore animi delectus maxime, ducimus odio modi deleniti voluptate nulla expedita quod. Accusamus, amet corporis!</p>
                        <ul>
                            <li className='flex items-center mb-[5px]'><IoCheckmarkCircleOutline className='mr-[5px] text-[#47b3e4] text-[20px]'/>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li className='flex items-center mb-[5px]'><IoCheckmarkCircleOutline className='mr-[5px] text-[#47b3e4] text-[20px]'/>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                            <li className='flex items-center mb-[5px]'><IoCheckmarkCircleOutline className='mr-[5px] text-[#47b3e4] text-[20px]'/>Ullamco laboris nisi ut aliquip ex ea commodo</li>
                        </ul>
                    </div>
                    <div className="right mt-[24px] px-[12px]">
                        <p className='mb-[16px]'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                        <a href="" className='text-[#47b3e4] px-[28px] py-[8px] rounded-md border-[#47b3e4] hover:text-white hover:bg-[#47b3e4] transition-all border-[1px]'>Read more</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About