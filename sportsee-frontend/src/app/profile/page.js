"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useUserData } from "@/hooks/useUserData";
import { ROUTES } from "@/utils/routes";
import DashboardLayout from "@/components/DashboardLayout";
import styles from "@/styles/ProfilePage.module.css";

export default function ProfilePage() {
  const router = useRouter();
  const { token } = useAuth();
  const { user, loading, error } = useUserData(token);

  useEffect(() => {
    if (!token) router.push(ROUTES.LOGIN);
  }, [token, router]);

  if (!token) return null;
  if (loading) return <main>Chargement...</main>;
  if (error) return <main>Erreur : {error}</main>;

  return (
    <DashboardLayout>
      <section className={styles.profilePage}>
        <div className={styles.leftColumn}>
          <article className={styles.identityCard}>
            <img src={user.profilePicture} alt={`${user.firstName} ${user.lastName}`} />
            <h1>{user.firstName} {user.lastName}</h1>
            <p>Membre depuis le {user.createdAt}</p>
          </article>

          <article className={styles.infoCard}>
            <h2>Votre profil</h2>
            <p>Âge : {user.age} ans</p>
            <p>Genre : {user.gender === "female" ? "Femme" : "Homme"} </p>
            <p>Taille : {user.height} cm</p>
            <p>Poids : {user.weight} kg</p>
          </article>
        </div>

        <div className={styles.rightColumn}>
          <h2>Vos statistiques</h2>

          <div className={styles.statsGrid}>
            <article>Distance totale <strong>{user.totalDistance} km</strong></article>
            <article>Calories brûlées <strong>{user.totalCalories} kcal</strong></article>
            <article>Sessions totales <strong>{user.totalSessions}</strong></article>
            <article>Temps total couru <strong>{user.totalDuration} min</strong></article>
            <article>Jours de repos <strong>{user.restDays}</strong></article>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}