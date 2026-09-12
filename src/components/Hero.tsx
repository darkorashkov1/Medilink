import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.heroSection}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.heroVideo}
      >
        <source src="/src/assets/videos/hero_video.mp4" type="video/mp4" />
      </video>

      <div className={styles.heroOverlay}></div>

      <div className="wrapper85">
        <div className={styles.heroContent}>
          <span className={styles.badge}>
            {t("hero.badge", "MEDILINK • MEDICAL DISTRIBUTION")}
          </span>
          <h1>{t("hero.title", "Modern solutions for modern healthcare.")}</h1>
          <p>
            {t(
              "hero.subtitle",
              "Reliable partner for import and distribution of medical devices and consumables."
            )}
          </p>

          <div className={styles.buttonGroup}>
            <Link to="/products" className={styles.primaryBtn}>
              {t("hero.productsBtn", "Products")}
            </Link>
            <Link to="/contact" className={styles.secondaryBtn}>
              {t("hero.contactBtn", "Contact Us")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}