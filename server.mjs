import express from "express";
import cors from "cors";
import axios from "axios";
import https from "https";

const app = express();
app.use(cors());

// ✅ Create HTTPS agent that ignores SSL issues (only for local dev)
const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

app.get("/api/jobs", async (req, res) => {
  try {
    const REMOTE_URL = "https://api.allorigins.win/raw?url=https://remoteok.com/api";

    const response = await axios.get(REMOTE_URL, {
      httpsAgent, // 👈 Use agent here
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        Accept: "application/json",
      },
      timeout: 15000,
    });

    res.json(response.data);
  } catch (error) {
    console.error("❌ Error fetching jobs:", error.message);
    if (error.response)
      console.error("Status code:", error.response.status);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`✅ Proxy server running at http://localhost:${PORT}`)
);
