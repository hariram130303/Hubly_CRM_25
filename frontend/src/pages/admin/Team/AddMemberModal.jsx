import { useState } from "react";
import styles from "../../../styles/admin/TeamPage.module.css";

export default function AddMemberModal({ onClose, onSave }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("Member");
  const [avatar, setAvatar] = useState(null);

  // Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setAvatar(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    if (!name || !email) return;

    onSave({
      name,
      email,
      phone,
      role,
      avatar, // include avatar
    });
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <h2>Add Team Members</h2>

        <p className={styles.modalSubtitle}>
          Talk with colleagues in a group chat. Messages in this group are only
          visible to its participants. New teammates may only be invited by the
          administrators.
        </p>

        {/* Profile Upload */}
        <label>Profile Image</label>
        <div className={styles.avatarUploadWrapper}>
          <div className={styles.avatarPreview}>
            {avatar ? (
              <img src={avatar} alt="preview" className={styles.avatarImage} />
            ) : (
              <span className={styles.avatarPlaceholder}>No Image</span>
            )}
          </div>

          <label className={styles.uploadBtn}>
            Upload Image
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageChange}
            />
          </label>
        </div>

        <label>User name</label>
        <input
          className={styles.input}
          placeholder="User name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Phone</label>
        <input
          className={styles.input}
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <label>Email ID</label>
        <input
          className={styles.input}
          placeholder="Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Designation</label>
        <select
          className={styles.input}
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Member</option>
          <option>Admin</option>
        </select>

        {/* ACTION BUTTONS */}
        <div className={styles.modalActions}>
          <button className={styles.cancelBtn} onClick={onClose}>
            Cancel
          </button>
          <button className={styles.saveBtn} onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
