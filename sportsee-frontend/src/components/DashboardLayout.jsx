import Header from "@/components/Header";
import styles from "@/styles/DashboardLayout.module.css";

export default function DashboardLayout({ children }) {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
}