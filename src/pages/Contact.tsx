import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subjectType: "ponuda",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xkjnlwjj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          subjectType: "ponuda",
          message: "",
        });

        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div className={styles.contactPage}>
      <div className="wrapper85">
        <div className={styles.headerSection}>
          <h1>{t("contact_page.title")}</h1>
          <p>{t("contact_page.description")}</p>
        </div>

        <div className={styles.mainGrid}>
          <div className={styles.formContainer}>
            <h2>{t("contact_page.form_title")}</h2>
            <p className={styles.formSub}>{t("contact_page.form_subtitle")}</p>

            {status === "success" && (
              <div className={styles.successBanner}>
                {t("contact_page.success_msg")}
              </div>
            )}

            {status === "error" && (
              <div className={styles.errorBanner} style={{ color: "red", marginBottom: "15px" }}>
                Failed to send message. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className={styles.contactForm}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">{t("contact_page.labels.name")}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("contact_page.placeholders.name")}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="phone">{t("contact_page.labels.phone")}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t("contact_page.placeholders.phone")}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email">{t("contact_page.labels.email")}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("contact_page.placeholders.email")}
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="subjectType">{t("contact_page.labels.subject")}</label>
                <select
                  id="subjectType"
                  name="subjectType"
                  value={formData.subjectType}
                  onChange={handleChange}
                >
                  <option value="понуда">{t("contact_page.options.offer")}</option>
                  <option value="асортиман">{t("contact_page.options.assortment")}</option>
                  <option value="достапност">{t("contact_page.options.availability")}</option>
                  <option value="останато">{t("contact_page.options.other")}</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">{t("contact_page.labels.message")}</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contact_page.placeholders.message")}
                ></textarea>
              </div>

              <button type="submit" className={styles.submitFormButton} disabled={status === "submitting"}>
                {status === "submitting" ? "..." : t("contact_page.submit_btn")}
              </button>
            </form>
          </div>

          <div className={styles.sidebarCards}>
            <div className={styles.infoCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle}>📞</div>
                <h3>{t("contact_page.sidebar.phone")}</h3>
              </div>
              <a href="tel:+38978891418" className={styles.infoDetail} style={{ color: "inherit", textDecoration: "none" }}>
                {t("contact_page.sidebar.phone_mob")}: <strong>+389 78 891 418</strong>
              </a>
              <br/><br/>
              <a href="tel:+38970336989" className={styles.infoDetail} style={{ color: "inherit", textDecoration: "none" }}>
                {t("contact_page.sidebar.phone_tel")}: <strong>+389 70 336 989</strong>
              </a>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle}>✉️</div>
                <h3>{t("contact_page.sidebar.email")}</h3>
              </div>
              <p>
                <a href="mailto:medilinkmak@gmail.com">medilinkmak@gmail.com</a>
              </p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle}>📍</div>
                <h3>{t("contact_page.sidebar.address")}</h3>
              </div>
              <p>{t("contact_page.sidebar.address_line1")}</p>
              <p>{t("contact_page.sidebar.address_line2")}</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle}>🕒</div>
                <h3>{t("contact_page.sidebar.hours")}</h3>
              </div>
              <p>{t("contact_page.sidebar.weekdays")}</p>
              <p>
                <strong>{t("contact_page.sidebar.hours_val")}</strong>
              </p>
              <p className={styles.closedText}>{t("contact_page.sidebar.weekend")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}