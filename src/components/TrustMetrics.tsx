import { useTranslation } from "react-i18next";
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "../styles/TrustMetrics.module.css";

export default function TrustMetrics() {
  const { t } = useTranslation();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className={`revealOnScroll ${styles.metricsSection}`}>
      <div className="wrapper85">
        <div className={styles.mainGrid}>
          <div className={styles.statsContainer}>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>9+</span>
              <p className={styles.statLabel}>{t("trust_metrics.stat1_label")}</p>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>100%</span>
              <p className={styles.statLabel}>{t("trust_metrics.stat2_label")}</p>
            </div>
          </div>

          <div className={styles.pillarsContainer}>
            <div className={styles.pillarCard}>
              <h4>{t("trust_metrics.pillar1_title")}</h4>
              <p>{t("trust_metrics.pillar1_desc")}</p>
            </div>
            <div className={styles.pillarCard}>
              <h4>{t("trust_metrics.pillar2_title")}</h4>
              <p>{t("trust_metrics.pillar2_desc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}