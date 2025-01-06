import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

const ChartSwitcherDonut = ({ postsData, impressionsData, likesData, sharesData, commentsData, options }) => {
  const [selectedChart, setSelectedChart] = useState('posts');

  const renderChart = () => {
    switch (selectedChart) {
      case 'posts':
        return <Doughnut data={postsData} options={options} style={{ width: '506px', height: '605px'}}/>;
      case 'impressions':
        return <Doughnut data={impressionsData} options={options} style={{ width: '506px', height: '605px'}}/>;
      case 'likes':
        return <Doughnut data={likesData} options={options} style={{ width: '506px', height: '605px'}}/>;
      case 'shares':
        return <Doughnut data={sharesData} options={options} style={{ width: '506px', height: '605px'}}/>;
      case 'comments':
        return <Doughnut data={commentsData} options={options} style={{ width: '506px', height: '605px'}}/>;
      default:
        return <Doughnut data={postsData} options={options} style={{ width: '506px', height: '605px'}}/>;
    }
  };

  return (
    <div>
      <div className="flex space-x-4 mb-6">
        <button onClick={() => setSelectedChart('posts')} className={`py-2 px-4 rounded-md shadow-sm text-sm font-medium ${selectedChart === 'posts' ? 'bg-[#7144F1] text-white' : 'bg-white text-gray-700'}`}>Posts</button>
        <button onClick={() => setSelectedChart('impressions')} className={`py-2 px-4 rounded-md shadow-sm text-sm font-medium ${selectedChart === 'impressions' ? 'bg-[#7144F1] text-white' : 'bg-white text-gray-700'}`}>Impressions</button>
        <button onClick={() => setSelectedChart('likes')} className={`py-2 px-4 rounded-md shadow-sm text-sm font-medium ${selectedChart === 'likes' ? 'bg-[#7144F1] text-white' : 'bg-white text-gray-700'}`}>Likes</button>
        <button onClick={() => setSelectedChart('shares')} className={`py-2 px-4 rounded-md shadow-sm text-sm font-medium ${selectedChart === 'shares' ? 'bg-[#7144F1] text-white' : 'bg-white text-gray-700'}`}>Shares</button>
        <button onClick={() => setSelectedChart('comments')} className={`py-2 px-4 rounded-md shadow-sm text-sm font-medium ${selectedChart === 'comments' ? 'bg-[#7144F1] text-white' : 'bg-white text-gray-700'}`}>Comments</button>
      </div>
      <div className='bg-white p-4 rounded-lg shadow-md'>
        {renderChart()}
      </div>
    </div>
  );
};

export default ChartSwitcherDonut