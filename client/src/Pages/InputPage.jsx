import React, { useEffect, useState } from 'react';
import Logo from '../../src/assets/logo.png';
import CalenderImg from '../../src/assets/CalenderImage.png';
import arrow from '../../src/assets/BackArrow.png';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Chatbot from '../Components/Chatbot';

function InputPage() {
  const [dayType, setDayType] = useState('weekday');
  const [timeSlot, setTimeSlot] = useState('');
  const [contentType, setContentType] = useState('Carousal');
  const [location, setLocation] = useState({ country: '', city: '' });
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loadingg, setLoadingg] = useState(false);
  const [loadingChatbot, setLoadingChatbot] = useState(false);
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

  const toggleMinimize = () => {
    setIsSidebarMinimized(!isSidebarMinimized);
  };

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

  const parseMessage = (message) => {
    // console.log('Parsing message:', message); // Log the message being parsed
    const sections = message.split('\n\n');
    const parsedSections = {
      insights: [],
      comparativeInsights: [],
      suggestions: [],
    };

    let currentSection = '';

    sections.forEach((section) => {
      if (section.startsWith('### **Insights**:')) {
        currentSection = 'insights';
        parsedSections[currentSection].push(section.replace('### **Insights**:', '').trim());
      } else if (section.startsWith('### **Comparative Insights**:')) {
        currentSection = 'comparativeInsights';
        parsedSections[currentSection].push(section.replace('### **Comparative Insights**:', '').trim());
      } else if (section.startsWith('### **Suggestions**:')) {
        currentSection = 'suggestions';
        parsedSections[currentSection].push(section.replace('### **Suggestions**:', '').trim());
      } else if (currentSection) {
        parsedSections[currentSection].push(section.trim());
      }
    });

    // console.log('Parsed Message:', parsedSections); // Properly log the parsed sections
    return parsedSections;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted'); // Log form submission
    const inputValue = `(5a00983d6eed - Ignore this)
    Give me detailed analysis based on insights, comparative insights, and suggestions, for post of type ${contentType} that I plan on posting on ${dayType} during the ${timeSlot}`;

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

    setLoadingg(true);

    try {
      const response = await fetch('/api/run', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        // console.log('API Response:', data); // Log the API response
        setMessage(data.outputs[0].outputs[0].artifacts.message);
        console.log('Message set:', data.outputs[0].outputs[0].artifacts.message); // Log the message being set
        setErrorMessage('');
      } else {
        setErrorMessage('Failed to submit data.');
      }
      setLoadingg(false);

    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again later.');
      setLoadingg(false);
    }
  };

  const parsedMessage = parseMessage(message);
  // console.log('Parsed Message:', parsedMessage); // Log the parsed message

  return (
    <div className='flex'>
      <div className={`bg-[#7144F1] p-8 transition-all duration-300 ${isSidebarMinimized ? 'w-20' : 'w-[25%]'} ${!message ? 'h-screen' : 'h-auto'}`}>
        <div className={`${isSidebarMinimized ? 'flex flex-col space-y-5 justify-center items-center' : 'flex justify-between items-center'}`}>
          <Link to='/'>
            <div className={`${isSidebarMinimized ? 'w-[20px] h-[20px]' : 'w-[31px] h-[31px]'}`}>
              <img src={Logo} alt="logo" />
            </div>
          </Link>
          <Link to='/analytic/age'>
            <div className={`${isSidebarMinimized ? 'w-[20px] h-[20px]' : 'w-[31px] h-[31px] ml-[250px] flex'}`}>
              <img src={arrow} alt="back" />
            </div>
          </Link>
        </div>
        <div className={`mt-10 ml-5 ${isSidebarMinimized ? 'hidden' : 'block'}`}>
          <p className='text-white syne text-[40px]'>Stay on top of Posting</p>
        </div>
        <div className={`relative ${isSidebarMinimized ? 'top-[400px] left-[850px] w-[250px]' : 'top-[35px] left-[160px] w-[430px]' } ${message ? 'hidden' : 'block'}`}>
          <img src={CalenderImg} alt="calender" />
        </div>
      </div>

      <div className='flex flex-col justify-center items-center w-[75%] space-y-8'>
        <p className='outfit text-[#212121] font-bold text-[35px]'>Post Analytic Form</p>
        <form onSubmit={handleSubmit}>
          <label className="block nunito text-[#444B59] font-semibold">When do you plan for posting?</label>
          <div className='flex space-x-4 mt-2'>
            <select value={dayType} onChange={(e) => setDayType(e.target.value)} className="block w-32 p-2 border border-gray-300 rounded-md">
              <option value="weekday">Weekday</option>
              <option value="weekend">Weekend</option>
            </select>
            <select value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} className="block w-[235px] p-2 border border-gray-300 rounded-md">
              <option value="Night (12AM to 6AM)">Night (12AM to 6AM)</option>
              <option value="Morning (6AM to 12PM))">Morning (6AM to 12PM)</option>
              <option value="Afternoon (12PM to 6PM))">Afternoon (12PM to 6PM)</option>
              <option value="Evening (6PM to 12AM)">Evening (6PM to 12AM)</option>
            </select>
          </div>
          <div className='mt-4'>
            <label className="block nunito text-[#444B59] font-semibold">Content Type</label>
            <select value={contentType} onChange={(e) => setContentType(e.target.value)} className="block w-96 p-2 border border-gray-300 rounded-md mt-2">
              <option value="Carousal">Carousal</option>
              <option value="Image">Image</option>
              <option value="Video">Video</option>
              <option value="Reel">Reel</option>
            </select>
          </div>
          <button type="submit" className="w-96 py-2 px-4 mt-4 text-white bg-[#212121] hover:bg-[#7144F1] rounded-md" disabled={loadingg}>
            {loadingg ? (
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
          <div className="space-y-4 mt-4">
            {parsedMessage.insights.length > 0 && (
              <div className="w-[780px] p-6 bg-blue-100 text-blue-700 rounded-lg shadow-lg">
                <h3 className="font-bold text-xl mb-2">Insights:</h3>
                <ul className="pl-5">
                  {parsedMessage.insights.map((insight, index) => (
                    <li key={index} className='mt-2'>
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{insight}</ReactMarkdown>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {parsedMessage.comparativeInsights.length > 0 && (
              <div className="w-[780px] p-6 bg-yellow-100 text-yellow-700 rounded-lg shadow-lg">
                <h3 className="font-bold text-xl mb-2">Comparative Insights:</h3>
                <ul className="pl-5">
                  {parsedMessage.comparativeInsights.map((insight, index) => (
                    <li key={index} className='mt-2'>
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{insight}</ReactMarkdown>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {parsedMessage.suggestions.length > 0 && (
              <div className="w-[780px] p-6 bg-green-100 text-green-700 rounded-lg shadow-lg">
                <h3 className="font-bold text-xl mb-2">Suggestions:</h3>
                <ul className="pl-5">
                  {parsedMessage.suggestions.map((suggestion, index) => (
                    <li key={index} className='mt-2'>
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{suggestion}</ReactMarkdown>
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
      <Chatbot
              setLoading={setLoadingChatbot}
              setErrorMessage={setErrorMessage}
              toggleSidebar={toggleMinimize} 
              loading={loadingChatbot}
        />
    </div>
  );
}

export default InputPage;