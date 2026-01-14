import { useEffect, useState, useRef } from "react";
import { api } from "../../../api";
import styles from "../../../styles/contact/ChatWindow.module.css";
import { useNavigate } from "react-router-dom";

const ChatWindow = ({ selectedChat }) => {
  const [ticket, setTicket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const bottomRef = useRef(null);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const loadTicket = async () => {
      try {
        const res = await api.get(`/tickets/${selectedChat}`);
        setTicket(res.data);
      } catch (err) {
        console.log("Error loading ticket:", err);
      }
    };
    if (selectedChat) loadTicket();
  }, [selectedChat]);

const loadMessages = async () => {
  try {
    const res = await api.get(`/messages/${selectedChat}`);
    setMessages(res.data);
  } catch (err) {
    console.log("Error loading messages:", err);
  }
};

useEffect(() => {
  if (selectedChat) loadMessages();
}, [selectedChat]);

// Scroll AFTER render, safely
useEffect(() => {
  scrollToBottom();
}, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      await api.post("/messages", {
        ticketId: selectedChat,
        from: "agent",
        text,
        status: "sent",
      });

      setText("");
      loadMessages();
    } catch (err) {
      console.log("Error sending message:", err);
    }
  };

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });


  // Get initials from name (first 2 words)
const getInitials = (name = "") => {
  const words = name.trim().split(" ");
  if (words.length === 1) return words[0][0].toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
};

// Generate consistent random color
const getAvatarColor = (str = "") => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return `hsl(${hash % 360}, 65%, 55%)`;
};

  if (!ticket)
    return <div className={styles.emptyState}>Loading…</div>;

  return (
    <div className={styles.wrapper}>
      {/* TOP BAR */}
      <header className={styles.header}>
        <span className={styles.ticketId}>Ticket# {ticket.ticketId}</span>

        <div
          className={styles.homeBtn}
          onClick={() => navigate("/dashboard")}
        >
          {/* your home icon */}
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.833333 11.9875H3.91V7.75667C3.91 7.56611 3.97472 7.40639 4.10417 7.2775C4.23306 
            7.14806 4.39278 7.08333 4.58333 7.08333H7.08333C7.27389 7.08333 7.43389 7.14806 7.56333 
            7.2775C7.69222 7.40639 7.75667 7.56611 7.75667 7.75667V11.9875H10.8333V4.74417C10.8333 4.65861 
            10.8147 4.58083 10.7775 4.51083C10.7403 4.44083 10.6894 4.37972 10.625 4.3275L6.13833 0.945834C6.05278 
            0.871389 5.95111 0.834167 5.83333 0.834167C5.71556 0.834167 5.61417 0.871389 5.52917 0.945834L1.04167 
            4.3275C0.977778 4.38083 0.926944 4.44194 0.889167 4.51083C0.851389 4.57972 0.832778 4.6575 0.833333 
            4.74417V11.9875ZM0 11.9875V4.74417C0 4.53083 0.0477777 4.32889 0.143333 4.13833C0.238889 3.94778 
            0.370556 3.79083 0.538333 3.6675L5.02583 0.269167C5.26083 0.0897226 5.52917 0 5.83083 0C6.1325 0 
            6.4025 0.0897226 6.64083 0.269167L11.1283 3.66667C11.2967 3.79 11.4283 3.94722 11.5233 4.13833C11.6189 
            4.32889 11.6667 4.53083 11.6667 4.74417V11.9875C11.6667 12.2108 11.5836 12.4056 11.4175 12.5717C11.2514 
            12.7378 11.0567 12.8208 10.8333 12.8208H7.59667C7.40556 12.8208 7.24556 12.7564 7.11667 12.6275C6.98778 
            12.4981 6.92333 12.3381 6.92333 12.1475V7.9175H4.74333V12.1475C4.74333 12.3386 4.67889 12.4986 4.55 
            12.6275C4.42111 12.7564 4.26139 12.8208 4.07083 12.8208H0.833333C0.61 12.8208 0.415278 12.7378 0.249167 
            12.5717C0.0830554 12.4056 0 12.2108 0 11.9875Z" fill="#424242"/>
          </svg>

        </div>
      </header>

      {/* MESSAGES AREA */}
      <div className={styles.messagesArea}>
        <div className={styles.dateDivider}>
          {formatDate(ticket.createdAt)}
        </div>

        {messages.map((msg, index) =>
  msg.from === "user" ? (
    <div key={index} className={styles.messageRowLeft}>
      <div
        className={styles.bubbleAvatar}
        style={{
          backgroundColor: getAvatarColor(ticket.user?.name),
        }}
      >
        {getInitials(ticket.user?.name || "U")}
      </div>

      <div className={styles.bubbleLeft}>
        <div className={styles.bubbleMeta}>
          {ticket.user?.name || "User"}
        </div>
        <p className={styles.bubbleText}>{msg.text}</p>
      </div>
    </div>
  ) : (
    <div key={index} className={styles.messageRowRight}>
      <div className={styles.bubbleRight}>
        <div className={styles.bubbleMetaRight}>
          Admin
          <span className={styles.msgStatus}>
            {msg.status === "delivered" ? " ✓✓" : " ✓"}
          </span>
        </div>
        <p className={styles.bubbleText}>{msg.text}</p>
      </div>

      <div
        className={styles.bubbleAvatar}
        style={{ backgroundColor: "#4F46E5" }}
      >
        AD
      </div>
    </div>
  )
)}


        <div ref={bottomRef} />
      </div>

      {/* INPUT BAR */}
      <form className={styles.inputBar} onSubmit={sendMessage}>
        <textarea
          placeholder="Type here"
          className={styles.textArea}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className={styles.floatingSendBtn}>
          <svg width="18" height="18" viewBox="0 0 12 12" fill="none">
            <path d="M1.5 10V7L5.5 6L1.5 5V2L11 6L1.5 10Z" fill="#D1D6DA" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ChatWindow;
