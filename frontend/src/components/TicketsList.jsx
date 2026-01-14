import { useEffect, useState } from "react";
import { api } from "../api";
import styles from "../styles/TicketsList.module.css";

const TicketsList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await api.get("/tickets");
        setTickets(res.data);
      } catch (err) {
        console.error("Failed to load tickets", err);
      }
    };

    fetchTickets();
  }, []);

  return (
    <>
      {tickets.map((ticket) => (
        <section key={ticket.ticketId} className={styles.ticketsCard}>
          {/* HEADER */}
          <div className={styles.ticketHeaderRow}>
            <div className={styles.ticketMetaLeft}>
              <span className={styles.statusDot}></span>
              <span className={styles.ticketTitle}>
                Ticket# {ticket.ticketId}
              </span>
            </div>

            <span className={styles.postedAt}>
              {new Date(ticket.createdAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>

          {/* MESSAGE */}
          <div className={styles.messageRow}>
            <p className={styles.ticketMessage}>  
              {ticket.lastMessage}
            </p>
          </div>

          <div className={styles.separator}></div>

          {/* FOOTER */}
          <div className={styles.ticketFooterRow}>
            <div className={styles.customer}>
              <div>
                <div className={styles.customerName}>
                  {ticket.user.name}
                </div>
                <div className={styles.customerInfo}>
                  {ticket.user.phone || "—"}
                </div>
                <div className={styles.customerInfo}>
                  {ticket.user.email}
                </div>
              </div>
            </div>

            <button className={styles.openTicketBtn}>
              Open Ticket
            </button>
          </div>
        </section>
      ))}
    </>
  );
};

export default TicketsList;
