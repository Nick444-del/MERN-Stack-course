import React from 'react'
import { FiActivity } from "react-icons/fi";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { BsCalendar2Week } from "react-icons/bs";
import { BsBroadcast } from "react-icons/bs";

const Services = () => {
    const data = [
        {
            id: 1,
            icon: <FiActivity />,
            title: "Lorem Ipsum",
            desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
        },
        {
            id: 2,
            icon: <BsBoundingBoxCircles />,
            title: "Dolor Sitema",
            desc: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino"
        },
        {
            id: 3,
            icon: <BsCalendar2Week />,
            title: "Sed ut perspiciatis",
            desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
        },
        {
            id: 4,
            icon: <BsBroadcast />,
            title: "Nemo Enim",
            desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        }
    ]
    return (
        <>
            <div className='px-[60px]'>
                <div className='mx-[99px] px-[12px] pb-[60px]'>
                    <div className="title flex flex-col items-center justify-center mb-[30px] py-[12px] pb-[20px]">
                        <h2 className='text-[32px] font-bold text-[#37517e] mb-[20px] pb-[20px] font-Jost uppercase font-Jost'>services</h2>
                        <p className='font-open-sans text-[16px]'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>
                </div>

                <div className='card-container grid grid-cols-4 gap-5'>
                    {
                        data.map((item, id) => {
                            return(
                                <>
                                    <div key={id} className='border border-[lightgray] p-4 rounded-lg shadow hover:transform hover:scale-105 transition-all'>
                                        <div className="card border-[#47b3e4]"  >
                                            <div className="icon text-[#47b3e4] text-[35px] m-3">{item.icon}</div>
                                            <h3 className='text-[#37517e] py-3 font-bold'>{item.title}</h3>
                                            <p className='text-[#47b3e4] '>{item.desc}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Services