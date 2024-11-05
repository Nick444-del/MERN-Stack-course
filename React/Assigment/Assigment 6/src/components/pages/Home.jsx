import React from 'react'

import home1 from '../../assets/home1.png'

const Home = () => {
    return (
        <>
            <div className='pt-[50px] pb-[60px] bg-primary '>
                <div className=" px-[99px] mx-[12px] flex items-center justify-center">
                    <div className="left flex justify-center flex-col">
                        <h1 className='text-white text-[48px] font-Jost font-[700]'>Better Solutions For Your Business</h1>
                        <p className='text-white text-[22px] font-open-sans mt-[5px] mb-[30px]'>We are team of talented designers making websites with Bootstrap</p>
                        <div className="hbtn flex items-left justify-start">
                            <button className="btn hover:bg-btn-hover transition-all bg-btn pt-[8px] pb-[8px] pl-[25px] pr-[25px] text-white rounded-full">Get Started</button>
                        </div>
                    </div>
                    <div className="right">
                        <img className='animate-pulse' src={home1} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home