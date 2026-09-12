import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "../styles/ComingSoon.module.css";

interface ComingSoonProps {
  badgeKey?: string;
  titleKey?: string;
  descKeyPart1?: string;
  descKeyPart2?: string;
  highlightText?: string;
}

export default function ComingSoon({
  badgeKey = "products_page.construction.badge",
  titleKey = "products_page.construction.title",
  descKeyPart1 = "products_page.construction.desc_part1",
  descKeyPart2 = "products_page.construction.desc_part2",
  highlightText = "Troge Medical GmbH",
}: ComingSoonProps) {
  const { t } = useTranslation();

  return (
    <div className={styles.constructionContainer}>
      <div className="wrapper85">
        <div className={styles.mainWrapper}>
          <div className={styles.animationCanvas}>
            <div className={styles.gridGlassFloor}></div>

            <div className={`${styles.medicalBox} ${styles.boxPrimary}`}>
              <div className={styles.crossSymbol}></div>
            </div>
            <div className={`${styles.medicalBox} ${styles.boxSecondary}`}>
              <div className={styles.crossSymbol}></div>
            </div>
            <div className={`${styles.medicalBox} ${styles.boxGreen}`}>
              <div className={styles.crossSymbol}></div>
            </div>

            <div className={styles.laserScannerLine}></div>
            <div className={styles.statusPing}></div>
          </div>

          <div className={styles.textContent}>
            <span className={styles.badge}>{t(badgeKey)}</span>
            <h1>{t(titleKey)}</h1>
            <p>
              {t(descKeyPart1)}{" "}
              <strong>{highlightText}</strong>. {t(descKeyPart2)}
            </p>

            <div className={styles.actionWrap}>
              <Link to="/home" className={styles.primaryBackBtn}>
                {t("products_page.construction.back_home")}
              </Link>
              <Link to="/contact" className={styles.secondaryContactBtn}>
                {t("products_page.construction.contact_us")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}