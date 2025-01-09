# 📊 Social Media Engagement Analytics Module

## 🌟 Overview

This project provides a basic analytics module to analyze social media engagement data, utilizing AI technologies for workflow creation (Langflow), database operations (DataStax Astra DB), and insights generation (GPT/Mistral Embeddings).

---

## ✨ Key Features

- **📥 Data Population**: Store and manage mock social media engagement data in DataStax Astra DB.
- **🔍 Data Querying**: Query average engagement and reach metrics (likes, comments, shares and impressions) based on post types.
- **📈 Insights Generation**: Leverage Langflow and GPT models for actionable insights.
- **📊 Visualization**: Display results using React/Python and data visualization libraries like Chart.js, Pandas.
- **💬 Chat Interface**: Enable users to ask questions and view insights via a chatbot interface.

---

## 🛠️ Technologies Used

- **☁️ DataStax Astra DB**: Cloud-based NoSQL database for scalable and efficient data storage.
- **🔗 Langflow**: Workflow tool for creating GPT-based automation and insights generation.
- **⚛️ React**: Frontend framework for user-friendly interfaces.
- **📊 Chart.js**: Library for creating data visualizations.
- **Pandas**: Library for data fetching and feeding data into the chart js Front end
- **🤖 OpenAI GPT-4 API**: For advanced language understanding and insights generation.
- **🤖 Mistral Embeddings API**: For ingesting vector data into the DB collection. 
---

## 🧩 Workflow Overview

### 🖧 Backend Workflow

1. **📥 Data Population**:
   - Load mock engagement data through an automated python script into Astra DB.
2. **🔍 Data Querying**:
   - Query Astra DB for average engagement metrics based on various factors.
3. **🤖 Insights Generation**:
   - Process metrics using Langflow workflows integrated with GPT.
   - Generate text-based and graphical responses.

### 🎨 Frontend Workflow

1. **📝 Input Form**:
   - Allows users to select details about the planned posting type and time.
2. **📊 Results Display**:
   - Display GPT-generated insights and suggestions to users.
3. **Dashboard Trends Visualization**
   - Visualize engagement data using various graphs (e.g., comparisons of likes, shares,        comments).
4. **💬 Chat Feature**:
   - Enable GPT-driven chat for user queries.
   - Provide dynamic responses to engagement-related questions.

---

## ⚙️ Implementation Steps

### 1️⃣ Mock Data Creation

- Created a schema and uploaded this dataset to DataStax Astra DB.

### 2️⃣ Backend Development

- **🔗 Langflow Workflow**:
  - Accepts user input (e.g., Post Type).
  - Queries Astra DB for data.
  - Processes metrics via GPT.
  - Generates actionable insights as output.
  - Dashboard
  - Chatbot

### 3️⃣ Frontend Development

- Built the UI with **⚛️ React**:
  - Input form for queries.
  - Visualizations using **📊 Chart.js**.
  - Integrated GPT chat for engagement analysis.

---

🎥 Demo and Resources
🌐 Web Application: [Link to the Web App](#) (API integration pending)
🎬 YouTube Walkthrough: [YouTube Video](#)
👨‍💻 FindCoder Project Link: [FindCoder Link](#)

🚀 Future Enhancements
🔗 Complete integration of API endpoints with the React frontend.
🤖 Enhance chatbot capabilities for more dynamic interactions.
📊 Add support for more visualization options (e.g., pie charts, heatmaps).
