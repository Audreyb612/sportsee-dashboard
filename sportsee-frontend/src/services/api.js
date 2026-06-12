const API_URL = "http://localhost:8000";

export async function login(username, password) {
  const response = await fetch(`${API_URL}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error("Erreur lors de la connexion");
  }

  return response.json();
}

async function fetchWithAuth(endpoint, token) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Erreur API : ${response.status}`);
  }

  return response.json();
}

export function getUserInfo(token) {
  return fetchWithAuth("/api/user-info", token);
}

export function getUserActivity(token, startWeek, endWeek) {
  const params = new URLSearchParams({ startWeek, endWeek });

  return fetchWithAuth(`/api/user-activity?${params}`, token);
}