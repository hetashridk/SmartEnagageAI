import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import AnalyticSidebar from '../Components/AnalyticSidebar';
import ChartSwitcherBar from '../Components/ChartSwitcherBar';
import sampleData from '../utils/SampleData.json';

// Register the necessary components with Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function AnalyticPageType() {
  const labels = ['Carousal', 'Image', 'Video', 'Reel/Shorts'];

  const postsData = {
    labels,
    datasets: [
      {
        label: 'Posts',
        data: [
          sampleData.type.posts.carousal,
          sampleData.type.posts.image,
          sampleData.type.posts.video,
          sampleData.type.posts.reel,
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
        label: 'Impressions',
        data: [
          sampleData.type.impressions.carousal,
          sampleData.type.impressions.image,
          sampleData.type.impressions.video,
          sampleData.type.impressions.reel,
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
        label: 'Likes',
        data: [
          sampleData.type.likes.carousal,
          sampleData.type.likes.image,
          sampleData.type.likes.video,
          sampleData.type.likes.reel,
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
        label: 'Shares',
        data: [
          sampleData.type.shares.carousal,
          sampleData.type.shares.image,
          sampleData.type.shares.video,
          sampleData.type.shares.reel,
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
        label: 'Comments',
        data: [
          sampleData.type.comments.carousal,
          sampleData.type.comments.image,
          sampleData.type.comments.video,
          sampleData.type.comments.reel,
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
  };

  return (
    <div className='h-screen flex'>
      <AnalyticSidebar />
      <div className='flex-1 p-6'>
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>Type Analytics</h2>
        <ChartSwitcherBar
          postsData={postsData}
          impressionsData={impressionsData}
          likesData={likesData}
          sharesData={sharesData}
          commentsData={commentsData}
          options={options}
        />
      </div>
    </div>
  );
}

export default AnalyticPageType;