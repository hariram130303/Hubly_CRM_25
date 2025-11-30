import { useState, useEffect } from "react";
import styles from "../../styles/admin/ChatBot.module.css";
import Sidebar from "../../components/Sidebar";
import { MdEdit } from "react-icons/md";

export default function ChatBot() {
  /* ---------------- STATE FOR DYNAMIC PREVIEW ---------------- */
  const [headerColor, setHeaderColor] = useState("#33475B");
  const [bgColor, setBgColor] = useState("#FFFFFF");

  const [initialMessage, setInitialMessage] = useState("How can I help you?");
  const [botMessage, setBotMessage] = useState("Ask me anything");

  const [introName, setIntroName] = useState("Your Name");
  const [introPhone, setIntroPhone] = useState("+1 (000) 000-0000");
  const [introEmail, setIntroEmail] = useState("example@gmail.com");

  const [showMissedModal, setShowMissedModal] = useState(false);

  const [welcomeMessage, setWelcomeMessage] = useState(
    "👋 Want to chat about Hubly? I'm an chatbot here to help you find your way."
  );

  // Timer config (what user sets)
  const [missedHH, setMissedHH] = useState("00");
  const [missedMM, setMissedMM] = useState("1");
  const [missedSS, setMissedSS] = useState("00");

  // Timer runtime state
  const [timeLeft, setTimeLeft] = useState(0); // in seconds
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isMissed, setIsMissed] = useState(false);

  /* ---------------- TIMER HELPERS ---------------- */
  const toSeconds = (hh, mm, ss) => {
    const h = parseInt(hh || "0", 10) || 0;
    const m = parseInt(mm || "0", 10) || 0;
    const s = parseInt(ss || "0", 10) || 0;
    return h * 3600 + m * 60 + s;
  };

  const fromSeconds = (total) => {
    if (total < 0) total = 0;
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    const pad = (n) => String(n).padStart(2, "0");
    return {
      hh: pad(h),
      mm: pad(m),
      ss: pad(s),
    };
  };

  const handleTimerSave = () => {
    const total = toSeconds(missedHH, missedMM, missedSS);
    if (total <= 0) {
      alert("Please set a time greater than 0.");
      return;
    }
    setTimeLeft(total);
    setIsTimerRunning(true);
    setIsMissed(false);
  };

  // Countdown effect
  useEffect(() => {
    if (!isTimerRunning || timeLeft <= 0) return;

    const id = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          setIsTimerRunning(false);
          setIsMissed(true);
          setShowMissedModal(true);

          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [isTimerRunning, timeLeft]);

  // What time to show in the timer visual
  const baseSeconds = toSeconds(missedHH, missedMM, missedSS);
  const displaySeconds = timeLeft > 0 ? timeLeft : baseSeconds;
  const prevSeconds = displaySeconds + 1;
  const nextSeconds = Math.max(displaySeconds - 1, 0);

  const currentTime = fromSeconds(displaySeconds);
  const prevTime = fromSeconds(prevSeconds);
  const nextTime = fromSeconds(nextSeconds);

  /* ---------------- EDIT HELPERS (prompt-based) ---------------- */
  const editInitialMessage = () => {
    const next = window.prompt("Edit initial message:", initialMessage);
    if (next !== null) setInitialMessage(next);
  };

  const editBotMessage = () => {
    const next = window.prompt("Edit bot message:", botMessage);
    if (next !== null) setBotMessage(next);
  };

  const editWelcomeMessage = () => {
    let next = window.prompt(
      "Edit welcome message (max 50 chars):",
      welcomeMessage
    );
    if (next === null) return;
    if (next.length > 50) {
      alert("Welcome message trimmed to 50 characters.");
      next = next.slice(0, 50);
    }
    setWelcomeMessage(next);
  };

  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.wrapper}>
        <h1 className={styles.pageTitle}>Chat Bot</h1>

        <div className={styles.grid}>
          {/* ---------------- LEFT: LIVE CHAT PREVIEW ---------------- */}
          <div className={styles.previewCard}>
            <div className={styles.chatPreview} style={{ background: bgColor }}>
              {/* Header */}
              <div
                className={styles.chatHeader}
                style={{ background: headerColor }}
              >
                <div className={styles.avatarWrapper}>
                  <img
                    src="/bot-head.jpg"
                    alt="Hubly"
                    className={styles.avatarImg}
                  />
                  <span className={styles.onlineDot}></span>
                </div>

                <span className={styles.headerName}>Hubly</span>
              </div>

              {/* Chat Section After Header */}
              <div
                className={styles.chatSection}
                style={{ background: bgColor }}
              >
                {/* Bot Message 1 */}
                <div className={styles.row}>
                  <img
                    src="/bot-head.jpg"
                    className={styles.msgAvatar}
                    alt="Bot"
                  />
                  <div className={styles.chatBubbleUser}>{initialMessage}</div>
                </div>

                {/* Bot Message 2 */}
                <div className={styles.row}>
                  <div className={styles.chatBubbleUser}>{botMessage}</div>
                </div>

                {/* Introduction Form Box */}
                <div className={styles.introBox}>
                  <h4 className={styles.introTitle}>Introduce Yourself</h4>

                  <label className={styles.label}>
                    {introName || "Your Name"}
                  </label>
                  <input
                    className={styles.inputLine}
                    placeholder={introName || "Your Name"}
                  />

                  <label className={styles.label}>
                    {introPhone || "Your Phone"}
                  </label>
                  <input
                    className={styles.inputLine}
                    placeholder={introPhone || "+1 (000) 000-0000"}
                  />

                  <label className={styles.label}>
                    {introEmail || "Your Email"}
                  </label>
                  <input
                    className={styles.inputLine}
                    placeholder={introEmail || "example@gmail.com"}
                  />

                  <button className={styles.btnPrimary}>Thank You!</button>
                </div>
              </div>

              {/* Input Row */}
              <div className={styles.messageInputArea}>
                <input placeholder="Write a message" />
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_26_1028)">
                    <path
                      d="M28.5117 11.1969C28.8668 11.443 29.0531 11.8684 28.9863 12.2938L26.7363 26.9188C26.6836 27.2598 26.4761 27.5586 26.1738 27.7274C25.8715 27.8961 25.5094 27.9172 25.1894 27.7836L20.9847 26.0363L18.5765 28.6414C18.2636 28.9824 17.7715 29.0949 17.339 28.9262C16.9066 28.7574 16.6254 28.3391 16.6254 27.875V24.9359C16.6254 24.7953 16.6781 24.6617 16.773 24.5598L22.6652 18.1297C22.8691 17.9082 22.8621 17.5672 22.6511 17.3563C22.4402 17.1453 22.0992 17.1313 21.8777 17.3317L14.7269 23.6844L11.6226 22.1305C11.25 21.9442 11.0109 21.5715 11.0004 21.1567C10.9898 20.7418 11.2078 20.3551 11.5664 20.1477L27.3164 11.1477C27.6926 10.9332 28.1566 10.9543 28.5117 11.1969Z"
                      fill="#B0C1D4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_26_1028">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="translate(11 11)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* ---------------- RIGHT: SETTINGS PANEL ---------------- */}
          <div className={styles.settingsColumn}>
            {/* Header Color */}
            <div className={styles.settingCard}>
              <h3 className={styles.cardTitle}>Header Color</h3>

              <div className={styles.colorRow}>
                <div
                  className={styles.colorCircle}
                  style={{ background: "#FFFFFF" }}
                  onClick={() => setHeaderColor("#FFFFFF")}
                />
                <div
                  className={styles.colorCircle}
                  style={{ background: "#000000" }}
                  onClick={() => setHeaderColor("#000000")}
                />
                <div
                  className={styles.colorCircle}
                  style={{ background: "#33475B" }}
                  onClick={() => setHeaderColor("#33475B")}
                />
              </div>

              <div className={styles.colorInputRow}>
                <div
                  className={styles.bigColorBox}
                  style={{ background: headerColor }}
                />
                <input
                  type="text"
                  className={styles.hexInput}
                  value={headerColor}
                  onChange={(e) => setHeaderColor(e.target.value)}
                />
              </div>
            </div>

            {/* Background Color */}
            <div className={styles.settingCard}>
              <h3 className={styles.cardTitle}>Custom Background Color</h3>
              <div className={styles.colorRow}>
                <div
                  className={styles.colorCircle}
                  style={{ background: "#FFFFFF" }}
                  onClick={() => setBgColor("#FFFFFF")}
                />
                <div
                  className={styles.colorCircle}
                  style={{ background: "#000000" }}
                  onClick={() => setBgColor("#000000")}
                />
                <div
                  className={styles.colorCircle}
                  style={{ background: "#FAFBFC" }}
                  onClick={() => setBgColor("#FAFBFC")}
                />
              </div>
              <div className={styles.colorInputRow}>
                <div
                  className={styles.bigColorBox}
                  style={{ background: bgColor }}
                />
                <input
                  type="text"
                  className={styles.hexInput}
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                />
              </div>
            </div>

            {/* Customize Message */}
            <div className={styles.settingCard}>
              <h3 className={styles.cardTitle}>Customize Message</h3>

              {/* Message 1 */}
              <div className={styles.messageRow}>
                <span className={styles.messageText}>{initialMessage}</span>
                <MdEdit
                  onClick={editInitialMessage}
                  className={styles.editIcon}
                />
              </div>

              {/* Message 2 */}
              <div className={styles.messageRow}>
                <span className={styles.messageText}>{botMessage}</span>
                <MdEdit onClick={editBotMessage} className={styles.editIcon} />
              </div>
            </div>

            {/* Introduction Form */}
            <div className={styles.introSettingCard}>
              <h3 className={styles.introSettingTitle}>Introduction Form</h3>

              <label className={styles.introSettingLabel}>Your name</label>
              <input
                className={styles.introSettingInput}
                value={introName}
                onChange={(e) => setIntroName(e.target.value)}
              />

              <label className={styles.introSettingLabel}>Your Phone</label>
              <input
                className={styles.introSettingInput}
                value={introPhone}
                onChange={(e) => setIntroPhone(e.target.value)}
              />

              <label className={styles.introSettingLabel}>Your Email</label>
              <input
                className={styles.introSettingInput}
                value={introEmail}
                onChange={(e) => setIntroEmail(e.target.value)}
              />

              <button className={styles.introSettingButton}>Thank You!</button>
            </div>

            {/* ------------------- WELCOME MESSAGE ------------------- */}
            <div className={styles.welcomeCard}>
              <h3 className={styles.welcomeTitle}>Welcome Message</h3>

              <div className={styles.welcomeBox}>
                <span className={styles.welcomeCount}>
                  {welcomeMessage.length}/50
                </span>

                <p className={styles.welcomeText}>{welcomeMessage}</p>

                <MdEdit
                  className={styles.welcomeEdit}
                  onClick={editWelcomeMessage}
                />
              </div>
            </div>

            {/* ------------------- MISSED CHAT TIMER ------------------- */}
            <div className={styles.timerCard}>
              <h3 className={styles.timerTitle}>Missed chat timer</h3>

              {/* TIMER DISPLAY ONLY — NO CONFIG INPUTS */}
              <div className={styles.timerDisplay}>
                {/* Top Row (previous time) */}
                <div className={styles.timerRowTop}>
                  <span>{prevTime.hh}</span>
                  <span>{prevTime.mm}</span>
                  <span>{prevTime.ss}</span>
                </div>

                {/* Middle Highlight Row (current countdown) */}
                <div className={styles.timerRowMiddle}>
                  <div className={styles.fieldContainer}>
                    <span className={styles.timerValue}>{currentTime.hh}</span>
                    <span className={styles.timerColon}>:</span>
                    <span className={styles.timerValue}>{currentTime.mm}</span>
                    <span className={styles.timerColon}>:</span>
                    <span className={styles.timerValue}>{currentTime.ss}</span>
                  </div>
                </div>

                {/* Bottom Row (next time) */}
                <div className={styles.timerRowBottom}>
                  <span>{nextTime.hh}</span>
                  <span>{nextTime.mm}</span>
                  <span>{nextTime.ss}</span>
                </div>
              </div>

              {/* SAVE Button */}
              <div className={styles.buttonContainer}>
                <button
                  className={styles.timerSaveBtn}
                  onClick={handleTimerSave}
                >
                  {isTimerRunning ? "Running..." : "Save"}
                </button>
              </div>

              {showMissedModal && (
                <div className={styles.modalOverlay}>
                  <div className={styles.modalBox}>
                    <h3 className={styles.modalTitle}>Missed Chat</h3>

                    <p className={styles.modalMessage}>
                      ⏰ No reply in time — chat marked as{" "}
                      <strong>missed</strong>.
                    </p>

                    <button
                      className={styles.modalCloseBtn}
                      onClick={() => setShowMissedModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
