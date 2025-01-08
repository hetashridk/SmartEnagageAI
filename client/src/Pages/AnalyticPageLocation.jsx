import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import AnalyticSidebar from '../Components/AnalyticSidebar';
import ChartSwitcherDonut from '../Components/ChartSwitcherDonut';
import Chatbot from '../Components/Chatbot';
import Spinner from '../Components/Spinner';

// Register the necessary components with Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

function AnalyticPageLocation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleMinimize = () => setIsSidebarMinimized(!isSidebarMinimized);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ param: 'location' }),
        });
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return (
      <div className='h-screen flex'>
        <AnalyticSidebar isMinimized={isSidebarMinimized} toggleMinimize={toggleMinimize} />
        <div className={`w-[65%] ${isSidebarMinimized ? 'mx-8' : 'flex-1 p-6'}`}>
          <h2 className='text-2xl font-bold text-gray-800 mb-6'>Location Analytics</h2>
          {loading ? <Spinner /> : <p>No data available for location analytics.</p>}
        </div>
        <Chatbot toggleSidebar={toggleMinimize} />
      </div>
    );
  }

  const labels = data.posts ? Object.keys(data.posts.carousal) : [];

  const createChartData = (category) => ({
    labels,
    datasets: [
      {
        label: 'Carousal',
        data: data[category]?.carousal ? Object.values(data[category].carousal) : [],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Image',
        data: data[category]?.image ? Object.values(data[category].image) : [],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Video',
        data: data[category]?.video ? Object.values(data[category].video) : [],
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
      {
        label: 'Reel/Shorts',
        data: data[category]?.reel ? Object.values(data[category].reel) : [],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  });

  const postsData = createChartData('posts');
  const impressionsData = createChartData('impressions');
  const likesData = createChartData('likes');
  const sharesData = createChartData('shares');
  const commentsData = createChartData('comments');

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className='flex'>
      <AnalyticSidebar isMinimized={isSidebarMinimized} toggleMinimize={toggleMinimize} />
      <div className={`w-[65%] ${isSidebarMinimized ? 'mx-8' : 'flex-1 p-6'}`}>
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>Location Analytics</h2>
        {loading ? <Spinner /> : (
          <ChartSwitcherDonut
            postsData={postsData}
            impressionsData={impressionsData}
            likesData={likesData}
            sharesData={sharesData}
            commentsData={commentsData}
            options={options}
          />
        )}
      </div>
      <Chatbot toggleSidebar={toggleMinimize} />
    </div>
  );
}

export default AnalyticPageLocation;
