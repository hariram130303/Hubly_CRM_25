import styles from "../../../styles/admin/TeamPage.module.css";

export default function DeleteConfirmModal({ onCancel, onConfirm }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.deleteModal}>
        <p className={styles.deleteMsg}>This teammate will be deleted.</p>

        <div className={styles.modalActions}>
          <button className={styles.cancelBtn} onClick={onCancel}>
            Cancel
          </button>
          <button className={styles.confirmBtn} onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
