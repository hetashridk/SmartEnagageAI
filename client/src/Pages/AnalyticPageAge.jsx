import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import AnalyticSidebar from '../Components/AnalyticSidebar';
import ChartSwitcher from '../Components/ChartSwitcherHistogram';
import Chatbot from '../Components/Chatbot';
import Spinner from '../Components/Spinner';

// Register the necessary components with Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function AnalyticPageAge() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ageData, setAgeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch('/api/data', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({ param: 'age' }),
        // });

        // const result = await response.json();
        const result = null
        setAgeData(result);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleMinimize = () => {
    setIsSidebarMinimized(!isSidebarMinimized);
  };

  const createChartData = (dataType) => {
    if (!ageData) return null;
    const labels = ageData.posts.map(item => item.range);
    return {
      labels,
      datasets: [
        {
          label: 'Carousal',
          data: ageData[dataType].map(item => item.carousal_count),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
        {
          label: 'Image',
          data: ageData[dataType].map(item => item.image_count),
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1,
        },
        {
          label: 'Video',
          data: ageData[dataType].map(item => item.video_count),
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          borderColor: 'rgba(255, 159, 64, 1)',
          borderWidth: 1,
        },
        {
          label: 'Reel/Shorts',
          data: ageData[dataType].map(item => item.reel_count),
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    };
  };

  const postsData = createChartData('posts');
  const impressionsData = createChartData('impressions');
  const likesData = createChartData('likes');
  const sharesData = createChartData('shares');
  const commentsData = createChartData('comments');



  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
        barThickness: 50,
        title: {
          display: true,
          text: 'Age Range',
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
        stacked: true,
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
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>Age Analytics</h2>
        {loading ? <Spinner /> : (
          <ChartSwitcher
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

export default AnalyticPageAge;
