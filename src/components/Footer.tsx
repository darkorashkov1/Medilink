import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
    if (error) setError("");
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError(t("footer.error_invalid"));
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/xkjnlwjj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, form_type: "Newsletter Subscription" }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
        alert(t("footer.success_alert"));
      } else {
        setStatus("error");
        setError(t("footer.error_invalid") || "Submission failed.");
      }
    } catch (err) {
      setStatus("error");
      setError(t("footer.error_invalid") || "Network error.");
    }
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        // Keep values or clear them depending on design, matching previous code logic
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <footer className={styles.footerGlobal}>
      <div className="wrapper85">
        <div className={styles.border}></div>
        <div className={styles.footerContainer}>
          <div className={styles.infoSection}>
            <img src="/images/logo.png" alt="Logo" width={50} height={50} className={styles.footerLogo} />
            <div className={styles.addressEmailContainer}>
              <div className={styles.infoBlock}>
                <div className={styles.infoTitle}>{t("footer.address_title")}</div>
                <div className={styles.infoDetail}>{t("footer.address_line1")}</div>
                <div className={styles.infoDetail}>{t("footer.address_line2")}</div>
              </div>
              <div className={styles.infoBlock}>
                <div className={styles.infoTitle}>{t("footer.email_title")}</div>
                <a href="mailto:medilinkmak@gmail.com" className={styles.infoDetail}>medilinkmak@gmail.com</a>
              </div>
              <div className={styles.infoBlock}>
                <div className={styles.infoTitle}>{t("footer.contact_title")}</div>
                <a href="tel:+38978891418" className={styles.infoDetail} style={{ color: "inherit", textDecoration: "none" }}>+389 70 123 456</a>
                <a href="tel:+38970336989" className={styles.infoDetail} style={{ color: "inherit", textDecoration: "none" }}>+389 70 336 989</a>
              </div>
            </div>
          </div>

          <div className={styles.subscriptionSection}>
            <div className={styles.subscriptionTitle}>{t("footer.newsletter_title")}</div>
            <form onSubmit={handleSubmit} className={styles.subscriptionInputContainer}>
              <input
                ref={inputRef}
                type="email"
                placeholder={t("footer.email_placeholder")}
                value={email}
                onChange={handleEmailChange}
                className={`${styles.inputField} ${error ? styles.inputFieldError : ""}`}
                required
              />
              <button className={styles.submitButton} type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? "..." : t("footer.subscribe_btn")}
              </button>
            </form>
            {error && <span className={styles.error}>{error}</span>}

            <div className={styles.socialMediaContainer}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <img src="/images/mdi_linkedin.png" alt="LinkedIn" width={28} height={27} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <img src="/images/mdi_instagram.png" alt="Instagram" width={28} height={27} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <img src="/images/mdi_facebook.png" alt="Facebook" width={28} height={27} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}