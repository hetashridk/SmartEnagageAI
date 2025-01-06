import React, { useState } from 'react';
import { FaCommentDots, FaTimes } from 'react-icons/fa';

const Chatbot = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    toggleSidebar();
  };

  return (
    <div>
      <button
        onClick={handleToggle}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg"
      >
        <FaCommentDots size={24} />
      </button>
      {isOpen && (
        <div className="fixed top-0 right-0 w-[25%] h-screen bg-[#7144F1] shadow-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-white">Chatbot</h2>
            <button onClick={handleToggle} className="text-white">
              <FaTimes size={24} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto text-white">
            {/* Chatbot content goes here */}
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga quo commodi, repellendus consequatur alias eos animi fugit impedit, veniam reprehenderit quae numquam odio temporibus aperiam eaque repudiandae? Atque quidem laborum adipisci provident consectetur, eius fuga facere, ducimus, consequatur enim ipsa at. Fugiat ad corporis magni exercitationem doloribus, ipsam quos! Nobis, sit enim aspernatur voluptatibus perferendis aliquid.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;