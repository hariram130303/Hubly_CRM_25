import React, { useState } from "react";
import styles from "../../styles/admin/SignUp.module.css";
import { Link } from "react-router-dom";

const Signup = () => {
  // ---- STATE FOR INPUT FIELDS ----
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ---- FUNCTION TO SUBMIT DATA ----
  const handleSignup = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(
      "https://hubly-backend-crm.onrender.com/api/auth/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Signup failed");
      return;
    }

    alert("Account created successfully!");
    console.log("User:", data.user);
    console.log("Token:", data.token);

  } catch (err) {
    alert("Server error. Try again later.");
    console.error(err);
  }
};


  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logoRow}>
          <span className={styles.logoText}>Hubly</span>
        </div>

        <div className={styles.centerWrapper}>
          <div className={styles.headerRow}>
            <h2>Create an account</h2>
            <Link to="/login" className={styles.signInInstead}>Sign in instead</Link>
          </div>

          {/* ---------- FORM ---------- */}
          <form className={styles.form} onSubmit={handleSignup}>
            
            <label>First name</label>
            <input 
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label>Last name</label>
            <input 
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <label>Email</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className={styles.checkboxRow}>
              <input type="checkbox" />
              <p>
                By creating an account, I agree to our
                <a href="#" className={styles.link}> Terms of use </a> and
                <a href="#" className={styles.link}> Privacy Policy</a>.
              </p>
            </div>

            <button className={styles.loginBtn} type="submit">
              Create an account
            </button>
          </form>
          <p className={styles.footer}>
          This site is protected by reCAPTCHA and the 
          <a href="https://policies.google.com/privacy"> Google Privacy Policy </a> and 
          <a href="https://policies.google.com/terms"> Terms of Service </a> apply.
        </p>
        </div>
      </div>

      <div className={styles.right}>
        <img src="/image.jpg" className={styles.rightImage} />
      </div>
    </div>
  );
};

export default Signup;
