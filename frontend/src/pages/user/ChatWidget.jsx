import React, { useState,useEffect } from "react";
import { api } from "../../api.js";
import styles from "../../styles/user/ChatWidget.module.css";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState("form");
  const [loading, setLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [ticketId, setTicketId] = useState(null);
  const [messages, setMessages] = useState([]);

  const loadMessages = async (id) => {
  try {
    const res = await api.get(`/messages/${id}`);
    setMessages(res.data);
  // eslint-disable-next-line no-unused-vars
  } catch (err) {
    console.log("Could not load messages");
  }
};


useEffect(() => {
  const saved = localStorage.getItem("hubly_ticketId");
  if (saved) {
    setTicketId(saved);
    setStep("chat");   // Skip the form
    loadMessages(saved);
  }
}, []);


  const toggleOpen = () => {
  setOpen((prev) => !prev);

  if (!open) {
    setShowTooltip(false);

    const savedId = localStorage.getItem("hubly_ticketId");

    if (savedId) {
      // Returning user
      setTicketId(savedId);
      setStep("chat");
      loadMessages(savedId);
    } else {
      // First time user
      setStep("form");
    }
  }
};

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ======================================================
      BEFORE SENDING ANY MESSAGE -> FORCE USER TO FILL FORM
  ====================================================== */
 const handleSubmitMessage = async () => {
  if (!form.message.trim()) return;

  if (!ticketId) {
    alert("Please introduce yourself first.");
    setStep("form");
    return;
  }

  try {
    // ✅ Send USER message only
    await api.post("/messages", {
      ticketId,
      from: "user",
      text: form.message,
    });

    setForm((prev) => ({ ...prev, message: "" }));
    loadMessages(ticketId);

  } catch (err) {
    console.error(err);
    alert("Failed to send");
  }
};


  /* ======================================================
  ON FORM SUBMIT → Move to message mode
  ====================================================== */

const handleSubmitForm = async (e) => {
  e.preventDefault();
  setLoading(true);

  // frontend validation
  if (!form.name || !form.email) {
    alert("Name & Email required");
    setLoading(false);
    return;
  }

  try {
    const res = await api.post("/tickets", {
      name: form.name,
      email: form.email,
      phone: form.phone,
    });

    // 🔑 backend returns full ticket object
    const ticketId = res.data.ticketId;

    // save ticket for future sessions
    localStorage.setItem("hubly_ticketId", ticketId);

    setTicketId(ticketId);
    setStep("chat");

  } catch (err) {
    console.error("Ticket creation error:", err.response?.data || err.message);
    alert(err.response?.data?.msg || "Form failed");
  } finally {
    setLoading(false);
  }
};



  return (
    <>
      {/* ================= Tooltip ================= */}
      {!open && showTooltip && (
        <div className={styles.tooltip}>
          <img src="/bot-head.jpg" className={styles.tooltipIcon} />
          <div className={styles.tooltipContent}>
            <p>
              👋 Want to chat about Hubly? I'm a chatbot here to help you find
              your way.
            </p>
            <button
              className={styles.tooltipClose}
              onClick={() => setShowTooltip(false)}
            >
              x
            </button>
          </div>
        </div>
      )}

      {/* ================= Chat Window ================= */}
      {open && (
        <div className={styles.chatBox}>
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <img src="/bot-head.jpg" className={styles.botAvatar} />
              <div>
                <p className={styles.botName}>Hubly</p>
                <p className={styles.botStatus}>Online</p>
              </div>
            </div>
          </div>

          <div className={styles.body}>
            {/* GREETING */}
            <div className={styles.chatBubbleBot}>Hey! 👋</div>

            {/* === SHOW FORM === */}
            {step === "form" && (
              <div className={styles.formWrapper}>
                <img src="/bot-head.jpg" className={styles.formAvatar} />
                <div className={styles.formCard}>
                  <p className={styles.formTitle}>Introduce Yourself</p>

                  <form onSubmit={handleSubmitForm}>
                    <label>Your Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />

                    <label>Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />

                    <label>Your Phone</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                    />

                    <button type="submit" className={styles.submitBtn}>
                      {loading ? "Submitting..." : "Thank You!"}
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* === THANK YOU MESSAGE === */}
            {step === "thank-you" && (
              <div className={styles.chatBubbleBot}>
                Thank you! Our team will get back to you soon 😊
              </div>
            )}
            {messages.map((msg, index) => (
  msg.from === "user" ? (
    <div key={index} className={styles.chatBubbleUser}>
      {msg.text}
    </div>
  ) : (
    <div key={index} className={styles.chatBubbleBot}>
      {msg.text}
    </div>
  )
))}

          </div>

          {/* Message bar always visible when chat open */}
          <div className={styles.messageBar}>
            <input
              type="text"
              placeholder="Write a message"
              className={styles.messageInput}
              value={form.message}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, message: e.target.value }))
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSubmitMessage();
              }}
            />

            <button className={styles.sendBtn} onClick={handleSubmitMessage}>
              ➤
            </button>
          </div>
        </div>
      )}

      {/* ================= Floating Button ================= */}
      <button
        className={open ? styles.closeFab : styles.fab}
        onClick={toggleOpen}
      >
        {open ? (
          "✕"
        ) : (
          <svg
            width="32"
            height="30"
            viewBox="0 0 32 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_13_96)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30.7162 3.48901C30.4616 1.9136 29.5114 0.964955 27.9805 0.748468C27.9432 
        0.739549 24.2151 0.0244141 18.3643 0.0244141C12.5151 0.0244141 8.78703 0.739549 8.7619 0.745225C7.56433 0.915495 6.72919 
        1.52928 6.29541 2.52252C8.80255 2.24536 11.3233 2.1092 13.8457 2.11468C19.5165 2.11468 23.2892 2.76658 23.843 2.86874C26.3395 
        3.24333 28.0754 4.97522 28.4954 7.51306C28.677 8.34009 29.2511 11.2477 29.2511 14.7187C29.2511 16.5771 29.0841 18.2823 28.9041 
        19.5852C29.8932 19.1668 30.516 18.3285 30.7122 17.1171C30.7187 17.0871 31.4362 14.0247 31.4362 10.2941C31.4362 6.56441 30.7187 
        3.50198 30.7146 3.4882"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.1976 7.91349C25.943 6.33727 24.9919 5.38863 23.4619 5.17133C23.4246 5.16322 19.6965 4.44971 13.8465 4.44971C7.99728 4.44971 4.26836 5.16322 4.24404 5.16971C2.70107 5.38863 1.7508 6.33727 1.50026 7.89646C1.49215 7.92646 0.775391 10.9889 0.775391 14.7194C0.775391 18.4492 1.49215 21.5116 1.4962 21.5246C1.7508 23.1008 2.70107 24.0494 4.23188 24.2667C4.26188 24.2724 6.68053 24.7354 10.664 24.9162L13.0381 29.0286C13.12 29.1706 13.2378 29.2885 13.3797 29.3704C13.5216 29.4524 13.6826 29.4955 13.8465 29.4955C14.0103 29.4955 14.1713 29.4524 14.3132 29.3704C14.4551 29.2885 14.573 29.1706 14.6549 29.0286L17.0297 24.917C21.0132 24.7354 23.4294 24.2732 23.4497 24.2684C24.9919 24.0494 25.943 23.1008 26.1935 21.5416C26.2016 21.5116 26.9176 18.4492 26.9176 14.7194C26.9176 10.9889 26.2008 7.92646 26.1976 7.91349Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_13_96">
                <rect width="32" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
      </button>
    </>
  );
};

export default ChatWidget;
