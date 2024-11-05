import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <header className='pt-[15px] pb-[15px] bg-primary flex justify-evenly items-center'>
                <div className='ml-[99.6px] mr-[99.6px] pl-[12px] pr-[12px] flex justify-between'>
                    <div className="logo text-white uppercase text-[30px] mr-[346px] font-medium">arsha</div>
                </div>
                <nav className='flex justify-center items-center'>
                    <ul className='flex justify-center items-center text-center gap-2'>
                        <NavLink className='text-white flex items-center justify-center pl-[15px] pr-[15px] pt-[18px] pb-[18px]' to='/'>Home</NavLink>
                        <NavLink className='text-white flex items-center justify-center pl-[15px] pr-[15px] pt-[18px] pb-[18px]' to='/about'>About</NavLink>
                        <NavLink className='text-white flex items-center justify-center pl-[15px] pr-[15px] pt-[18px] pb-[18px]' to='/services'>Services</NavLink>
                    </ul>
                    <button className='btn hover:bg-btn-hover transition-all bg-btn ml-[30px] pt-[8px] pb-[8px] pl-[25px] pr-[25px] text-white rounded-full'>Get Started</button>
                </nav>
            </header>
        </>
    )
}

export default Nav