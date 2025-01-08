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
import ChartSwitcherGroupedBar from "../Components/ChartSwitcherGroupedBar";
import Chatbot from "../Components/Chatbot";
import ChartSwitcherLine from "../Components/ChartSwitcherLine";
import Spinner from "../Components/Spinner";

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
  const [chartData, setChartData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setFetchError(false);  // Reset error state before fetching
        const response = await fetch("/api/data", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ param: "day_time" }),
        });

        const data = await response.json();

        if (!data || !data.posts) {
          throw new Error("Invalid data structure");
        }

        setChartData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setFetchError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMinimize = () => {
    setIsSidebarMinimized(!isSidebarMinimized);
  };

  const generateChartData = (labels, dataKey, typeIndex) => {
    return {
      labels,
      datasets: [
        {
          label: "Carousel",
          data: labels.map(label => dataKey[label]?.[typeIndex]?.carousel || 0),
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
        {
          label: "Reel",
          data: labels.map(label => dataKey[label]?.[typeIndex]?.reel || 0),
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
        {
          label: "Image",
          data: labels.map(label => dataKey[label]?.[typeIndex]?.image || 0),
          backgroundColor: "rgba(255, 206, 86, 0.2)",
          borderColor: "rgba(255, 206, 86, 1)",
          borderWidth: 1,
        },
        {
          label: "Video",
          data: labels.map(label => dataKey[label]?.[typeIndex]?.video || 0),
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
        barThickness: 50,
        title: {
          display: true,
          text: "Time Period of Day",
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

  const labelsPosts = chartData ? Object.keys(chartData.posts) : [];

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
        {isLoading ? (
          <Spinner />
        ) : fetchError || !chartData ? (
          <div className="text-red-500 text-center">Error loading data. Please try again later.</div>
        ) : (
          <>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Weekday</h3>
              <ChartSwitcherLine
                postsData={generateChartData(labelsPosts, chartData.posts, 0)}
                impressionsData={generateChartData(labelsPosts, chartData.impressions, 0)}
                likesData={generateChartData(labelsPosts, chartData.likes, 0)}
                commentsData={generateChartData(labelsPosts, chartData.comments, 0)}
                sharesData={generateChartData(labelsPosts, chartData.shares, 0)}
                options={options}
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Weekend</h3>
              <ChartSwitcherLine
                postsData={generateChartData(labelsPosts, chartData.posts, 1)}
                impressionsData={generateChartData(labelsPosts, chartData.impressions, 1)}
                likesData={generateChartData(labelsPosts, chartData.likes, 1)}
                commentsData={generateChartData(labelsPosts, chartData.comments, 1)}
                sharesData={generateChartData(labelsPosts, chartData.shares, 1)}
                options={options}
              />
            </div>
          </>
        )}
      </div>
      <Chatbot toggleSidebar={toggleMinimize} />
    </div>
  );
}

export default AnalyticPageDay;