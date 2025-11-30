import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import styles from "../../styles/admin/Settings.module.css";
import { FiInfo } from "react-icons/fi";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Settings() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email] = useState("");

  // REAL VALUES
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  // MASKED DISPLAY VALUES (stars)
  const [maskedPw, setMaskedPw] = useState("");
  const [maskedConfirm, setMaskedConfirm] = useState("");

  // SHOW/HIDE STATES
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // ⭐ Handle Password Input (Star Masking)
  const handlePasswordInput = (e) => {
    const newValue = e.target.value;

    if (newValue.length > maskedPw.length) {
      const typedChar = newValue.slice(-1);
      setPassword(password + typedChar);
    } else {
      setPassword(password.slice(0, -1));
    }

    setMaskedPw("*".repeat(newValue.length));
  };

  // ⭐ Handle Confirm Password Input (Star Masking)
  const handleConfirmInput = (e) => {
    const newValue = e.target.value;

    if (newValue.length > maskedConfirm.length) {
      const typedChar = newValue.slice(-1);
      setConfirmPass(confirmPass + typedChar);
    } else {
      setConfirmPass(confirmPass.slice(0, -1));
    }

    setMaskedConfirm("*".repeat(newValue.length));
  };

  const handleSave = () => {
    if (password !== confirmPass) return alert("Passwords do not match!");
    if (password.length > 0)
      alert("Password changed — user will be logged out immediately.");

    alert("Profile updated successfully.");
  };

  return (
    <div className={styles.layout}>
      <Sidebar />

      <div className={styles.pageWrapper}>
        <h2 className={styles.pageTitle}>Settings</h2>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Edit Profile</h3>
          <div className={styles.sectionDivider}></div>

          <form className={styles.formElements}>
            <div className={styles.formRow}>
              <label>First name</label>
              <input
                type="text"
                className={styles.input}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className={styles.formRow}>
              <label>Last name</label>
              <input
                type="text"
                className={styles.input}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className={styles.formRow}>
              <label>Email</label>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  className={styles.inputDisabled}
                  value={email}
                  disabled
                />
                <FiInfo className={styles.infoIcon} />
              </div>
            </div>

            {/* ⭐ PASSWORD WITH SHOW/HIDE */}
            <div className={styles.formRow}>
              <label>Password</label>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  className={styles.input}
                  value={showPw ? password : maskedPw}
                  onChange={handlePasswordInput}
                />
                <button
                  type="button"
                  className={styles.eyeBtn}
                  onClick={() => setShowPw(!showPw)}
                >
                  {showPw ? <FaEye /> : <FaEyeSlash />}
                </button>
                <FiInfo className={styles.infoIcon} />
              </div>
            </div>

            {/* ⭐ CONFIRM PASSWORD WITH SHOW/HIDE */}
            <div className={styles.formRow}>
              <label>Confirm Password</label>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  className={styles.input}
                  value={showConfirm ? confirmPass : maskedConfirm}
                  onChange={handleConfirmInput}
                />
                <button
                  type="button"
                  className={styles.eyeBtn}
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? <FaEye /> : <FaEyeSlash />}
                </button>
                <FiInfo
                  className={styles.infoIcon}
                  title="User will be logged out immediately"
                />
              </div>
            </div>
          </form>

          <button className={styles.saveBtn} onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
