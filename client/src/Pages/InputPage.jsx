import React, { useEffect, useState } from 'react'
import Logo from '../../src/assets/Logo.png'
import CalenderImg from '../../src/assets/CalenderImage.png'
import arrow from '../../src/assets/BackArrow.png'
import { Link } from 'react-router-dom';

function InputPage() {
  const [dayType, setDayType] = useState('weekday');
  const [timeSlot, setTimeSlot] = useState('');
  const [contentType, setContentType] = useState('Carousal');
  const [location, setLocation] = useState({ country: '', city: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 0 && currentHour < 6) {
      setTimeSlot('12AM to 6AM (Night)');
    } else if (currentHour >= 6 && currentHour < 12) {
      setTimeSlot('6AM to 12PM (Morning)');
    } else if (currentHour >= 12 && currentHour < 18) {
      setTimeSlot('12PM to 6PM (Afternoon)');
    } else {
      setTimeSlot('6PM to 12AM (Evening)');
    }

    // Fetch location data
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        setLocation({ country: data.country_name, city: data.city });
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ dayType, timeSlot, contentType, location });
    setMessage(`Your post is 50% more attractive! The ${contentType} is more good looking.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla architecto quos qui ratione tempora perspiciatis nisi deserunt commodi nesciunt repudiandae, ipsa, voluptates nobis ex ad mollitia sint quis. Consequatur perferendis, recusandae, commodi odit omnis, minus atque saepe vero ullam illo vitae. Repellat culpa possimus, quod ut voluptate illum deleniti. Recusandae minima quia natus, illum ab hic.`);
  };

  return (
    <>
      <div className='flex h-screen'>

        {/* left side */}
        <div className='bg-[#7144F1] p-8 w-[35%]'>

          {/* logo */}
          {/* logo */}
          <div className='flex'>
                    <div className='w-[31px] h-[31px] ml-5'>
                        <img src={Logo} alt="logo" />
                    </div>
                    <Link to='/analytic/age'>
                    <div className='w-[31px] h-[31px] ml-[350px] flex'>
                        <img src={arrow} alt="back" className=''/>
                        {/* <p className='syne text-white text-[10px]'>Post Analytic Form</p> */}
                    </div>
                    </Link>
                </div>

          {/* text */}
          <div className='mt-10 ml-5'>
            <p className='text-white syne text-[40px]'>Stay on top of Posting</p>
            {/* <div className='absolute top-20 left-[-50px] w-[200px] h-[150px] bg-[#009950] rounded-full blur-lg opacity-50 z-0  transform rotate-45'></div> */}
          </div>

          {/* image */}
          <div className='relative top-[35px] left-[198px] w-[430px]'>
            <img src={CalenderImg} alt="calender" />
          </div>
        </div>

        {/* right side */}
        <div className='flex flex-col justify-center items-center w-[65%] space-y-8'>
          <div className=''>
            <p className='outfit text-[#212121] font-bold text-[35px]'>Post Analytic Form</p>
          </div>
          <div>
            <form onSubmit={handleSubmit} className=''>
                <label className="block nunito text-[#444B59] font-semibold">When do you plan for posting ?</label>
              <div className='flex space-x-4'>
                <div className="mt-1 w-32">
                  <select
                    value={dayType}
                    onChange={(e) => setDayType(e.target.value)}
                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#7144F1] focus:border-[#7144F1] sm:text-sm"
                  >
                    <option value="weekday">Weekday</option>
                    <option value="weekend">Weekend</option>
                  </select>
                </div>
                <div className="w-[235px] mt-2">
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#7144F1] focus:border-[#7144F1] sm:text-sm"
                  >
                    <option value="12AM to 6AM (Night)">12AM to 6AM (Night)</option>
                    <option value="6AM to 12PM (Morning)">6AM to 12PM (Morning)</option>
                    <option value="12PM to 6PM (Afternoon)">12PM to 6PM (Afternoon)</option>
                    <option value="6PM to 12AM (Evening)">6PM to 12AM (Evening)</option>
                  </select>
                </div>
              </div>
              <div className='mt-4'>
                <label className="block nunito text-[#444B59] font-semibold">Content Type</label>
                <div className="mt-1 w-96">
                  <select
                    value={contentType}
                    onChange={(e) => setContentType(e.target.value)}
                    className="block w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#7144F1] focus:border-[#7144F1] sm:text-sm"
                  >
                    <option value="Carousal">Carousal</option>
                    <option value="Image">Image</option>
                    <option value="Video">Video</option>
                    <option value="Reel/Shorts">Reel/Shorts</option>
                  </select>
                </div>
              </div>
              <div className='mt-4'>
                <button
                  type="submit"
                  className="w-96 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#212121] hover:bg-[#7144F1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7144F1]">
                  Submit
                </button>
              </div>
            </form>
            {message && (
            <div className="w-96 mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md text-center">
              {message}
            </div>
          )}
          </div>
        </div>
      </div>
    </>
  )
}

export default InputPage