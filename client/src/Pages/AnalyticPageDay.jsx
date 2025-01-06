// import React from 'react';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import AnalyticSidebar from '../Components/AnalyticSidebar';
// import ChartSwitcherGroupedBar from '../Components/ChartSwitcherGroupedBar';
// import sampleData from '../utils/SampleData.json';

// // Register the necessary components with Chart.js
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// function AnalyticPageDay() {
//   const labels = Object.keys(sampleData.day_and_time.posts);

//   const postsData = {
//     labels,
//     datasets: [
//       {
//         label: 'Carousal',
//         data: sampleData.day_and_time.posts.carousal.map(item => item.morning),
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//       {
//         label: 'Image',
//         data: sampleData.day_and_time.posts.carousal.map(item => item.afternoon),
//         backgroundColor: 'rgba(153, 102, 255, 0.2)',
//         borderColor: 'rgba(153, 102, 255, 1)',
//         borderWidth: 1,
//       },
//       {
//         label: 'Video',
//         data: sampleData.day_and_time.posts.carousal.map(item => item.evening),
//         backgroundColor: 'rgba(255, 159, 64, 0.2)',
//         borderColor: 'rgba(255, 159, 64, 1)',
//         borderWidth: 1,
//       },
//       {
//         label: 'Reel/Shorts',
//         data: sampleData.day_and_time.posts.carousal.map(item => item.night),
//         backgroundColor: 'rgba(54, 162, 235, 0.2)',
//         borderColor: 'rgba(54, 162, 235, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     scales: {
//       x: {
//         stacked: true,
//       },
//       y: {
//         stacked: true,
//       },
//     },
//   };

//   return (
//     <div className='h-screen flex'>
//       <AnalyticSidebar />
//       <div className='flex-1 p-6'>
//         <h2 className='text-2xl font-bold text-gray-800 mb-6'>Day/Time Analytics</h2>
//         <ChartSwitcherGroupedBar
//           postsData={postsData}
//           options={options}
//         />
//       </div>
//     </div>
//   );
// }

// export default AnalyticPageDay;


// import React from 'react';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import AnalyticSidebar from '../Components/AnalyticSidebar';
// import sampleData from '../utils/SampleData.json';
// import ChartSwitcherGroupedBar from '../Components/ChartSwitcherGroupedBar';

// // Register the necessary components with Chart.js
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// function AnalyticPageDay() {
//   const labels = Object.keys(sampleData.day_and_time.posts);

//   const postsData = {
//     labels,
//     datasets: [
//       {
//         label: 'Weekday Morning',
//         data: labels.map(label => sampleData.day_and_time.posts[label][0].morning),
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//         borderColor: 'rgba(255, 99, 132, 1)',
//         borderWidth: 1,
//       },
//       {
//         label: 'Weekend Morning',
//         data: labels.map(label => sampleData.day_and_time.posts[label][1].morning),
//         backgroundColor: 'rgba(54, 162, 235, 0.2)',
//         borderColor: 'rgba(54, 162, 235, 1)',
//         borderWidth: 1,
//       },
//       {
//         label: 'Weekday Afternoon',
//         data: labels.map(label => sampleData.day_and_time.posts[label][0].afternoon),
//         backgroundColor: 'rgba(255, 206, 86, 0.2)',
//         borderColor: 'rgba(255, 206, 86, 1)',
//         borderWidth: 1,
//       },
//       {
//         label: 'Weekend Afternoon',
//         data: labels.map(label => sampleData.day_and_time.posts[label][1].afternoon),
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//       {
//         label: 'Weekday Evening',
//         data: labels.map(label => sampleData.day_and_time.posts[label][0].evening),
//         backgroundColor: 'rgba(153, 102, 255, 0.2)',
//         borderColor: 'rgba(153, 102, 255, 1)',
//         borderWidth: 1,
//       },
//       {
//         label: 'Weekend Evening',
//         data: labels.map(label => sampleData.day_and_time.posts[label][1].evening),
//         backgroundColor: 'rgba(255, 159, 64, 0.2)',
//         borderColor: 'rgba(255, 159, 64, 1)',
//         borderWidth: 1,
//       },
//       {
//         label: 'Weekday Night',
//         data: labels.map(label => sampleData.day_and_time.posts[label][0].night),
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//         borderColor: 'rgba(255, 99, 132, 1)',
//         borderWidth: 1,
//       },
//       {
//         label: 'Weekend Night',
//         data: labels.map(label => sampleData.day_and_time.posts[label][1].night),
//         backgroundColor: 'rgba(54, 162, 235, 0.2)',
//         borderColor: 'rgba(54, 162, 235, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     scales: {
//       x: {
//         stacked: true,
//         barThickness: 50, // Adjust this value to control the thickness of the bars
//       },
//       y: {
//         stacked: true,
//       },
//     },
//   };

//   return (
//     <div className='h-screen flex'>
//       <AnalyticSidebar />
//       <div className='flex-1 p-6'>
//         <h2 className='text-2xl font-bold text-gray-800 mb-6'>Day/Time Analytics</h2>
//         <ChartSwitcherGroupedBar
//           postsData={postsData}
//           options={options}
//         />
//       </div>
//     </div>
//   );
// }

// export default AnalyticPageDay;




// weekend and weekday in two different graphs

import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import AnalyticSidebar from '../Components/AnalyticSidebar';
import sampleData from '../utils/SampleData.json';
import ChartSwitcherGroupedBar from '../Components/ChartSwitcherGroupedBar';

// Register the necessary components with Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function AnalyticPageDay() {
  const labels = Object.keys(sampleData.day_and_time.posts);

  const weekdayData = {
    labels,
    datasets: [
      {
        label: 'Morning',
        data: labels.map(label => sampleData.day_and_time.posts[label][0].morning),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Afternoon',
        data: labels.map(label => sampleData.day_and_time.posts[label][0].afternoon),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Evening',
        data: labels.map(label => sampleData.day_and_time.posts[label][0].evening),
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
      {
        label: 'Night',
        data: labels.map(label => sampleData.day_and_time.posts[label][0].night),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const weekendData = {
    labels,
    datasets: [
      {
        label: 'Morning',
        data: labels.map(label => sampleData.day_and_time.posts[label][1].morning),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Afternoon',
        data: labels.map(label => sampleData.day_and_time.posts[label][1].afternoon),
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
      {
        label: 'Evening',
        data: labels.map(label => sampleData.day_and_time.posts[label][1].evening),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Night',
        data: labels.map(label => sampleData.day_and_time.posts[label][1].night),
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
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <div className='flex'>
      <AnalyticSidebar />
      <div className='flex-1 p-6'>
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>Day/Time Analytics</h2>
        <div className='mb-6'>
          <h3 className='text-xl font-bold text-gray-800 mb-4'>Weekday</h3>
          <ChartSwitcherGroupedBar
            postsData={weekdayData}
            options={options}
          />
        </div>
        <div>
          <h3 className='text-xl font-bold text-gray-800 mb-4'>Weekend</h3>
          <ChartSwitcherGroupedBar
            postsData={weekendData}
            options={options}
          />
        </div>
      </div>
    </div>
  );
}

export default AnalyticPageDay;