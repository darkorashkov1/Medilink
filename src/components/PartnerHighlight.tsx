import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "../styles/PartnerHighlight.module.css";

export default function PartnerHighlight() {
  const { t } = useTranslation();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className={`revealOnScroll ${styles.highlightSection}`}>
      <div className="wrapper85">
        <div className={styles.bannerBox}>

          {/* --- External Link Wrapper for Troge Medical Logo --- */}
          <a
            href="https://www.trogemedical.de/en/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.brandLink}
          >
            <div className={styles.brandSlate}>
              <div className={styles.logoWrapper}>
                <img 
                  src="/images/troge-logo.png" 
                  alt="Troge Medical Hamburg Logo" 
                  className={styles.brandLogoImage} 
                />
              </div>
              <p className={styles.brandSubtitle}>{t("partner_highlight.subtitle")}</p>
            </div>
          </a>

          <div className={styles.contentSlate}>
            <span className={styles.badge}>{t("partner_highlight.badge")}</span>
            <h3>{t("partner_highlight.title")}</h3>
            <p>
              {t("partner_highlight.description_part1")}{" "}
              <strong>Troge Medical GmbH</strong>{" "}
              {t("partner_highlight.description_part2")}
            </p>
            <Link to="/partners" className={styles.ctaButton}>
              {t("partner_highlight.cta")}
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}