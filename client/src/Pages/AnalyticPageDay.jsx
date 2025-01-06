import React, { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import AnalyticSidebar from '../Components/AnalyticSidebar';
import sampleData from '../utils/SampleData.json';
import ChartSwitcherGroupedBar from '../Components/ChartSwitcherGroupedBar';
import Chatbot from '../Components/Chatbot';

// Register the necessary components with Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function AnalyticPageDay() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    const toggleMinimize = () => {
      setIsSidebarMinimized(!isSidebarMinimized);
    };
  
  const labelsPosts = Object.keys(sampleData.day_and_time.posts);
  const labelsImpressions = Object.keys(sampleData.day_and_time.impressions);
  const labelsLikes = Object.keys(sampleData.day_and_time.likes);
  const labelsComments = Object.keys(sampleData.day_and_time.comments);
  const labelsShares = Object.keys(sampleData.day_and_time.shares);

  const weekdayDataPosts = {
    labels: labelsPosts,
    datasets: [
      {
        label: 'Morning',
        data: labelsPosts.map(label => sampleData.day_and_time.posts[label][0].morning),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Afternoon',
        data: labelsPosts.map(label => sampleData.day_and_time.posts[label][0].afternoon),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Evening',
        data: labelsPosts.map(label => sampleData.day_and_time.posts[label][0].evening),
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
      {
        label: 'Night',
        data: labelsPosts.map(label => sampleData.day_and_time.posts[label][0].night),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const weekendDataPosts = {
    labels: labelsPosts,
    datasets: [
      {
        label: 'Morning',
        data: labelsPosts.map(label => sampleData.day_and_time.posts[label][1].morning),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Afternoon',
        data: labelsPosts.map(label => sampleData.day_and_time.posts[label][1].afternoon),
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
      {
        label: 'Evening',
        data: labelsPosts.map(label => sampleData.day_and_time.posts[label][1].evening),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Night',
        data: labelsPosts.map(label => sampleData.day_and_time.posts[label][1].night),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };



  const weekdayDataImpressions = {
    labels: labelsImpressions,
    datasets: [
      {
        label: 'Morning',
        data: labelsImpressions.map(label => sampleData.day_and_time.impressions[label][0].morning),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Afternoon',
        data: labelsImpressions.map(label => sampleData.day_and_time.impressions[label][0].afternoon),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Evening',
        data: labelsImpressions.map(label => sampleData.day_and_time.impressions[label][0].evening),
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
      {
        label: 'Night',
        data: labelsImpressions.map(label => sampleData.day_and_time.impressions[label][0].night),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const weekendDataImpressions = {
    labels: labelsImpressions,
    datasets: [
      {
        label: 'Morning',
        data: labelsImpressions.map(label => sampleData.day_and_time.impressions[label][1].morning),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Afternoon',
        data: labelsImpressions.map(label => sampleData.day_and_time.impressions[label][1].afternoon),
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
      {
        label: 'Evening',
        data: labelsImpressions.map(label => sampleData.day_and_time.impressions[label][1].evening),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Night',
        data: labelsImpressions.map(label => sampleData.day_and_time.impressions[label][1].night),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };



  const weekdayDataLikes = {
    labels: labelsLikes,
    datasets: [
      {
        label: 'Morning',
        data: labelsLikes.map(label => sampleData.day_and_time.likes[label][0].morning),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Afternoon',
        data: labelsLikes.map(label => sampleData.day_and_time.likes[label][0].afternoon),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Evening',
        data: labelsLikes.map(label => sampleData.day_and_time.likes[label][0].evening),
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
      {
        label: 'Night',
        data: labelsLikes.map(label => sampleData.day_and_time.likes[label][0].night),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const weekendDataLikes = {
    labels: labelsLikes,
    datasets: [
      {
        label: 'Morning',
        data: labelsLikes.map(label => sampleData.day_and_time.likes[label][1].morning),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Afternoon',
        data: labelsLikes.map(label => sampleData.day_and_time.likes[label][1].afternoon),
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
      {
        label: 'Evening',
        data: labelsLikes.map(label => sampleData.day_and_time.likes[label][1].evening),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Night',
        data: labelsLikes.map(label => sampleData.day_and_time.likes[label][1].night),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };



  const weekdayDataComments = {
    labels: labelsComments,
    datasets: [
      {
        label: 'Morning',
        data: labelsComments.map(label => sampleData.day_and_time.comments[label][0].morning),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Afternoon',
        data: labelsComments.map(label => sampleData.day_and_time.comments[label][0].afternoon),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Evening',
        data: labelsComments.map(label => sampleData.day_and_time.comments[label][0].evening),
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
      {
        label: 'Night',
        data: labelsComments.map(label => sampleData.day_and_time.comments[label][0].night),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const weekendDataComments = {
    labels: labelsComments,
    datasets: [
      {
        label: 'Morning',
        data: labelsComments.map(label => sampleData.day_and_time.comments[label][1].morning),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Afternoon',
        data: labelsComments.map(label => sampleData.day_and_time.comments[label][1].afternoon),
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
      {
        label: 'Evening',
        data: labelsComments.map(label => sampleData.day_and_time.comments[label][1].evening),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Night',
        data: labelsComments.map(label => sampleData.day_and_time.comments[label][1].night),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };



  const weekdayDataShares = {
    labels: labelsShares,
    datasets: [
      {
        label: 'Morning',
        data: labelsShares.map(label => sampleData.day_and_time.shares[label][0].morning),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Afternoon',
        data: labelsShares.map(label => sampleData.day_and_time.shares[label][0].afternoon),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Evening',
        data: labelsShares.map(label => sampleData.day_and_time.shares[label][0].evening),
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
      {
        label: 'Night',
        data: labelsShares.map(label => sampleData.day_and_time.shares[label][0].night),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const weekendDataShares = {
    labels: labelsShares,
    datasets: [
      {
        label: 'Morning',
        data: labelsShares.map(label => sampleData.day_and_time.shares[label][1].morning),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Afternoon',
        data: labelsShares.map(label => sampleData.day_and_time.shares[label][1].afternoon),
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
      {
        label: 'Evening',
        data: labelsShares.map(label => sampleData.day_and_time.shares[label][1].evening),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Night',
        data: labelsShares.map(label => sampleData.day_and_time.shares[label][1].night),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
        barThickness: 50, // Adjust this value to control the thickness of the bars
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
          <ChartSwitcherGroupedBar
            postsData={weekendDataPosts}
            impressionsData={weekendDataImpressions}
            likesData={weekendDataLikes}
            commentsData={weekendDataComments}
            sharesData={weekendDataShares}
            options={options}
          />
        </div>
      </div>
      <Chatbot toggleSidebar={toggleMinimize} />
    </div>
  );
}

export default AnalyticPageDay;