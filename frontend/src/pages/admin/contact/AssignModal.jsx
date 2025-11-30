// src/components/contact/AssignModal.jsx
import styles from "../../../styles/contact/Modal.module.css";

const teammates = [
  { id: 1, name: "Joe Doe", avatar: "/Hari.jpg" },
  { id: 2, name: "Jane Doe", avatar: "/Hari.jpg" },
  { id: 3, name: "Alex Smith", avatar: "/Hari.jpg" },
];

const AssignModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h3 className={styles.title}>Chat would be assigned to different team member</h3>

        <div className={styles.list}>
          {teammates.map((t) => (
            <button key={t.id} className={styles.row}>
              <img src={t.avatar} className={styles.avatar} alt="" />
              <span>{t.name}</span>
            </button>
          ))}
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.btnGhost} onClick={onClose}>
            Cancel
          </button>
          <button type="button" className={styles.btnPrimary}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignModal;
