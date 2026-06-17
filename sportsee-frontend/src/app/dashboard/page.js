"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useUserData } from "@/hooks/useUserData";
import { ROUTES } from "@/utils/routes";
import DashboardLayout from "@/components/DashboardLayout";

export default function DashboardPage() {
  const router = useRouter();
  const { token } = useAuth();
  const { user, activity, loading, error } = useUserData(token);

  useEffect(() => {
    if (!token) {
      router.push(ROUTES.LOGIN);
    }
  }, [token, router]);

  if (!token) return null;
  if (loading) return <main>Chargement...</main>;
  if (error) return <main>Erreur : {error}</main>;

  return (
    <DashboardLayout>
      <h1>Bonjour {user?.firstName}</h1>
      <p>Distance totale : {user?.totalDistance} km</p>
      <p>Durée totale : {user?.totalDuration} min</p>
      <p>Nombre de sessions : {activity.length}</p>
    </DashboardLayout>
  );
}