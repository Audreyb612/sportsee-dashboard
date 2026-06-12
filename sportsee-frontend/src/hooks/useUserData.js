import { useEffect, useState } from "react";
import { getDashboardData } from "@/services/dataSource";

export function useUserData(token) {
  const [user, setUser] = useState(null);
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setError(null);

        const data = await getDashboardData(token);

        setUser(data.user);
        setActivity(data.activity);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [token]);

  return { user, activity, loading, error };
}