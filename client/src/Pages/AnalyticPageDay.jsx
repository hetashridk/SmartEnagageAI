import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import AnalyticSidebar from '../Components/AnalyticSidebar';
import ChartSwitcherGroupedBar from '../Components/ChartSwitcherGroupedBar';
import Chatbot from '../Components/Chatbot';

// Register the necessary components with Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function AnalyticPageDay() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ param: 'day' }),
    })
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMinimize = () => {
    setIsSidebarMinimized(!isSidebarMinimized);
  };



  const { day_and_time } = data;

  const generateDataset = (data, labels) => ({
    labels,
    datasets: [
      {
        label: 'Morning',
        data: labels.map(label => data[label][0].morning),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Afternoon',
        data: labels.map(label => data[label][0].afternoon),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Evening',
        data: labels.map(label => data[label][0].evening),
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
      {
        label: 'Night',
        data: labels.map(label => data[label][0].night),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  });

  const labelsPosts = Object.keys(day_and_time.posts);
  const labelsImpressions = Object.keys(day_and_time.impressions);
  const labelsLikes = Object.keys(day_and_time.likes);
  const labelsComments = Object.keys(day_and_time.comments);
  const labelsShares = Object.keys(day_and_time.shares);

  const weekdayDataPosts = generateDataset(day_and_time.posts, labelsPosts);
  const weekendDataPosts = generateDataset(day_and_time.posts, labelsPosts);
  const weekdayDataImpressions = generateDataset(day_and_time.impressions, labelsImpressions);
  const weekendDataImpressions = generateDataset(day_and_time.impressions, labelsImpressions);
  const weekdayDataLikes = generateDataset(day_and_time.likes, labelsLikes);
  const weekendDataLikes = generateDataset(day_and_time.likes, labelsLikes);
  const weekdayDataComments = generateDataset(day_and_time.comments, labelsComments);
  const weekendDataComments = generateDataset(day_and_time.comments, labelsComments);
  const weekdayDataShares = generateDataset(day_and_time.shares, labelsShares);
  const weekendDataShares = generateDataset(day_and_time.shares, labelsShares);

  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
        barThickness: 50,
        title: {
          display: true,
          text: 'Type of Post',
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Count',
        },
      },
    },
  };

  return (
    <div className='flex'>
      <AnalyticSidebar isMinimized={isSidebarMinimized} toggleMinimize={toggleMinimize} />
      <div className={`w-[65%] ${isSidebarMinimized ? 'mx-8' : 'flex-1 p-6'}`}>
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>Day/Time Analytics</h2>
        <div className='mb-6'>
          <h3 className='text-xl font-bold text-gray-800 mb-4'>Weekday</h3>
          <ChartSwitcherGroupedBar
            postsData={weekdayDataPosts}
            impressionsData={weekdayDataImpressions}
            likesData={weekdayDataLikes}
            commentsData={weekdayDataComments}
            sharesData={weekdayDataShares}
            options={options}
          />
        </div>
        <div>
          <h3 className='text-xl font-bold text-gray-800 mb-4'>Weekend</h3>
          {!data ? <Spinner /> :<ChartSwitcherGroupedBar
            postsData={weekendDataPosts}
            impressionsData={weekendDataImpressions}
            likesData={weekendDataLikes}
            commentsData={weekendDataComments}
            sharesData={weekendDataShares}
            options={options}
          />}
        </div>
      </div>
      <Chatbot toggleSidebar={toggleMinimize} />
    </div>
  );
}

export default AnalyticPageDay;