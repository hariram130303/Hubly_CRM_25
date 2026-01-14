import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import TicketsList from "../../components/TicketsList";
import styles from "../../styles/admin/Dashboard.module.css";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className={styles.shell}>
      <Sidebar />

      <main className={styles.main}>
        {/* HEADER */}
        <header className={styles.topBar}>
          <h1 className={styles.pageTitle}>Dashboard</h1>

          <div className={styles.searchBox}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              type="text"
              placeholder="Search for ticket"
              className={styles.searchInput}
            />
          </div>
        </header>

        {/* TABS */}
        <div className={styles.tabsRow}>
          <button
            className={`${styles.tab} ${
              activeTab === "all" ? styles.tabActive : ""
            }`}
            onClick={() => setActiveTab("all")}
          >
            All Tickets
          </button>

          <button
            className={`${styles.tab} ${
              activeTab === "resolved" ? styles.tabActive : ""
            }`}
            onClick={() => setActiveTab("resolved")}
          >
            Resolved
          </button>

          <button
            className={`${styles.tab} ${
              activeTab === "unresolved" ? styles.tabActive : ""
            }`}
            onClick={() => setActiveTab("unresolved")}
          >
            Unresolved
          </button>
        </div>

        {/* PASS FILTER */}
        <TicketsList filter={activeTab} />
      </main>
    </div>
  );
};

export default Dashboard;
