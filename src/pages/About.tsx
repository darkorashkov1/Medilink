import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import styles from "../styles/About.module.css";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className={styles.aboutPage}>
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className="wrapper85">
          <div className={styles.heroText}>
            <span className={styles.eyebrow}>{t("about_page.eyebrow")}</span>
            <h1>{t("about_page.title")}</h1>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="wrapper85">
          <div className={styles.aboutGrid}>
            <div className={styles.storyCard}>
              <h2>{t("about_page.story_title")}</h2>
              <div className={styles.textBlock}>
                <p>
                  {t("about_page.story_p1")}
                </p>
                <p>{t("about_page.story_p2")}</p>
              </div>
            </div>

            <div className={styles.partnerCard}>
              <h2>{t("about_page.partner_title")}</h2>
              <div className={styles.textBlock}>
                <p>{t("about_page.partner_p1")}</p>
                <p className={styles.asortimanHighlight}>
                  {t("about_page.partner_p2")}
                </p>
              </div>
            </div>
          </div>

          <div className={styles.philosophyBlock}>
            <h2>{t("about_page.philosophy_title")}</h2>
            <p>{t("about_page.philosophy_p1")}</p>
            <p>{t("about_page.philosophy_p2")}</p>

            <div className={styles.mottoContainer}>
              <span className={styles.mottoWord}>{t("about_page.motto_quality")}</span>
              <span className={styles.mottoWord}>{t("about_page.motto_trust")}</span>
              <span className={styles.mottoWord}>{t("about_page.motto_partnership")}</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}