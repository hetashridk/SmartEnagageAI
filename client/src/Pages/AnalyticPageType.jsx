import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import AnalyticSidebar from '../Components/AnalyticSidebar';
import ChartSwitcherBar from '../Components/ChartSwitcherBar';
import Chatbot from '../Components/Chatbot';
import Spinner from '../Components/Spinner';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function AnalyticPageType() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ param: 'type' }),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }


        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleMinimize = () => setIsSidebarMinimized(!isSidebarMinimized);

  const labels = ['Carousal', 'Image', 'Video', 'Reel/Shorts'];
  const defaultDataset = [0, 0, 0, 0];

  const createChartData = (category) => {
    const categoryData = data ? data[category] || {} : {};
    return {
      labels,
      datasets: [
        {
          data: [
            categoryData.carousal || 0,
            categoryData.image || 0,
            categoryData.video || 0,
            categoryData.reel || 0
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1,
        },
      ],
    };
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Analytics by Type' },
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

  if (error) return <div>Error: {error}</div>;
  

  return (
    <div className='h-screen flex'>
      <AnalyticSidebar isMinimized={isSidebarMinimized} toggleMinimize={toggleMinimize} />
      <div className={`w-[65%] ${isSidebarMinimized ? 'mx-8' : 'flex-1 p-6'}`}>
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>Type Analytics</h2>
        {loading ? (
          <Spinner />
        ) : (
          <ChartSwitcherBar
            postsData={createChartData('posts')}
            impressionsData={createChartData('impressions')}
            likesData={createChartData('likes')}
            sharesData={createChartData('shares')}
            commentsData={createChartData('comments')}
            options={options}
          />
        )}
      </div>
      <Chatbot toggleSidebar={toggleMinimize} />
    </div>
  );
}

export default AnalyticPageType;
