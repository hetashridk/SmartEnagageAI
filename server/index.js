import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

// Load environment variables from .env file
dotenv.config();

const app = express();
const BASE_URL = process.env.BASE_URL;
const APPLICATION_TOKEN = process.env.APPLICATION_TOKEN;
const LANGFLOW_ID = process.env.LANGFLOW_ID;
const FLOW_ID = process.env.FLOW_ID;

// Middleware
app.use(cors());
app.use(express.json());

// API route
app.post('/api/run', async (req, res) => {
  try {
    const apiUrl = `${BASE_URL}/lf/${LANGFLOW_ID}/api/v1/run/${FLOW_ID}?stream=false`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${APPLICATION_TOKEN}`,
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error || 'Failed to process request' });
    }

    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Export as a serverless function
export default app;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
