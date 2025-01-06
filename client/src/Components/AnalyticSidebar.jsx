import React, { useState } from 'react';
import Logo from '../../src/assets/logo.png';
import analyticDashboard from '../../src/assets/analyticDashboard.png';
import arrow from '../../src/assets/BackArrow.png';
import { Link, NavLink } from 'react-router-dom';
import { FaChartPie, FaMapMarkerAlt, FaCalendarAlt, FaThLarge } from 'react-icons/fa';

function AnalyticSidebar({ isMinimized, toggleMinimize }) {
//   const [isMinimized, setIsMinimized] = useState(false);

//   const handleToggle = () => {
//     setIsMinimized(!isMinimized);
//   };

  return (
    <div className={`bg-[#7144F1] p-8 ${isMinimized ? 'w-24' : 'w-[25%]'}`}>
      <div className={`${isMinimized ? 'w-[20px] h-[20px] ml-2' : 'flex justify-between items-center'}`}>
        <Link to='/'>
        <div className={`${isMinimized ? 'w-[20px] h-[20px]' : 'w-[31px] h-[31px]'}`}>
          <img src={Logo} alt="logo" />
        </div>
        </Link>
        {/* <button className='text-white'>
          <img src={arrow} alt="toggle" className={`transform ${isMinimized ? 'w-64 mt-4' : 'rotate-180 w-[30px]'}`} />
        </button> */}
      </div>

      {!isMinimized && (
        <div className='mt-10'>
          <p className='text-white syne text-[40px]'>Analytic Dashboard</p>
        </div>
      )}

      <div className={`${isMinimized ? 'mt-16' : 'mt-9'}`}>
        <ul className='outfit text-[#3d3d3d] font-medium text-[18px] flex flex-col justify-center space-y-4'>
          <li className='flex items-center bg-[#9774f9] p-2 rounded-2xl'>
            <NavLink
              to='/analytic/age'
              className={({ isActive }) =>
                isActive ? 'text-[#f6f2f2]' : 'text-[#3d3d3d]'
              }
            >
              {isMinimized ? <FaChartPie size={17} /> : 'Age'}
            </NavLink>
          </li>
          <li className='flex items-center bg-[#9774f9] p-2 rounded-2xl'>
            <NavLink
              to='/analytic/location'
              className={({ isActive }) =>
                isActive ? 'text-[#f6f2f2]' : 'text-[#3d3d3d]'
              }
            >
              {isMinimized ? <FaMapMarkerAlt size={17} /> : 'Location'}
            </NavLink>
          </li>
          <li className='flex items-center bg-[#9774f9] p-2 rounded-2xl'>
            <NavLink
              to='/analytic/day'
              className={({ isActive }) =>
                isActive ? 'text-[#f6f2f2]' : 'text-[#3d3d3d]'
              }
            >
              {isMinimized ? <FaCalendarAlt size={17} /> : 'Day & Time'}
            </NavLink>
          </li>
          <li className='flex items-center bg-[#9774f9] p-2 rounded-2xl'>
            <NavLink
              to='/analytic/type'
              className={({ isActive }) =>
                isActive ? 'text-[#f6f2f2]' : 'text-[#3d3d3d]'
              }
            >
              {isMinimized ? <FaThLarge size={17} /> : 'Type'}
            </NavLink>
          </li>
        </ul>
      </div>

      {!isMinimized && (
        <div className='absolute bottom-10 left-5 w-[200px]'>
          <img src={analyticDashboard} alt="calender" />
        </div>
      )}
    </div>
  );
}

export default AnalyticSidebar;