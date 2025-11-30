import React from "react";
import styles from "../../styles/user/LogosStrip.module.css";

import { SiAdobe, SiElastic, SiAirtable, SiFramer } from "react-icons/si";
import { FaDoorOpen } from "react-icons/fa";

const logos = [
  { name: "Adobe", icon: <SiAdobe /> },
  { name: "elastic", icon: <SiElastic /> },
  { name: "Opendoor", icon: <FaDoorOpen /> },
  { name: "Airtable", icon: <SiAirtable /> },
  { name: "elastic", icon: <SiElastic /> },
  { name: "Framer", icon: <SiFramer /> },
];

const LogosStrip = () => {
  return (
    <section className={styles.strip}>
      <div className={styles.inner}>
        {logos.map((logo, index) => (
          <div key={index} className={styles.logoItem}>
            <span className={styles.logoIcon}>{logo.icon}</span>
            <span>{logo.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogosStrip;
