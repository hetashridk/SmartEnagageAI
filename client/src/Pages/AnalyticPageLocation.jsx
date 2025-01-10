import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import AnalyticSidebar from '../Components/AnalyticSidebar';
import ChartSwitcherDonut from '../Components/ChartSwitcherDonut';
import Chatbot from '../Components/Chatbot';
import Spinner from '../Components/Spinner';

ChartJS.register(ArcElement, Tooltip, Legend);

function AnalyticPageLocation() {
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
          body: JSON.stringify({ param: 'location' }),
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        if (result) {
          setData(result);
        } else {
          throw new Error('No data available for location analytics');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  const labels = data ? Object.keys(data.posts.carousal) : [];
  const colors = generateColors(labels.length);
  console.log('colors:', colors);
  console.log('colors:', colors);
  
  const createChartData = (category) =>
    data
      ? {
          labels,
          datasets: [
            {
              label: 'Carousal',
              data: Object.values(data[category].carousal),
              backgroundColor: colors,
              borderColor: colors.map((color) => color.replace('80%', '60%')),
              borderWidth: 1,
            },
            {
              label: 'Image',
              data: Object.values(data[category].image),
              backgroundColor: colors,
              borderColor: colors.map((color) => color.replace('80%', '60%')),
              borderWidth: 1,
            },
            {
              label: 'Video',
              data: Object.values(data[category].video),
              backgroundColor: colors,
              borderColor: colors.map((color) => color.replace('80%', '60%')),
              borderWidth: 1,
            },
            {
              label: 'Reel',
              data: Object.values(data[category].reel),
              backgroundColor: colors,
              borderColor: colors.map((color) => color.replace('80%', '60%')),
              borderWidth: 1,
            },
          ],
        }
      : null;

      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            enabled: true,
            callbacks: {
              title: function (tooltipItems) {
                return tooltipItems[0].dataset.label;
              },
              label: function (tooltipItem) {
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
        {loading ? (
          <Spinner />
        ) : error ? (
          <div className='text-red-500 font-bold'>Error: {error}</div>
        ) : data ? (
          <ChartSwitcherDonut
            postsData={createChartData('posts')}
            impressionsData={createChartData('impressions')}
            likesData={createChartData('likes')}
            sharesData={createChartData('shares')}
            commentsData={createChartData('comments')}
            options={options}
          />
        ) : (
          <div className='text-red-500 font-bold'>No data available</div>
        )}
      </div>
      <Chatbot toggleSidebar={toggleMinimize} />
    </div>
  );
}

export default AnalyticPageLocation;