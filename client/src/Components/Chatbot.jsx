import React, { useState } from 'react';
import { FaCommentDots, FaTimes } from 'react-icons/fa';

const Chatbot = ({ toggleSidebar, setLoading, setErrorMessage, loading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    toggleSidebar();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const payload = {
      input_value: userInput,
      output_type: "chat",
      input_type: "chat",
      tweaks: {
        "TextInput-8FzpP": {},
        "TextInput-h2XMg": {},
        "Prompt-hdT2X": {},
      }
    };

    setLoading(true);
    setChatHistory([...chatHistory, { sender: 'user', message: userInput }]);
    setUserInput('');

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
        setChatHistory([...chatHistory, { sender: 'bot', message: data.outputs[0].outputs[0].artifacts.message }]);
        setErrorMessage('');
      } else {
        setErrorMessage('Failed to submit data.');
      }
      setLoading(false);

    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again later.');
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleToggle}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg"
      >
        <FaCommentDots size={24} />
      </button>
      <div
        className={`fixed top-0 right-0 w-[25%] h-screen bg-[#7144F1] shadow-lg p-4 transition-transform duration-300 ${isOpen ? 'transform translate-x-0' : 'transform translate-x-full'
          }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Chatbot</h2>
          <button onClick={handleToggle} className="text-white">
            <FaTimes size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {/* Chatbot content goes here */}
          {chatHistory.map((chat, index) => (
            <div key={index} className={`chat-message ${chat.sender === 'user' ? 'text-right' : 'text-left'} mb-2`}>
              <div className={`inline-block p-2 rounded-lg ${chat.sender === 'user' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>
                {chat.message}
              </div>
            </div>
          ))}

          <form onSubmit={handleSubmit} className={`flex ${chatHistory.length ? 'mt-4' : 'mt-[632px]'}`}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border border-gray-300 rounded-l-lg"
            />
            <button type="submit" disabled={loading} className="p-2 bg-blue-500 text-white rounded-r-lg">
              {loading ? (
                <div className="flex justify-center items-center">
                  <div className="w-5 h-5 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
                </div>
              ) : (
                'Send'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;