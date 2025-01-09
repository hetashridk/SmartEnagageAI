// Chatbot.js - Updated to fix chat history storage

import React, { useState } from 'react';
import { FaCommentDots, FaTimes } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

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

    const currentInput = userInput;
    setUserInput('');
    setChatHistory((prevHistory) => [...prevHistory, { sender: 'user', message: currentInput }]);

    const payload = {
      input_value: `${currentInput} answer in shortest possible way.in around single line.no markdown.`,
      output_type: "chat",
      input_type: "chat",
      tweaks: {
        "TextInput-8FzpP": {},
        "TextInput-h2XMg": {},
        "Prompt-hdT2X": {},
      }
    };

    setLoading(true);

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
        setChatHistory((prevHistory) => [
          ...prevHistory,
          { sender: 'bot', message: data.outputs[0].outputs[0].artifacts.message },
        ]);
        setErrorMessage('');
      } else {
        setErrorMessage('Failed to submit data.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleToggle}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-200"
      >
        <FaCommentDots size={24} />
      </button>
      <div
        className={`fixed top-0 right-0 w-[30%] h-screen bg-[#7144F1] shadow-lg p-4 transition-transform duration-300 flex flex-col ${isOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Chatbot</h2>
          <button onClick={handleToggle} className="text-white">
            <FaTimes size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          {chatHistory.length === 0 ? (
            <div className="text-center text-gray-400">Start the conversation by typing a message!</div>
          ) : (
            chatHistory.map((chat, index) => (
              <div key={index} className="chat-message">
                {chat.sender === 'user' && (
                  <div className="flex justify-end mb-2">
                    <div className="inline-block p-3 rounded-lg bg-blue-100 text-blue-700 max-w-[75%] break-words">
                      {chat.message}
                    </div>
                  </div>
                )}
                {chat.sender === 'bot' && (
                  <div className="flex justify-start mb-2">
                    <div className="inline-block p-3 rounded-lg bg-gray-100 text-gray-700 max-w-[75%] break-words">
                      <ReactMarkdown>{chat.message}</ReactMarkdown>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {loading && (
          <div className="text-center text-gray-300">Bot is typing...</div>
        )}

        <form onSubmit={handleSubmit} className="flex items-center mt-4">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
            className="flex p-2 border border-gray-300 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" disabled={loading} className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition duration-200">
            {loading ? (
              <div className="w-5 h-5 border-t-4 border-b-4 border-white rounded-full animate-spin"></div>
            ) : (
              'Send'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
