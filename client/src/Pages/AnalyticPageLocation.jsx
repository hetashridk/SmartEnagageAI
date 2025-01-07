import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import ChartDataLabels from 'chartjs-plugin-datalabels';
import AnalyticSidebar from '../Components/AnalyticSidebar';
import sampleData from '../utils/SampleData.json';
import ChartSwitcherDonut from '../Components/ChartSwitcherDonut';
import Chatbot from '../Components/Chatbot';

// Register the necessary components with Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

function AnalyticPageLocation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

  // useEffect(() => {
  //   // Register the datalabels plugin only for this component
  //   ChartJS.register(ChartDataLabels);

  //   return () => {
  //     // Unregister the datalabels plugin when the component unmounts
  //     ChartJS.unregister(ChartDataLabels);
  //   };
  // }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMinimize = () => {
    setIsSidebarMinimized(!isSidebarMinimized);
  };

  const labels = Object.keys(sampleData.location.posts.carousal);

  // Generate a unique light color for each country
  const generateColors = (numColors) => {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      const color = `hsl(${(i * 360) / numColors}, 70%, 80%)`; // Light color with 80% lightness
      colors.push(color);
    }
    return colors;
  };

  const colors = generateColors(labels.length);

  const postsData = {
    labels,
    datasets: [
      {
        label: 'Carousal',
        data: Object.values(sampleData.location.posts.carousal),
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('80%', '60%')), 
        borderWidth: 1,
      },
      {
        label: 'Image',
        data: Object.values(sampleData.location.posts.image),
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('80%', '60%')), 
        borderWidth: 1,
      },
      {
        label: 'Video',
        data: Object.values(sampleData.location.posts.video),
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('80%', '60%')), 
        borderWidth: 1,
      },
      {
        label: 'Reel',
        data: Object.values(sampleData.location.posts.reel),
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('80%', '60%')), 
        borderWidth: 1,
      },
    ],
  };

  const impressionsData = {
    labels,
    datasets: [
      {
        label: 'Carousal',
        data: Object.values(sampleData.location.impressions.carousal),
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('80%', '60%')), 
        borderWidth: 1,
      },
      {
        label: 'Image',
        data: Object.values(sampleData.location.impressions.image),
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('80%', '60%')), 
        borderWidth: 1,
      },
      {
        label: 'Video',
        data: Object.values(sampleData.location.impressions.video),
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('80%', '60%')), 
        borderWidth: 1,
      },
      {
        label: 'Reel',
        data: Object.values(sampleData.location.impressions.reel),
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('80%', '60%')), 
        borderWidth: 1,
      },
    ],
  };

  const likesData = {
    labels,
    datasets: [
      {
        label: 'Carousal',
        data: Object.values(sampleData.location.likes.carousal),
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('80%', '60%')), 
        borderWidth: 1,
      },
      {
        label: 'Image',
        data: Object.values(sampleData.location.likes.image),
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('80%', '60%')), 
        borderWidth: 1,
      },
      {
        label: 'Video',
        data: Object.values(sampleData.location.likes.video),
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('80%', '60%')), 
        borderWidth: 1,
      },
      {
        label: 'Reel',
        data: Object.values(sampleData.location.likes.reel),
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('80%', '60%')), 
        borderWidth: 1,
      },
    ],
  };

  const sharesData = {
    labels,
    datasets: [
      {
        label: 'Carousal',
        data: Object.values(sampleData.location.shares.carousal),
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('80%', '60%')), 
        borderWidth: 1,
      },
      {
        label: 'Image',
        data: Object.values(sampleData.location.shares.image),
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('80%', '60%')), 
        borderWidth: 1,
      },
      {
        label: 'Video',
        data: Object.values(sampleData.location.shares.video),
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('80%', '60%')), 
        borderWidth: 1,
      },
      {
        label: 'Reel',
        data: Object.values(sampleData.location.shares.reel),
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('80%', '60%')), 
        borderWidth: 1,
      },
    ],
  };

  const commentsData = {
    labels,
    datasets: [
      {
        label: 'Carousal',
        data: Object.values(sampleData.location.comments.carousal),
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('80%', '60%')), 
        borderWidth: 1,
      },
      {
        label: 'Image',
        data: Object.values(sampleData.location.comments.image),
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('80%', '60%')), 
        borderWidth: 1,
      },
      {
        label: 'Video',
        data: Object.values(sampleData.location.comments.video),
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('80%', '60%')), 
        borderWidth: 1,
      },
      {
        label: 'Reel',
        data: Object.values(sampleData.location.comments.reel),
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('80%', '60%')), 
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            const data = tooltipItem.dataset.data;
            const total = data.reduce((acc, value) => acc + value, 0);
            const currentValue = data[tooltipItem.dataIndex];
            const percentage = ((currentValue / total) * 100).toFixed(2);
            return `${tooltipItem.dataset.label}: ${percentage}%`;
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
        font: {
          weight: 'bold',
          size: 10
        },
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