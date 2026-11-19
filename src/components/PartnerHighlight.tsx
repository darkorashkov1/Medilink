import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import partnerData from "../data/partnerHighlightData.json";
import type { PartnerHighlightData } from "../types";
import styles from "../styles/PartnerHighlight.module.css";

export default function PartnerHighlight() {
  const { t } = useTranslation();
  const sectionRef = useScrollReveal<HTMLElement>();
  const partners: PartnerHighlightData[] = partnerData as PartnerHighlightData[];

  return (
    <section ref={sectionRef} className={`revealOnScroll ${styles.highlightSection}`}>
      <div className="wrapper85">
        {partners.map((data, index) => (
          <div
            key={`${data.partnerName}-${index}`}
            className={styles.bannerBox}
            style={{ marginBottom: index !== partners.length - 1 ? "40px" : "0" }}
          >
            <a
              href={data.partnerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.brandLink}
            >
              <div className={styles.brandSlate}>
                <div className={styles.logoWrapper}>
                  <img
                    src={data.logoSrc}
                    alt={data.logoAlt}
                    className={styles.brandLogoImage}
                  />
                </div>
                <p className={styles.brandSubtitle}>{t(data.subtitleKey)}</p>
              </div>
            </a>

            <div className={styles.contentSlate}>
              <span className={styles.badge}>{t(data.badgeKey)}</span>
              <h3>{t(data.titleKey)}</h3>
              <p>
                {t(data.descPart1Key)}{" "}
                <strong>{data.partnerName}</strong>{" "}
                {t(data.descPart2Key)}
              </p>
              <Link to={data.ctaRoute} className={styles.ctaButton}>
                {t(data.ctaKey)}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}