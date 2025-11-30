import { useState } from "react";
import styles from "../../../styles/contact/ChatDetails.module.css";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { LuTicket } from "react-icons/lu";
import { RiTeamFill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";

const ChatDetails = ({ selectedChat }) => {
  const [showTeammates, setShowTeammates] = useState(false);
  const [showStatus, setShowStatus] = useState(false);

  if (!selectedChat) {
    return <div className={styles.empty}>Select a chat to see contact details.</div>;
  }

  return (
    <div className={styles.wrapper}>
      {/* ===== HEADER ===== */}
      <div className={styles.chatHeader}>
        <img src="/Hari.jpg" className={styles.chatAvatar} />
        <span className={styles.chatTitle}>Chat</span>

        {/* Link icon */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_88_1505)">
          <path d="M10.4861 2.58926C11.4421 1.62926 12.8408 1.60926 13.6148 2.3866C14.3908 3.16526 14.3701 4.57326 13.4128 5.53326L11.7975 7.15526C11.7065 7.24969 11.6563 7.37607 11.6576 7.50717C11.6589 7.63827 11.7117 7.76361 11.8045 7.85618C11.8974 7.94876 12.0228 8.00117 12.154 8.00212C12.2851 8.00307 12.4113 7.95248 12.5055 7.86126L14.1215 6.23926C15.3955 4.95993 15.5555 2.91793 14.3235 1.6806C13.0901 0.442596 11.0521 0.603929 9.77679 1.88326L6.54613 5.12793C5.27213 6.40726 5.11213 8.44926 6.34413 9.68593C6.39014 9.73378 6.44522 9.77199 6.50616 9.79833C6.5671 9.82467 6.63267 9.8386 6.69905 9.83933C6.76543 9.84006 6.83129 9.82756 6.89279 9.80257C6.95429 9.77757 7.0102 9.74058 7.05725 9.69375C7.1043 9.64692 7.14156 9.59119 7.16685 9.52981C7.19213 9.46842 7.20494 9.40262 7.20452 9.33624C7.20411 9.26985 7.19048 9.20422 7.16443 9.14316C7.13838 9.0821 7.10043 9.02683 7.05279 8.98059C6.27679 8.20193 6.29813 6.79393 7.25479 5.83393L10.4861 2.58926Z" fill="black"/>
          <path d="M9.65665 6.31357C9.56294 6.21959 9.43573 6.16669 9.30302 6.1665C9.17031 6.16632 9.04296 6.21886 8.94898 6.31257C8.85501 6.40628 8.80211 6.53348 8.80192 6.66619C8.80173 6.79891 8.85427 6.92626 8.94798 7.02023C9.72398 7.7989 9.70331 9.20623 8.74598 10.1669L5.51465 13.4109C4.55798 14.3709 3.15931 14.3909 2.38531 13.6136C1.60931 12.8349 1.63065 11.4269 2.58731 10.4669L4.20331 8.8449C4.24967 8.79837 4.28641 8.74316 4.31143 8.68243C4.33645 8.6217 4.34926 8.55664 4.34914 8.49096C4.34902 8.42528 4.33596 8.36026 4.31071 8.29963C4.28546 8.23899 4.24851 8.18392 4.20198 8.13757C4.15545 8.09121 4.10024 8.05447 4.03951 8.02945C3.97878 8.00443 3.91372 7.99162 3.84804 7.99174C3.78236 7.99186 3.71734 8.00492 3.65671 8.03017C3.59607 8.05542 3.541 8.09237 3.49465 8.1389L1.87865 9.7609C0.604647 11.0409 0.444647 13.0822 1.67665 14.3196C2.90998 15.5582 4.94798 15.3962 6.22331 14.1169L9.45465 10.8722C10.7286 9.59357 10.8886 7.55023 9.65665 6.31357Z" fill="black"/>
          </g>
          <defs>
          <clipPath id="clip0_88_1505">
          <rect width="16" height="16" fill="white"/>
          </clipPath>
          </defs>
        </svg>
      </div>
      {/* ===== DETAILS ===== */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Details</div>

        {/* Contact name */}
        <div className={styles.inputBox}>
          <svg className={styles.inputIcon} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 13.3333H1.66667V1.66667H13.3333M13.3333 0H1.66667C1.22464 0 0.800716 0.175595 0.488155 0.488155C0.175595 0.800716 0 1.22464 0 1.66667V13.3333C0 13.7754 0.175595 14.1993 0.488155 14.5118C0.800716 14.8244 1.22464 15 1.66667 15H13.3333C13.7754 15 14.1993 14.8244 14.5118 14.5118C14.8244 14.1993 15 13.7754 15 13.3333V1.66667C15 1.22464 14.8244 0.800716 14.5118 0.488155C14.1993 0.175595 13.7754 0 13.3333 0ZM11.25 11.0417C11.25 9.79167 8.75 9.16667 7.5 9.16667C6.25 9.16667 3.75 9.79167 3.75 11.0417V11.6667H11.25M7.5 7.70833C7.99728 7.70833 8.47419 7.51079 8.82582 7.15916C9.17746 6.80753 9.375 6.33061 9.375 5.83333C9.375 5.33605 9.17746 4.85914 8.82582 4.50751C8.47419 4.15588 7.99728 3.95833 7.5 3.95833C7.00272 3.95833 6.52581 4.15588 6.17417 4.50751C5.82254 4.85914 5.625 5.33605 5.625 5.83333C5.625 6.33061 5.82254 6.80753 6.17417 7.15916C6.52581 7.51079 7.00272 7.70833 7.5 7.70833Z" fill="#808080"/>
</svg>

          <input className={styles.input} value="Joe Doe" readOnly />        </div>

        {/* Phone */}
        <div className={styles.inputBox}>
          <HiOutlinePhone className={styles.inputIcon} />
          <input className={styles.input} value="+1 (000) 000-0000" readOnly />
        </div>

        {/* Email */}
        <div className={styles.inputBox}>
          <HiOutlineMail className={styles.inputIcon} />
          <input className={styles.input} value="example@gmail.com" readOnly />
        </div>
      </div>

      {/* ===== TEAMMATES ===== */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Teammates</div>

        <button
          type="button"
          className={styles.dropdown}
          onClick={() => setShowTeammates(!showTeammates)}
        >
          <div className={styles.dropdownLeft}>
            <RiTeamFill className={styles.dropdownIcon} />
            <span>Joe Doe</span>
          </div>
          <FaChevronDown color="#808080" />
        </button>

        {showTeammates && (
          <div className={styles.dropdownList}>
            {["Jane Hopper", "Hari Ram", "Sneha", "John Smith"].map((name, idx) => (
              <div key={idx} className={styles.dropdownItem}>
                <img src="/Hari.jpg" className={styles.dropdownAvatar} />
                {name}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ===== TICKET STATUS (dropdown) ===== */}
      <div className={styles.section}>
        <button
          type="button"
          className={styles.dropdown}
          onClick={() => setShowStatus(!showStatus)}
        >
          <div className={styles.dropdownLeft}>
            <LuTicket className={styles.dropdownIcon} />
            <span>Resolved</span>
          </div>
          <FaChevronDown color="#808080" />
        </button>

        {showStatus && (
          <div className={styles.dropdownList}>
            <div className={styles.dropdownItem}>Resolved</div>
            <div className={styles.dropdownItem}>Unresolved</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatDetails;
