import React, { useEffect, useState } from 'react';
import Logo from '../../src/assets/logo.png';
import CalenderImg from '../../src/assets/CalenderImage.png';
import arrow from '../../src/assets/BackArrow.png';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'; // Import react-markdown
import remarkGfm from 'remark-gfm'; // Import GitHub-flavored markdown

function InputPage() {
  const [dayType, setDayType] = useState('weekday');
  const [timeSlot, setTimeSlot] = useState('');
  const [contentType, setContentType] = useState('Carousal');
  const [location, setLocation] = useState({ country: '', city: '' });
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false); // New loading state

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

    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        setLocation({ country: data.country_name, city: data.city });
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const inputValue = `Plan to post ${contentType} on ${dayType} during ${timeSlot}. in short and crisp manner`;

    const payload = {
      input_value: inputValue,
      output_type: "chat",
      input_type: "chat",
      tweaks: {
        "TextInput-8FzpP": {},
        "TextInput-h2XMg": {},
        "Prompt-hdT2X": {},
      }
    };

    setLoading(true); // Set loading to true when form is submitted

    try {
      const response = await fetch('/api/run', {  // Replace with your proxy server URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.outputs[0].outputs[0].artifacts.message);
        setErrorMessage('');
      } else {
        setErrorMessage('Failed to submit data.');
      }
      setLoading(false); // Reset loading after receiving response

    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again later.');
      setLoading(false); // Reset loading on error
    }
  };

  return (
    <div className='flex h-screen'>
      <div className='bg-[#7144F1] p-8 w-[35%]'>
        <div className='flex'>
          <div className='w-[31px] h-[31px] ml-5'>
            <img src={Logo} alt="logo" />
          </div>
          <Link to='/analytic/age'>
            <div className='w-[31px] h-[31px] ml-[350px] flex'>
              <img src={arrow} alt="back" />
            </div>
          </Link>
        </div>
        <div className='mt-10 ml-5'>
          <p className='text-white syne text-[40px]'>Stay on top of Posting</p>
        </div>
        <div className='relative top-[35px] left-[198px] w-[430px]'>
          <img src={CalenderImg} alt="calender" />
        </div>
      </div>

      <div className='flex flex-col justify-center items-center w-[65%] space-y-8'>
        <p className='outfit text-[#212121] font-bold text-[35px]'>Post Analytic Form</p>
        <form onSubmit={handleSubmit}>
          <label className="block nunito text-[#444B59] font-semibold">When do you plan for posting?</label>
          <div className='flex space-x-4'>
            <select value={dayType} onChange={(e) => setDayType(e.target.value)} className="block w-32 p-2 border border-gray-300 rounded-md">
              <option value="weekday">Weekday</option>
              <option value="weekend">Weekend</option>
            </select>
            <select value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} className="block w-[235px] p-2 border border-gray-300 rounded-md">
              <option value="12AM to 6AM (Night)">12AM to 6AM (Night)</option>
              <option value="6AM to 12PM (Morning)">6AM to 12PM (Morning)</option>
              <option value="12PM to 6PM (Afternoon)">12PM to 6PM (Afternoon)</option>
              <option value="6PM to 12AM (Evening)">6PM to 12AM (Evening)</option>
            </select>
          </div>
          <div className='mt-4'>
            <label className="block nunito text-[#444B59] font-semibold">Content Type</label>
            <select value={contentType} onChange={(e) => setContentType(e.target.value)} className="block w-96 p-2 border border-gray-300 rounded-md">
              <option value="Carousal">Carousal</option>
              <option value="Image">Image</option>
              <option value="Video">Video</option>
              <option value="Reel/Shorts">Reel/Shorts</option>
            </select>
          </div>
          <button type="submit" className="w-96 py-2 px-4 mt-4 text-white bg-[#212121] hover:bg-[#7144F1] rounded-md" disabled={loading}>
            {loading ? (
              <div className="flex justify-center items-center">
                <div className="w-5 h-5 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
              </div>
            ) : (
              'Submit'
            )}
          </button>
        </form>

        {/* Message with enhanced styling */}
        {message && (
          <div className="w-96 mt-4 p-6 bg-green-100 text-green-700 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl mb-2">Response:</h3>
            <div className="prose max-w-none text-sm">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{message}</ReactMarkdown>
            </div>
          </div>
        )}

        {/* Error message with enhanced styling */}
        {errorMessage && (
          <div className="w-96 mt-4 p-6 bg-red-100 text-red-700 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl mb-2">Error:</h3>
            <div className="text-sm">{errorMessage}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InputPage;
