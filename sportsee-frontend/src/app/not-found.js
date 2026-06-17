import Link from "next/link";
import { ROUTES } from "@/utils/routes";

export default function NotFound() {
  return (
    <main>
      <h1>Page introuvable</h1>
      <p>La page demandée n’existe pas.</p>
      <Link href={ROUTES.LOGIN}>Retour à la connexion</Link>
    </main>
  );
}