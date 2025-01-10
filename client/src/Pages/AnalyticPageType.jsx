import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, scales } from 'chart.js';
import AnalyticSidebar from '../Components/AnalyticSidebar';
import ChartSwitcherBar from '../Components/ChartSwitcherBar';
import Spinner from '../Components/Spinner';

// Register the necessary components with Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function AnalyticPageType() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [typeData, setTypeData] = useState(null);

  useEffect(() => {
    if (typeData) return null;
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ param: 'type' }),
        });

        const result = await response.json();
        setTypeData(result);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMinimize = () => {
    setIsSidebarMinimized(!isSidebarMinimized);
  };

  const labels = ['Carousal', 'Image', 'Video', 'Reel'];

  const postsData = {
    labels,
    datasets: [
      {
        label: '',
        data: [
          typeData?.posts.carousal,
          typeData?.posts.image,
          typeData?.posts.video,
          typeData?.posts.reel,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const impressionsData = {
    labels,
    datasets: [
      {
        label: '',
        data: [
          typeData?.impressions.carousal,
          typeData?.impressions.image,
          typeData?.impressions.video,
          typeData?.impressions.reel,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const likesData = {
    labels,
    datasets: [
      {
        label: '',
        data: [
          typeData?.likes.carousal,
          typeData?.likes.image,
          typeData?.likes.video,
          typeData?.likes.reel,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const sharesData = {
    labels,
    datasets: [
      {
        label: '',
        data: [
          typeData?.shares.carousal,
          typeData?.shares.image,
          typeData?.shares.video,
          typeData?.shares.reel,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const commentsData = {
    labels,
    datasets: [
      {
        label: '',
        data: [
          typeData?.comments.carousal,
          typeData?.comments.image,
          typeData?.comments.video,
          typeData?.comments.reel,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
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
      title: {
        display: true,
        text: 'Analytics by Type',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Type of Post',
          font: {
            size: 16,
            weight: 'bold',
            family: 'Arial',
          },
          padding: {
            top: 20,
         },
        },
        ticks: {
          font: {
            size: 14,
            weight: 'bold',
            family: 'Arial',
          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Frequency',
          font: {
            size: 16,
            weight: 'bold',
            family: 'Arial',
          },
          padding: {
            bottom: 20,
         },
        },
        ticks: {
          font: {
            size: 14,
            weight: 'bold',
            family: 'Arial',
          },
        },
      },
    },
  };

  return (
    <div className='h-screen flex'>
      <AnalyticSidebar isMinimized={isSidebarMinimized} toggleMinimize={toggleMinimize} />
      <div className={`w-[65%] ${isSidebarMinimized ? 'mx-8' : 'flex-1 p-6'}`}>
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>Type Analytics</h2>
        {loading ? <Spinner /> : (
          <ChartSwitcherBar
          postsData={postsData}
          impressionsData={impressionsData}
          likesData={likesData}
          sharesData={sharesData}
          commentsData={commentsData}
          options={options}
         />
        )}
      </div>
    </div>
  );
}

export default AnalyticPageType;