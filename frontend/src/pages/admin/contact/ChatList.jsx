import { useEffect, useState } from "react";
import { api } from "../../../api";
import styles from "../../../styles/contact/ChatList.module.css";

const ChatList = ({ selectedChat, setSelectedChat }) => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await api.get("/tickets");  
        setTickets(res.data);  // res.data must be array of tickets
      } catch (err) {
        console.error("Failed to load tickets:", err);
      }
    };

    fetchTickets();
  }, []);


  // Get initials from name (first 2 words)
const getInitials = (name = "") => {
  const words = name.trim().split(" ");
  if (words.length === 1) return words[0][0].toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
};

// Generate consistent color from string
const getAvatarColor = (str = "") => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color = `hsl(${hash % 360}, 65%, 55%)`;
  return color;
};

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.pageTitle}>Contact Center</h1>
      <h2 className={styles.sectionTitle}>Chats</h2>

      <div className={styles.list}>
        {tickets.length === 0 && (
          <p className={styles.noChats}>No tickets found</p>
        )}

        {tickets.map((ticket) => (
  <button
    key={ticket._id}
    className={`${styles.item} ${
      selectedChat === ticket._id ? styles.itemActive : ""
    }`}
    onClick={() => setSelectedChat(ticket.ticketId)}
  >
    <div
      className={styles.avatar}
      style={{
        backgroundColor: getAvatarColor(ticket.user?.name),
      }}
    >
      {getInitials(ticket.user?.name || "U")}
    </div>

    <div className={styles.textBlock}>
      <div className={styles.line1}>
        <span className={styles.userName}>
          {ticket.user?.name || "Unknown User"}
        </span>

        {ticket.status !== "resolved" && (
          <span className={styles.badgeUnresolved}>New</span>
        )}
      </div>

      <span className={styles.preview}>
        {ticket.lastMessage || "No messages yet"}
      </span>
    </div>
  </button>
))}

      </div>
    </div>
  );
};

export default ChatList;
