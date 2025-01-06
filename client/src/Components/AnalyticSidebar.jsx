import React from 'react'
import Logo from '../../src/assets/Logo.png'
import analyticDashboard from '../../src/assets/analyticDashboard.png'
import arrow from '../../src/assets/BackArrow.png'
import { Link, NavLink } from 'react-router-dom'

function AnalyticSidebar() {
    return (
        <>
            {/* left side */}
            <div className='bg-[#7144F1] p-8 w-[25%]'>

                {/* logo */}
                <div className='flex'>
                    <div className='w-[31px] h-[31px] ml-5'>
                        <img src={Logo} alt="logo" />
                    </div>
                    <Link to='/'>
                    <div className='w-[31px] h-[31px] ml-52 flex'>
                        <img src={arrow} alt="back" className='rotate-180'/>
                        {/* <p className='syne text-white text-[10px]'>Post Analytic Form</p> */}
                    </div>
                    </Link>
                </div>

                {/* text */}
                <div className='mt-10 ml-5'>
                    <p className='text-white syne text-[40px]'>Analytic Dashboard</p>
                    {/* <div className='absolute top-20 left-[-50px] w-[200px] h-[150px] bg-[#009950] rounded-full blur-lg opacity-50 z-0  transform rotate-45'></div> */}
                </div>

                <div className='mt-9 ml-5'>
                    <ul className='outfit text-[#3d3d3d] font-medium text-[18px] flex flex-col justify-center space-y-4'>
                        <li className='flex items-center bg-[#9774f9] p-2 rounded-2xl'>
                            <NavLink
                                to='/analytic/age'
                                className={({ isActive }) =>
                                    isActive ? 'text-[#f6f2f2]' : 'text-[#3d3d3d]'
                                }
                            >
                                Age
                            </NavLink>
                        </li>
                        <li className='flex items-center bg-[#9774f9] p-2 rounded-2xl'>
                            <NavLink
                                to='/analytic/location'
                                className={({ isActive }) =>
                                    isActive ? 'text-[#f6f2f2]' : 'text-[#3d3d3d]'
                                }
                            >
                                Location
                            </NavLink>
                        </li>
                        <li className='flex items-center bg-[#9774f9] p-2 rounded-2xl'>
                            <NavLink
                                to='/analytic/day'
                                className={({ isActive }) =>
                                    isActive ? 'text-[#f6f2f2]' : 'text-[#3d3d3d]'
                                }
                            >
                                Day/Time
                            </NavLink>
                        </li>
                        <li className='flex items-center bg-[#9774f9] p-2 rounded-2xl'>
                            <NavLink
                                to='/analytic/type'
                                className={({ isActive }) =>
                                    isActive ? 'text-[#f6f2f2]' : 'text-[#3d3d3d]'
                                }
                            >
                                Type
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* image */}
                <div className='absolute bottom-10 left-5 w-[200px]'>
                    <img src={analyticDashboard} alt="calender" />
                </div>
            </div>
        </>
    )
}

export default AnalyticSidebar