import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchJobs(params, page) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    setLoading(true);
    setError(false);

    // ✅ Now pointing to your working local proxy
    const API_URL = "http://localhost:5000/api/jobs";

    async function fetchJobs() {
      try {
        const res = await axios.get(API_URL, {
          cancelToken: cancelToken.token,
        });

        let filtered = res.data;

        // Some APIs return an array under res.data.jobs; adjust dynamically
        if (res.data.jobs) filtered = res.data.jobs;

        if (params.description) {
          filtered = filtered.filter((job) =>
            job.position.toLowerCase().includes(params.description.toLowerCase())
          );
        }

        if (params.location) {
          filtered = filtered.filter((job) =>
            job.location?.toLowerCase().includes(params.location.toLowerCase())
          );
        }

        setJobs(filtered);
        setLoading(false);
      } catch (e) {
        if (axios.isCancel(e)) return;
        console.error("❌ Fetch error:", e);
        setError(true);
        setLoading(false);
      }
    }

    fetchJobs();

    return () => cancelToken.cancel();
  }, [params, page]);

  return { jobs, loading, error };
}
