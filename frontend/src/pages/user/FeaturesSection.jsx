import React from "react";
import styles from "../../styles/user/FeaturesSection.module.css";

const FeaturesSection = () => {
  return (
    <section className={styles.container}>
      {/* Main Title */}
      <h2 className={styles.title}>
        At its core, Hubly is a robust CRM<br />solution.
      </h2>

      <p className={styles.subtitle}>
        Hubly helps businesses streamline customer interactions, track leads, and
        automate tasks—saving you time and maximizing revenue. Whether you're a
        startup or an enterprise, Hubly adapts to your needs, giving you the tools
        to scale efficiently.
      </p>

      {/* CARD */}
      <div className={styles.card}>
        {/* -------- LEFT -------- */}
        <div className={styles.left}>
          <h3 className={styles.leftTitle}>MULTIPLE PLATFORMS TOGETHER!</h3>

          <p className={styles.helper}>
            Email communication is a breeze with our fully integrated, drag & drop
            email builder.
          </p>

          <div className={styles.featureBlock}>
            <strong>CLOSE</strong>
            <p>
              Capture leads using our landing pages, surveys, forms, calendars,
              inbound phone system & more!
            </p>
          </div>

          <div className={styles.featureBlock}>
            <strong>NURTURE</strong>
            <p>
              Capture leads using our landing pages, surveys, forms, calendars,
              inbound phone system & more!
            </p>
          </div>
        </div>

        {/* -------- RIGHT -------- */}
        <div className={styles.right}>
          <img className={styles.imageContainer} src="feature.jpg"></img>          
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
