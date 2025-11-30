// src/pages/Dashboard.jsx
import Sidebar from "../../components/Sidebar";
import TicketsList from "../../components/TicketsList";
import styles from "../../styles/admin/Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.shell}>
    <Sidebar />
    <main className={styles.main}>
        <header className={styles.topBar}>
        <h1 className={styles.pageTitle}>Dashboard</h1>

        <div className={styles.searchBox}>
            <span className={styles.searchIcon}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.59109 15.75C12.5106 15.75 15.688 12.56 15.688 8.625C15.688 4.68997 12.5106 1.5 8.59109 1.5C4.67155 1.5 1.49414 4.68997
                1.49414 8.625C1.49414 12.56 4.67155 15.75 8.59109 15.75Z" stroke="#B6B6B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.435 16.5L14.9409 15" stroke="#B6B6B6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </span>
                <input
                    type="text"
                    placeholder="Search for ticket"
                    className={styles.searchInput}
                />
          </div>
        </header>

        <div className={styles.tabsRow}>
        <button className={`${styles.tab} ${styles.tabActive}`}>
            <svg width="21" height="21" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.1908 17.0833H5.84322C3.33895 17.0833 1.66943 15.8333 1.66943 12.9167V7.08334C1.66943 4.16667 3.33895 2.91667 5.84322 2.91667H14.1908C16.6951 2.91667 18.3646 4.16667 18.3646 7.08334V12.9167C18.3646 15.8333 16.6951 17.0833 14.1908 17.0833Z" stroke="#184E7F" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.1908 7.5L11.578 9.58333C10.7182 10.2667 9.3075 10.2667 8.4477 9.58333L5.84326 7.5" stroke="#184E7F" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>  All Tickets
        </button>
          <button className={styles.tab}>Resolved</button>
          <button className={styles.tab}>Unresolved</button>
        </div>

        <TicketsList />
      </main>

    </div>
  );
};

export default Dashboard;
