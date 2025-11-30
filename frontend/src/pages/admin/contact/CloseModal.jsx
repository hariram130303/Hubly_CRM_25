// src/components/contact/CloseModal.jsx
import styles from "../../../styles/contact/Modal.module.css";

const CloseModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h3 className={styles.title}>Chat will be closed</h3>
        <p className={styles.subtitle}>
          This chat has been resolved. You will no longer receive new messages in this ticket.
        </p>

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

export default CloseModal;
