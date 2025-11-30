import React from "react";
import styles from "../../styles/user/PricingSection.module.css";

const PricingSection = () => {
  return (
    <section className={styles.wrapper}>
      <h2>We have plans for everyone!</h2>
      <p className={styles.subtitle}>
        We started with a strong foundation, then simply built all of the sales and
        marketing tools ALL businesses need under one platform.
      </p>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>STARTER</h3>
          <p className={styles.smallText}>
            Best for local businesses needing to improve their online reputation.
          </p>
          <p className={styles.price}>
            $199 <span>/monthly</span>
          </p>

          <p className={styles.subheading}>What's included</p>
          <ul>
            <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#E1EEFA"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M17.0964 7.39016L9.93641 14.3002L8.03641 12.2702C7.68641 11.9402 7.13641 11.9202 6.73641 12.2002C6.34641 12.4902 6.23641 13.0002 6.47641 13.4102L8.72641 17.0702C8.94641 17.4102 9.32641 17.6202 9.75641 17.6202C10.1664 17.6202 10.5564 17.4102 10.7764 17.0702C11.1364 16.6002 18.0064 8.41016 18.0064 8.41016C18.9064 7.49016 17.8164 6.68016 17.0964 7.38016V7.39016Z" fill="#2F5F8B"/>
                </svg>Unlimited Users
            </li>
            <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#E1EEFA"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M17.0964 7.39016L9.93641 14.3002L8.03641 12.2702C7.68641 11.9402 7.13641 11.9202 6.73641 12.2002C6.34641 12.4902 6.23641 13.0002 6.47641 13.4102L8.72641 17.0702C8.94641 17.4102 9.32641 17.6202 9.75641 17.6202C10.1664 17.6202 10.5564 17.4102 10.7764 17.0702C11.1364 16.6002 18.0064 8.41016 18.0064 8.41016C18.9064 7.49016 17.8164 6.68016 17.0964 7.38016V7.39016Z" fill="#2F5F8B"/>
                </svg>GMB Messaging
            </li>
            <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#E1EEFA"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M17.0964 7.39016L9.93641 14.3002L8.03641 12.2702C7.68641 11.9402 7.13641 11.9202 6.73641 12.2002C6.34641 12.4902 6.23641 13.0002 6.47641 13.4102L8.72641 17.0702C8.94641 17.4102 9.32641 17.6202 9.75641 17.6202C10.1664 17.6202 10.5564 17.4102 10.7764 17.0702C11.1364 16.6002 18.0064 8.41016 18.0064 8.41016C18.9064 7.49016 17.8164 6.68016 17.0964 7.38016V7.39016Z" fill="#2F5F8B"/>
                </svg>GMB Call Tracking
            </li>
            <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#E1EEFA"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M17.0964 7.39016L9.93641 14.3002L8.03641 12.2702C7.68641 11.9402 7.13641 11.9202 6.73641 12.2002C6.34641 12.4902 6.23641 13.0002 6.47641 13.4102L8.72641 17.0702C8.94641 17.4102 9.32641 17.6202 9.75641 17.6202C10.1664 17.6202 10.5564 17.4102 10.7764 17.0702C11.1364 16.6002 18.0064 8.41016 18.0064 8.41016C18.9064 7.49016 17.8164 6.68016 17.0964 7.38016V7.39016Z" fill="#2F5F8B"/>
                </svg>24/7 Award Winning Support
            </li>
          </ul>

          <button className={styles.cta}>Sign up for Starter</button>
        </div>

        <div className={`${styles.card} ${styles.cardPrimary}`}>
          <h3>GROW</h3>
          <p className={styles.smallText}>
            Best for all businesses that want to take full control of their marketing.
          </p>
          <p className={styles.price}>
            $399 <span>/monthly</span>
          </p>

          <p className={styles.subheading}>What's included</p>
          <ul>
            <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#E1EEFA"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M17.0964 7.39016L9.93641 14.3002L8.03641 12.2702C7.68641 11.9402 7.13641 11.9202 6.73641 12.2002C6.34641 12.4902 6.23641 13.0002 6.47641 13.4102L8.72641 17.0702C8.94641 17.4102 9.32641 17.6202 9.75641 17.6202C10.1664 17.6202 10.5564 17.4102 10.7764 17.0702C11.1364 16.6002 18.0064 8.41016 18.0064 8.41016C18.9064 7.49016 17.8164 6.68016 17.0964 7.38016V7.39016Z" fill="#2F5F8B"/>
                </svg>Pipeline Management
                </li>
            <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#E1EEFA"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M17.0964 7.39016L9.93641 14.3002L8.03641 12.2702C7.68641 11.9402 7.13641 11.9202 6.73641 12.2002C6.34641 12.4902 6.23641 13.0002 6.47641 13.4102L8.72641 17.0702C8.94641 17.4102 9.32641 17.6202 9.75641 17.6202C10.1664 17.6202 10.5564 17.4102 10.7764 17.0702C11.1364 16.6002 18.0064 8.41016 18.0064 8.41016C18.9064 7.49016 17.8164 6.68016 17.0964 7.38016V7.39016Z" fill="#2F5F8B"/>
                </svg>Marketing Automation Campaigns
            </li>
            <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#E1EEFA"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M17.0964 7.39016L9.93641 14.3002L8.03641 12.2702C7.68641 11.9402 7.13641 11.9202 6.73641 12.2002C6.34641 12.4902 6.23641 13.0002 6.47641 13.4102L8.72641 17.0702C8.94641 17.4102 9.32641 17.6202 9.75641 17.6202C10.1664 17.6202 10.5564 17.4102 10.7764 17.0702C11.1364 16.6002 18.0064 8.41016 18.0064 8.41016C18.9064 7.49016 17.8164 6.68016 17.0964 7.38016V7.39016Z" fill="#2F5F8B"/>
                </svg>Live Call Transfer
            </li>
            <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#E1EEFA"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M17.0964 7.39016L9.93641 14.3002L8.03641 12.2702C7.68641 11.9402 7.13641 11.9202 6.73641 12.2002C6.34641 12.4902 6.23641 13.0002 6.47641 13.4102L8.72641 17.0702C8.94641 17.4102 9.32641 17.6202 9.75641 17.6202C10.1664 17.6202 10.5564 17.4102 10.7764 17.0702C11.1364 16.6002 18.0064 8.41016 18.0064 8.41016C18.9064 7.49016 17.8164 6.68016 17.0964 7.38016V7.39016Z" fill="#2F5F8B"/>
                </svg>GMB Messaging
            </li>
            <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#E1EEFA"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M17.0964 7.39016L9.93641 14.3002L8.03641 12.2702C7.68641 11.9402 7.13641 11.9202 6.73641 12.2002C6.34641 12.4902 6.23641 13.0002 6.47641 13.4102L8.72641 17.0702C8.94641 17.4102 9.32641 17.6202 9.75641 17.6202C10.1664 17.6202 10.5564 17.4102 10.7764 17.0702C11.1364 16.6002 18.0064 8.41016 18.0064 8.41016C18.9064 7.49016 17.8164 6.68016 17.0964 7.38016V7.39016Z" fill="#2F5F8B"/>
                </svg>Embed-able Form Builder
            </li>
            <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#E1EEFA"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M17.0964 7.39016L9.93641 14.3002L8.03641 12.2702C7.68641 11.9402 7.13641 11.9202 6.73641 12.2002C6.34641 12.4902 6.23641 13.0002 6.47641 13.4102L8.72641 17.0702C8.94641 17.4102 9.32641 17.6202 9.75641 17.6202C10.1664 17.6202 10.5564 17.4102 10.7764 17.0702C11.1364 16.6002 18.0064 8.41016 18.0064 8.41016C18.9064 7.49016 17.8164 6.68016 17.0964 7.38016V7.39016Z" fill="#2F5F8B"/>
                </svg>Reputation Management
            </li>
            <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#E1EEFA"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M17.0964 7.39016L9.93641 14.3002L8.03641 12.2702C7.68641 11.9402 7.13641 11.9202 6.73641 12.2002C6.34641 12.4902 6.23641 13.0002 6.47641 13.4102L8.72641 17.0702C8.94641 17.4102 9.32641 17.6202 9.75641 17.6202C10.1664 17.6202 10.5564 17.4102 10.7764 17.0702C11.1364 16.6002 18.0064 8.41016 18.0064 8.41016C18.9064 7.49016 17.8164 6.68016 17.0964 7.38016V7.39016Z" fill="#2F5F8B"/>
                </svg>24/7 Award Winning Support
            </li>
          </ul>

          <button className={styles.cta}>Sign up for Grow</button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
