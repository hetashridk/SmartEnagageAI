import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  PointElement,
  Legend,
  LineElement
} from "chart.js";
import AnalyticSidebar from "../Components/AnalyticSidebar";
// import ChartDataLabels from 'chartjs-plugin-datalabels';
import sampleData from "../utils/SampleData.json";
import ChartSwitcherGroupedBar from "../Components/ChartSwitcherGroupedBar";
import Chatbot from "../Components/Chatbot";
import ChartSwitcherLine from "../Components/ChartSwitcherLine";

// Register the necessary components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

function AnalyticPageDay() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

  // useEffect(() => {
  //   // Register the datalabels plugin only for this component
  //   ChartJS.register(ChartDataLabels);

  //   return () => {
  //     // Unregister the datalabels plugin when the component unmounts
  //     ChartJS.unregister(ChartDataLabels);
  //   };
  // }, []);

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
        label: "Carousel",
        data: labelsPosts.map(
          (label) => sampleData.day_and_time.posts[label][0].carousel
        ),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Reel",
        data: labelsPosts.map(
          (label) => sampleData.day_and_time.posts[label][0].reel
        ),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Image",
        data: labelsPosts.map(
          (label) => sampleData.day_and_time.posts[label][0].image
        ),
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
      {
        label: "Video",
        data: labelsPosts.map(
          (label) => sampleData.day_and_time.posts[label][0].video
        ),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const weekendDataPosts = {
    labels: labelsPosts,
    datasets: [
      {
        label: "Carousel",
        data: labelsPosts.map(
          (label) => sampleData.day_and_time.posts[label][1].carousel
        ),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Reel",
        data: labelsPosts.map(
          (label) => sampleData.day_and_time.posts[label][1].reel
        ),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Image",
        data: labelsPosts.map(
          (label) => sampleData.day_and_time.posts[label][1].image
        ),
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
      {
        label: "Video",
        data: labelsPosts.map(
          (label) => sampleData.day_and_time.posts[label][1].video
        ),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const weekdayDataImpressions = {
    labels: labelsImpressions,
    datasets: [
      {
        label: "Carousel",
        data: labelsImpressions.map(
          (label) => sampleData.day_and_time.impressions[label][0].carousel
        ),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Reel",
        data: labelsImpressions.map(
          (label) => sampleData.day_and_time.impressions[label][0].reel
        ),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Image",
        data: labelsImpressions.map(
          (label) => sampleData.day_and_time.impressions[label][0].image
        ),
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
      {
        label: "Video",
        data: labelsImpressions.map(
          (label) => sampleData.day_and_time.impressions[label][0].video
        ),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const weekendDataImpressions = {
    labels: labelsImpressions,
    datasets: [
      {
        label: "Carousel",
        data: labelsImpressions.map(
          (label) => sampleData.day_and_time.impressions[label][1].carousel
        ),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Reel",
        data: labelsImpressions.map(
          (label) => sampleData.day_and_time.impressions[label][1].reel
        ),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Image",
        data: labelsImpressions.map(
          (label) => sampleData.day_and_time.impressions[label][1].image
        ),
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
      {
        label: "Video",
        data: labelsImpressions.map(
          (label) => sampleData.day_and_time.impressions[label][1].video
        ),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const weekdayDataLikes = {
    labels: labelsLikes,
    datasets: [
      {
        label: "Carousel",
        data: labelsLikes.map(
          (label) => sampleData.day_and_time.likes[label][0].carousel
        ),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Reel",
        data: labelsLikes.map(
          (label) => sampleData.day_and_time.likes[label][0].reel
        ),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Image",
        data: labelsLikes.map(
          (label) => sampleData.day_and_time.likes[label][0].image
        ),
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
      {
        label: "Video",
        data: labelsLikes.map(
          (label) => sampleData.day_and_time.likes[label][0].video
        ),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const weekendDataLikes = {
    labels: labelsLikes,
    datasets: [
      {
        label: "Carousel",
        data: labelsLikes.map(
          (label) => sampleData.day_and_time.likes[label][1].carousel
        ),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Reel",
        data: labelsLikes.map(
          (label) => sampleData.day_and_time.likes[label][1].reel
        ),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Image",
        data: labelsLikes.map(
          (label) => sampleData.day_and_time.likes[label][1].image
        ),
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
      {
        label: "Video",
        data: labelsLikes.map(
          (label) => sampleData.day_and_time.likes[label][1].video
        ),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const weekdayDataComments = {
    labels: labelsComments,
    datasets: [
      {
        label: "Carousel",
        data: labelsComments.map(
          (label) => sampleData.day_and_time.comments[label][0].carousel
        ),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Reel",
        data: labelsComments.map(
          (label) => sampleData.day_and_time.comments[label][0].reel
        ),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Image",
        data: labelsComments.map(
          (label) => sampleData.day_and_time.comments[label][0].image
        ),
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
      {
        label: "Video",
        data: labelsComments.map(
          (label) => sampleData.day_and_time.comments[label][0].video
        ),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const weekendDataComments = {
    labels: labelsComments,
    datasets: [
      {
        label: "Carousel",
        data: labelsComments.map(
          (label) => sampleData.day_and_time.comments[label][1].carousel
        ),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Reel",
        data: labelsComments.map(
          (label) => sampleData.day_and_time.comments[label][1].reel
        ),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Image",
        data: labelsComments.map(
          (label) => sampleData.day_and_time.comments[label][1].image
        ),
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
      {
        label: "Video",
        data: labelsComments.map(
          (label) => sampleData.day_and_time.comments[label][1].video
        ),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const weekdayDataShares = {
    labels: labelsShares,
    datasets: [
      {
        label: "Carousel",
        data: labelsShares.map(
          (label) => sampleData.day_and_time.shares[label][0].carousel
        ),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Reel",
        data: labelsShares.map(
          (label) => sampleData.day_and_time.shares[label][0].reel
        ),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Image",
        data: labelsShares.map(
          (label) => sampleData.day_and_time.shares[label][0].image
        ),
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
      {
        label: "Video",
        data: labelsShares.map(
          (label) => sampleData.day_and_time.shares[label][0].video
        ),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const weekendDataShares = {
    labels: labelsShares,
    datasets: [
      {
        label: "Carousel",
        data: labelsShares.map(
          (label) => sampleData.day_and_time.shares[label][1].carousel
        ),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Reel",
        data: labelsShares.map(
          (label) => sampleData.day_and_time.shares[label][1].reel
        ),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Image",
        data: labelsShares.map(
          (label) => sampleData.day_and_time.shares[label][1].image
        ),
        backgroundColor: "rgba(255, 206, 86, 0.2)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
      {
        label: "Video",
        data: labelsShares.map(
          (label) => sampleData.day_and_time.shares[label][1].video
        ),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
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
          text: "Type of Post",
          font: {
            size: 16,
            weight: "bold",
            family: "Arial",
          },
          padding: {
            top: 20,
          },
        },
        ticks: {
          font: {
            size: 14,
            weight: "bold",
            family: "Arial",
          },
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: "Frequency",
          font: {
            size: 16,
            weight: "bold",
            family: "Arial",
          },
          padding: {
            bottom: 20,
          },
        },
        ticks: {
          font: {
            size: 14,
            weight: "bold",
            family: "Arial",
          },
        },
      },
    },
  };

  return (
    <div className="flex">
      <AnalyticSidebar
        isMinimized={isSidebarMinimized}
        toggleMinimize={toggleMinimize}
      />
      <div className={`w-[65%] ${isSidebarMinimized ? "mx-8" : "flex-1 p-6"}`}>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Day & Time Analytics
        </h2>
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Weekday</h3>
          <ChartSwitcherLine
            postsData={weekdayDataPosts}
            impressionsData={weekdayDataImpressions}
            likesData={weekdayDataLikes}
            commentsData={weekdayDataComments}
            sharesData={weekdayDataShares}
            options={options}
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Weekend</h3>
          <ChartSwitcherLine
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