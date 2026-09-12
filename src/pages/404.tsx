import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "../styles/404.module.css";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className={styles.errorContainer}>
      <div className={styles.svgWrapper}>
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="80" y="20" width="40" height="160" rx="10" fill="#178a4b" className={styles.Polygon1} />
          <rect x="20" y="80" width="160" height="40" rx="10" fill="#3a3a9f" className={styles.Polygon2} />
          <circle cx="40" cy="40" r="12" fill="#178a4b" className={styles.Polygon3} />
          <circle cx="160" cy="160" r="15" fill="#3a3a9f" className={styles.Polygon4} />
          <circle cx="170" cy="40" r="8" fill="#d0d5dd" className={styles.Polygon5} />
        </svg>
      </div>

      <div className={styles.messageBox}>
        <h1>{t("not_found.title")}</h1>
        <p>{t("not_found.description")}</p>
        <div className={styles.buttonsCon}>
          <div className={styles.actionLinkWrap}>
            <Link to="/home">{t("not_found.back_home")}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}