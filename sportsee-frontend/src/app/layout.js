import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "SportSee",
  description: "Dashboard analytics SportSee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}