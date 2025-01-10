import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import AnalyticSidebar from '../Components/AnalyticSidebar';
import ChartSwitcherDonut from '../Components/ChartSwitcherDonut';
import Chatbot from '../Components/Chatbot';

ChartJS.register(ArcElement, Tooltip, Legend);

function AnalyticPageLocation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  const [data, setData] = useState(null); // State to store fetched data

  useEffect(() => {
    fetch('/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ param: 'location' }),
    })
      .then((response) => response.json())
      .then((fetchedData) => setData(fetchedData))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMinimize = () => {
    setIsSidebarMinimized(!isSidebarMinimized);
  };

  const generateColors = (numColors) => {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      const color = `hsl(${(i * 360) / numColors}, 70%, 80%)`;
      colors.push(color);
    }
    return colors;
  };

  if (!data) {
    return <div>Loading...</div>; // Display a loading message until data is fetched
  }

  const labels = Object.keys(data.posts.carousal);
  const colors = generateColors(labels.length);

  const createDataset = (dataType) => [
    {
      label: 'Carousal',
      data: Object.values(data[dataType].carousal),
      backgroundColor: colors,
      borderColor: colors.map((color) => color.replace('80%', '60%')),
      borderWidth: 1,
    },
    {
      label: 'Image',
      data: Object.values(data[dataType].image),
      backgroundColor: colors,
      borderColor: colors.map((color) => color.replace('80%', '60%')),
      borderWidth: 1,
    },
    {
      label: 'Video',
      data: Object.values(data[dataType].video),
      backgroundColor: colors,
      borderColor: colors.map((color) => color.replace('80%', '60%')),
      borderWidth: 1,
    },
    {
      label: 'Reel',
      data: Object.values(data[dataType].reel),
      backgroundColor: colors,
      borderColor: colors.map((color) => color.replace('80%', '60%')),
      borderWidth: 1,
    },
  ];

  const postsData = {
    labels,
    datasets: createDataset('posts'),
  };
  const impressionsData = {
    labels,
    datasets: createDataset('impressions'),
  };
  const likesData = {
    labels,
    datasets: createDataset('likes'),
  };
  const sharesData = {
    labels,
    datasets: createDataset('shares'),
  };
  const commentsData = {
    labels,
    datasets: createDataset('comments'),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      tooltip: {
        enabled: true,
        callbacks: {
          title: (tooltipItems) => tooltipItems[0].dataset.label,
          label: (tooltipItem) => {
            const data = tooltipItem.dataset.data;
            const total = data.reduce((acc, value) => acc + value, 0);
            const currentValue = data[tooltipItem.dataIndex];
            const percentage = ((currentValue / total) * 100).toFixed(2);
            return `${tooltipItem.label}: ${percentage}%`;
          },
        },
      },
      datalabels: {
        formatter: (value, context) => {
          const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
          const percentage = ((value / total) * 100).toFixed(2);
          return `${percentage}%`;
        },
        color: '#000000',
        font: { weight: 'bold', size: 10 },
      },
    },
    maintainAspectRatio: false,
    cutout: '50%',
    spacing: 5,
  };

  return (
    <div className='flex'>
      <AnalyticSidebar isMinimized={isSidebarMinimized} toggleMinimize={toggleMinimize} />
      <div className={`w-[65%] ${isSidebarMinimized ? 'mx-8' : 'flex-1 p-6'}`}>
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>Location Analytics</h2>
        <div className='space-y-6'>
          <ChartSwitcherDonut
            postsData={postsData}
            impressionsData={impressionsData}
            likesData={likesData}
            sharesData={sharesData}
            commentsData={commentsData}
            options={options}
          />
        </div>
      </div>
      <Chatbot toggleSidebar={toggleMinimize} />
    </div>
  );
}

export default AnalyticPageLocation;
