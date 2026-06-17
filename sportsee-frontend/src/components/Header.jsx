"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { ROUTES } from "@/utils/routes";
import styles from "@/styles/Header.module.css";

export default function Header() {
  const router = useRouter();
  const { logoutUser } = useAuth();

  function handleLogout() {
    logoutUser();
    router.push(ROUTES.LOGIN);
  }

  function handleCoachClick() {
    alert("Fonctionnalité Coach AI à venir");
  }

  return (
    <header className={styles.header}>
      <img className={styles.logo} src="/images/sportsee-logo.png" alt="SportSee" />

      <nav className={styles.nav}>
        <Link href={ROUTES.DASHBOARD}>Dashboard</Link>
        <button onClick={handleCoachClick}>Coach AI</button>
        <Link href={ROUTES.PROFILE}>Mon profil</Link>
        <span className={styles.separator}></span>
        <button onClick={handleLogout}>Se déconnecter</button>
      </nav>
    </header>
  );
}