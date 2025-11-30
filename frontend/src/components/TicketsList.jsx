// src/components/TicketsList.jsx
import { useEffect, useState } from "react";
import styles from "../styles/TicketsList.module.css";

const TicketsList = () => {
  const [liveTime, setLiveTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setLiveTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className={styles.ticketsCard}>
  {/* HEADER */}
  <div className={styles.ticketHeaderRow}>
    <div className={styles.ticketMetaLeft}>
      <span className={styles.statusDot}></span>
      <span className={styles.ticketTitle}>Ticket# 2023-00123</span>
    </div>

    <span className={styles.postedAt}>Posted at 12:45 AM</span>
  </div>

  {/* MESSAGE ROW */}
  <div className={styles.messageRow}>
    <p className={styles.ticketMessage}>Hey!</p>
    <span className={styles.ticketTime}>{liveTime}</span>
  </div>

  {/* SEPARATOR */}
  <div className={styles.separator}></div>

  {/* FOOTER */}
  <div className={styles.ticketFooterRow}>
    <div className={styles.customer}>
      <div className={styles.customerAvatar}>
        <img src="/Hari.jpg" alt="profile" />
      </div>
      <div>
        <div className={styles.customerName}>John Snow</div>
        <div className={styles.customerInfo}>+91-0000000000</div>
        <div className={styles.customerInfo}>example@gmail.com</div>
      </div>
    </div>

    <button className={styles.openTicketBtn}>Open Ticket</button>
  </div>
</section>

  );
};

export default TicketsList;
