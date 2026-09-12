import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import styles from "../styles/Partners.module.css";

export default function Partners() {
  const { t } = useTranslation();

  const registeredCategories = [
    { titleKey: "partners_page.categories.exam_gloves.title", descKey: "partners_page.categories.exam_gloves.desc" },
    { titleKey: "partners_page.categories.surg_gloves.title", descKey: "partners_page.categories.surg_gloves.desc" },
    { titleKey: "partners_page.categories.sutures.title", descKey: "partners_page.categories.sutures.desc" },
    { titleKey: "partners_page.categories.transfusion.title", descKey: "partners_page.categories.transfusion.desc" },
    { titleKey: "partners_page.categories.urology.title", descKey: "partners_page.categories.urology.desc" },
    { titleKey: "partners_page.categories.syringes.title", descKey: "partners_page.categories.syringes.desc" },
    { titleKey: "partners_page.categories.infusion.title", descKey: "partners_page.categories.infusion.desc" },
    { titleKey: "partners_page.categories.diagnostic.title", descKey: "partners_page.categories.diagnostic.desc" },
    { titleKey: "partners_page.categories.surgery.title", descKey: "partners_page.categories.surgery.desc" }
  ];

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
          <div className={styles.spotlightContainer}>
            <div className={styles.brandPanel}>
              <div className={styles.badge}>{t("partners_page.badge")}</div>
              <div className={styles.brandLogoMock}>
                <h2>TROGE</h2>
                <span>Medical GmbH</span>
              </div>
              <p className={styles.brandOrigin}>{t("partners_page.origin")}</p>
              <p className={styles.brandBio}>{t("partners_page.brand_bio")}</p>
              <a
                href="https://trogemedical.de"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.externalLink}
              >
                {t("partners_page.website_link")}
              </a>
            </div>

            <div className={styles.portfolioPanel}>
              <h3>{t("partners_page.portfolio_title")}</h3>
              <div className={styles.categoriesGrid}>
                {registeredCategories.map((cat, idx) => (
                  <div key={idx} className={styles.categoryCard}>
                    <div className={styles.cardIndicator}></div>
                    <h4>{t(cat.titleKey)}</h4>
                    <p>{t(cat.descKey)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
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