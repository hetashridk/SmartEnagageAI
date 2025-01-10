import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

// Load environment variables from .env file
dotenv.config();

const app = express();
const BASE_URL = process.env.BASE_URL;
const APPLICATION_TOKEN = process.env.APPLICATION_TOKEN;
const LANGFLOW_ID = process.env.LANGFLOW_ID;
const FLOW_ID = process.env.FLOW_ID;
const PORT = process.env.PORT;
const DATA_FLOW_ID = process.env.DATA_FLOW_ID;
const DATA_APPLICATION_TOKEN = process.env.DATA_APPLICATION_TOKEN;

var server= http.createServer(app).listen(port, function()
{
    console.log("Express server listening on port " + port)
})
server.timeout = 120000;

// Middleware
app.use(cors());
app.use(express.json());

// API route
app.post("/api/run", async (req, res) => {
  try {
    const apiUrl = `${BASE_URL}/lf/${LANGFLOW_ID}/api/v1/run/${FLOW_ID}?stream=false`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${APPLICATION_TOKEN}`,
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: data.error || "Failed to process request" });
    }

    res.json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/data", async (req, res) => {
  try {
    const { input_value, input_type, output_type, param } = req.body;
    const apiUrl = `${BASE_URL}/lf/${LANGFLOW_ID}/api/v1/run/${DATA_FLOW_ID}?stream=false`;
    const payload = {
      input_value: input_value || "message",
      input_type: input_type || "chat",
      output_type: output_type || "chat",
      tweaks: {
        "TextInput-Umua0": {
          input_value: param,
        },
      },
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${DATA_APPLICATION_TOKEN}`,
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: result.error || "Failed to process request" });
    }

    const message = result?.outputs?.[0]?.outputs?.[0]?.artifacts?.message;

    if (message) {
      try {
        const parsedMessage = JSON.parse(message);
        return res.json(parsedMessage);
      } catch (parseError) {
        console.error("Failed to parse message:", parseError);
        console.error("Failed to parse message:", message);
        return res.status(500).json({ error: "Invalid response format" });
      }
    }

    res.status(500).json({ error: "Unexpected response structure" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Export as a serverless function
export default app;

if (!process.env.IS_SERVERLESS) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
