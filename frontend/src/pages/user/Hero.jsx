import React from "react";
import styles from "../../styles/user/Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      
      {/* LEFT SIDE */}
      <div className={styles.left}>
        <h1>Grow Your Business Faster with Hubly CRM</h1>
        <p>
          Manage leads, automate workflows, and close deals effortlessly—all in
          one powerful platform.
        </p>

        <div className={styles.actions}>
          <button className={styles.getStarted}>Get Started</button>
          <button className={styles.watch}>
            <span className={styles.playIcon}></span>
            Watch Video
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.right}>

        {/* MAIN HERO IMAGE */}
        <div className={styles.mainImage}>
          <img src="/1.jpg" alt="Hero Person" />
        </div>

        {/* NOTIFICATION CARD (Top Right) */}
        <div className={styles.notificationCard}>
          <img src="/user.png" className={styles.notifAvatar} />
          <div>
            <p className={styles.notifName}>Jerry Calzoni joined Swimming</p>
            <p className={styles.notifMeta}>Class · 9:22 AM</p>
          </div>
        </div>

        {/* SALES CARD (Bottom Right) */}
        <div className={styles.salesCard}>
          <img src="/graph.png" className={styles.salesGraph} />
        </div>

        {/* CALENDAR CARD (Bottom Left) */}
        <div className={styles.calendarCard}>
          <img src="/calendar.png" className={styles.calImg} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
