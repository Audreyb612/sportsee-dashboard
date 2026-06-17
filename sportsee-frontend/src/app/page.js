"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { ROUTES } from "@/utils/routes";
import styles from "@/styles/LoginPage.module.css";

export default function LoginPage() {
  const router = useRouter();
  const { loginUser } = useAuth();

  function handleSubmit(event) {
    event.preventDefault();
    loginUser();
    router.push(ROUTES.DASHBOARD);
  }

  return (
    <main className={styles.page}>
      <section className={styles.leftPanel}>
       <img className={styles.logo} src="/images/sportsee-logo.png" alt="logo bleu marine SportSee et graphique en histogramme rouges et bleus"/>

        <form className={styles.card} onSubmit={handleSubmit}>
          <h1>Transformez<br />vos stats en résultats</h1>
          <h2>Se connecter</h2>

          <label>Adresse email</label>
          <input type="email" />

          <label>Mot de passe</label>
          <input type="password" />

          <button type="submit">Se connecter</button>

          <p>Mot de passe oublié ?</p>
        </form>
      </section>

      <section className={styles.rightPanel}></section>
    </main>
  );
}