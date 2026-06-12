"use client";

import { useAuth } from "@/context/AuthContext";
import { useUserData } from "@/hooks/useUserData";

export default function Page() {
  const { token } = useAuth();
  const { user, activity, loading, error } = useUserData(token);

  if (loading) return <main>Chargement...</main>;
  if (error) return <main>Erreur : {error}</main>;

  return (
    <main>
      <h1>Bonjour {user?.firstName}</h1>
      <p>Distance totale : {user?.totalDistance} km</p>
      <p>Durée totale : {user?.totalDuration} min</p>
      <p>Nombre de sessions : {activity.length}</p>
    </main>
  );
}