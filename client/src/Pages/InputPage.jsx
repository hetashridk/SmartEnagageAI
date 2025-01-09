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
  const [loadingChatbot, setLoadingChatbot] = useState(false);
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  const [showDetails, setShowDetails] = useState({ insights: false, comparativeInsights: false, suggestions: false });

  const toggleSection = (section) => setShowDetails(prev => ({ ...prev, [section]: !prev[section] }));

  const toggleMinimize = () => setIsSidebarMinimized(!isSidebarMinimized);

  useEffect(() => {
    const currentHour = new Date().getHours();
    setTimeSlot(
      currentHour < 6 ? '12AM to 6AM (Night)' :
        currentHour < 12 ? '6AM to 12PM (Morning)' :
          currentHour < 18 ? '12PM to 6PM (Afternoon)' : '6PM to 12AM (Evening)'
    );

    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => setLocation({ country: data.country_name, city: data.city }))
      .catch(() => setLocation({ country: 'Unknown', city: 'Unknown' }));
  }, []);

  const parseMessage = (message) => {
    const parsedSections = {
      insights: [],
      comparativeInsights: [],
      suggestions: []
    };
  
    if (!message) return parsedSections;
  
    // Modify the parsing to handle structured markers (e.g., `**Insights**`, `**Comparative Insights**`, `**Suggestions**`)
    const regexPatterns = {
      insights: /\*\*Insights\*\*:(.*?)(?=\*\*Comparative Insights\*\*|$)/s,
      comparativeInsights: /\*\*Comparative Insights\*\*:(.*?)(?=\*\*Suggestions\*\*|$)/s,
      suggestions: /\*\*Suggestions\*\*:(.*?)(?=$)/s
    };
  
    Object.keys(regexPatterns).forEach(section => {
      const match = message.match(regexPatterns[section]);
      if (match && match[1]) {
        parsedSections[section] = match[1].trim().split('\n').filter(line => line.trim().length > 0);
      }
    });
  
    return parsedSections;
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const inputValue = `Give me a detailed analysis with structured insights, comparative insights, and suggestions for a ${contentType} post on a ${dayType} during the ${timeSlot}. Please ensure the response is structured with the following sections:
    - **Insights**: [Insights]
    - **Comparative Insights**: [Comparative Insights]
    - **Suggestions**: [Suggestions]`;
  
    setLoading(true);
  
    try {
      const response = await fetch('/api/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input_value: inputValue })
      });
      const data = await response.json();
      if (response.ok) {
        // This assumes the response is in the format that includes 'message' directly
        setMessage(data.outputs?.[0]?.outputs?.[0]?.artifacts?.message || '');
        setErrorMessage('');
      } else {
        setErrorMessage('Failed to fetch data.');
      }
    } catch {
      setErrorMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  

  const parsedMessage = parseMessage(message);

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
        <div className={`relative ${isSidebarMinimized ? 'hidden' : 'block mt-14'}`}>
          <img src={CalenderImg} alt="calendar" />
        </div>
      </div>

      <div className='flex flex-col justify-center items-center w-[75%] space-y-8'>
        <p className='outfit text-[#212121] font-bold text-[35px]'>Post Analytic Form</p>
        <form onSubmit={handleSubmit}>
          <label className="block nunito text-[#444B59] font-semibold">When do you plan for posting?</label>
          <div className='flex space-x-4 mt-2'>
            <select value={dayType} onChange={e => setDayType(e.target.value)} className="block w-32 p-2 border border-gray-300 rounded-md">
              <option value="weekday">Weekday</option>
              <option value="weekend">Weekend</option>
            </select>
            <select value={timeSlot} onChange={e => setTimeSlot(e.target.value)} className="block w-[235px] p-2 border border-gray-300 rounded-md">
              <option value="12AM to 6AM (Night)">12AM to 6AM (Night)</option>
              <option value="6AM to 12PM (Morning)">6AM to 12PM (Morning)</option>
              <option value="12PM to 6PM (Afternoon)">12PM to 6PM (Afternoon)</option>
              <option value="6PM to 12AM (Evening)">6PM to 12AM (Evening)</option>
            </select>
          </div>
          <div className='mt-4'>
            <label className="block nunito text-[#444B59] font-semibold">Content Type</label>
            <select value={contentType} onChange={e => setContentType(e.target.value)} className="block w-96 p-2 border border-gray-300 rounded-md mt-2">
              <option value="Carousal">Carousal</option>
              <option value="Image">Image</option>
              <option value="Video">Video</option>
              <option value="Reel">Reel</option>
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

        {message && (
          <div className="space-y-4 mt-4 w-[780px] p-4 border rounded-lg shadow-lg">
            <div className="bg-blue-100 text-blue-700 rounded-md">
              <button onClick={() => toggleSection('insights')} className="font-bold text-left w-full">
                {showDetails.insights ? '▲' : '▼'} Insights
              </button>
              {showDetails.insights && (
                <ul className="pl-5 list-disc">
                  {parsedMessage.insights.map((insight, index) => (
                    <li key={index} className="mt-2">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{insight}</ReactMarkdown>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="bg-yellow-100 text-yellow-700 rounded-md">
              <button onClick={() => toggleSection('comparativeInsights')} className="font-bold text-left w-full">
                {showDetails.comparativeInsights ? '▲' : '▼'} Comparative Insights
              </button>
              {showDetails.comparativeInsights && (
                <ul className="pl-5">
                  {parsedMessage.comparativeInsights.map((insight, index) => (
                    <li key={index} className="mt-2">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{insight}</ReactMarkdown>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="bg-green-100 text-green-700 rounded-md">
              <button onClick={() => toggleSection('suggestions')} className="font-bold text-left w-full">
                {showDetails.suggestions ? '▲' : '▼'} Suggestions
              </button>
              {showDetails.suggestions && (
                <ul className="pl-5">
                  {parsedMessage.suggestions.map((suggestion, index) => (
                    <li key={index} className="mt-2">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{suggestion}</ReactMarkdown>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {errorMessage && (
          <div className="w-96 mt-4 p-6 bg-red-100 text-red-700 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl mb-2">Error:</h3>
            <p>{errorMessage}</p>
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
