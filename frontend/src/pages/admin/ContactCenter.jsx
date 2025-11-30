// src/pages/ContactCenter.jsx
import { useState } from "react";
import Sidebar from "../../components/Sidebar";

import ChatList from "./contact/ChatList";
import ChatWindow from "./contact/ChatWindow";
import ChatDetails from "./contact/ChatDetails";
import AssignModal from "./contact/AssignModal";
import CloseModal from "./contact/CloseModal";

import styles from "../../styles/admin/ContactCenter.module.css";

const ContactCenter = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  // modal state
  const [isAssignOpen, setIsAssignOpen] = useState(false);
  const [isCloseOpen, setIsCloseOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <Sidebar />

      {/* left - chat list */}
      <section className={styles.chatListPanel}>
        <ChatList selectedChat={selectedChat} setSelectedChat={setSelectedChat} />
      </section>

      {/* middle - chat window */}
      <section className={styles.chatWindowPanel}>
        <ChatWindow
          selectedChat={selectedChat}
          openAssignModal={() => setIsAssignOpen(true)}
          openCloseModal={() => setIsCloseOpen(true)}
        />
      </section>

      {/* right - details */}
      <aside className={styles.detailsPanel}>
        <ChatDetails
          selectedChat={selectedChat}
          openAssignModal={() => setIsAssignOpen(true)}
          openCloseModal={() => setIsCloseOpen(true)}
        />
      </aside>

      {/* modals */}
      <AssignModal
        open={isAssignOpen}
        onClose={() => setIsAssignOpen(false)}
        chatId={selectedChat}
      />

      <CloseModal
        open={isCloseOpen}
        onClose={() => setIsCloseOpen(false)}
        chatId={selectedChat}
      />
    </div>
  );
};

export default ContactCenter;
