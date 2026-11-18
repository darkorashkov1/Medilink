import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import partnersData from "../data/partnersData.json";
import type { PartnerDetailItem } from "../types";
import styles from "../styles/Partners.module.css";

export default function Partners() {
  const { t } = useTranslation();
  const partners: PartnerDetailItem[] = partnersData as PartnerDetailItem[];

  return (
    <div className={styles.partnersPage}>
      <section className={styles.headerHero}>
        <div className="wrapper85">
          <span className={styles.eyebrow}>{t("partners_page.eyebrow")}</span>
          <h1>{t("partners_page.title")}</h1>
          <p>{t("partners_page.subtitle")}</p>
        </div>
      </section>

      <section className={styles.featuredSection}>
        <div className="wrapper85">
          {partners.map((partner) => (
            <div key={partner.id} className={styles.spotlightContainer} style={{ marginBottom: "80px" }}>
              <div className={styles.brandPanel}>
                <div className={styles.badge}>{t(partner.badgeKey)}</div>
                <div className={styles.brandLogoWrapper}>
                  <img
                    src={partner.logoSrc}
                    alt={partner.logoAlt}
                    className={styles.brandLogoImage}
                  />
                </div>
                <p className={styles.brandOrigin}>{t(partner.originKey)}</p>
                <p className={styles.brandBio}>{t(partner.bioKey)}</p>
                <a
                  href={partner.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.externalLink}
                >
                  {t(partner.websiteLinkKey)}
                </a>
              </div>

              <div className={styles.portfolioPanel}>
                <h3>{t(partner.portfolioTitleKey)}</h3>
                <div className={styles.categoriesGrid}>
                  {partner.categories.map((cat, idx) => (
                    <div key={idx} className={styles.categoryCard}>
                      <div className={styles.cardIndicator}></div>
                      <h4>{t(cat.titleKey)}</h4>
                      <p>{t(cat.descKey)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.futureSection}>
        <div className="wrapper85">
          <div className={styles.futureCard}>
            <div className={styles.pulseRadar}>
              <div className={styles.dot}></div>
              <div className={styles.ring}></div>
            </div>
            <h3>{t("partners_page.future_title")}</h3>
            <p>{t("partners_page.future_desc")}</p>
            <span className={styles.comingSoonBadge}>{t("partners_page.coming_soon")}</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}