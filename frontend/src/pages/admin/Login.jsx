import React, { useState } from "react";
import { useNavigate } from "react-router-dom";   // ✅ IMPORT THIS
import styles from "../../styles/admin/Login.module.css";

const Login = () => {
  const navigate = useNavigate();                 // ✅ CREATE NAVIGATOR

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("https://hubly-backend-crm.onrender.com/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);

      alert("Login successful!");

      navigate("/dashboard");   // ✅ REDIRECT USER TO DASHBOARD
    } else {
      alert(data.message || "Login failed");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logoRow}>
          <span className={styles.logoText}>Hubly</span>
        </div>

        <div className={styles.centerWrapper}>
          <h2 className={styles.title}>Sign in to your Plexify</h2>

          <form className={styles.form} onSubmit={handleLogin}>
            <label className={styles.label}>Email</label>
            <input
              className={styles.input}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className={styles.label}>Password</label>
            <input
              className={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="currentpassword"
            />

            <button className={styles.loginBtn} type="submit">
              Log in
            </button>
          </form>

          <p className={styles.signup}>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>

          <p className={styles.footerText}>
            This site is protected by reCAPTCHA and the{" "}
            <a href="https://policies.google.com/privacy" target="_blank">
              Google Privacy Policy
            </a>{" "}
            and{" "}
            <a href="https://policies.google.com/terms" target="_blank">
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>
      </div>

      <div className={styles.right}>
        <img src="/image.jpg" alt="Right side" className={styles.rightImage} />
      </div>
    </div>
  );
};

export default Login;
