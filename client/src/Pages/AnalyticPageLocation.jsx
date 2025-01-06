import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import AnalyticSidebar from '../Components/AnalyticSidebar';
import sampleData from '../utils/SampleData.json';
import ChartSwitcherDonut from '../Components/ChartSwitcherDonut';

// Register the necessary components with Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

function AnalyticPageLocation() {
  const labels = Object.keys(sampleData.location.posts.carousal);

  const postsData = {
    labels,
    datasets: [
      {
        label: 'Carousal',
        data: Object.values(sampleData.location.posts.carousal),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Image',
        data: Object.values(sampleData.location.posts.image),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Video',
        data: Object.values(sampleData.location.posts.video),
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
      {
        label: 'Reel/Shorts',
        data: Object.values(sampleData.location.posts.reel),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
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
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Image',
        data: Object.values(sampleData.location.impressions.image),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Video',
        data: Object.values(sampleData.location.impressions.video),
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
      {
        label: 'Reel/Shorts',
        data: Object.values(sampleData.location.impressions.reel),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
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
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Image',
        data: Object.values(sampleData.location.likes.image),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Video',
        data: Object.values(sampleData.location.likes.video),
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
      {
        label: 'Reel/Shorts',
        data: Object.values(sampleData.location.likes.reel),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
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
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Image',
        data: Object.values(sampleData.location.shares.image),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Video',
        data: Object.values(sampleData.location.shares.video),
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
      {
        label: 'Reel/Shorts',
        data: Object.values(sampleData.location.shares.reel),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
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
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Image',
        data: Object.values(sampleData.location.comments.image),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Video',
        data: Object.values(sampleData.location.comments.video),
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
      {
        label: 'Reel/Shorts',
        data: Object.values(sampleData.location.comments.reel),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
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
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className='flex'>
      <AnalyticSidebar />
      <div className='flex-1 p-6'>
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>Location Analytics</h2>
        {/* <div className='w-[100%] h-[100%]'> */}
        <ChartSwitcherDonut
          postsData={postsData}
          impressionsData={impressionsData}
          likesData={likesData}
          sharesData={sharesData}
          commentsData={commentsData}
          options={options}
        />
        {/* </div> */}
      </div>
    </div>
  );
}

export default AnalyticPageLocation;