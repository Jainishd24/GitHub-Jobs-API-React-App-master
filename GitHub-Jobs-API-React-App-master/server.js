const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/jobs", async (req, res) => {
  try {
    const response = await axios.get("https://remotive.io/api/remote-jobs");
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching jobs:", error.message);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Proxy server running on http://localhost:${PORT}`));
