import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "../styles/AssortmentGrid.module.css";

export default function AssortmentGrid() {
  const { t } = useTranslation();

  const registeredItems = [
    { titleKey: "assortment.items.diagnostic", eng: "Diagnostic devices", colorClass: styles.blueGrad },
    { titleKey: "assortment.items.infusion", eng: "Infusion therapy", colorClass: styles.greenGrad },
    { titleKey: "assortment.items.sutures", eng: "Surgical sutures", colorClass: styles.mixGrad },
    { titleKey: "assortment.items.urology", eng: "Urology", colorClass: styles.blueGrad },
    { titleKey: "assortment.items.syringes", eng: "Syringes and needles", colorClass: styles.greenGrad },
    { titleKey: "assortment.items.exam_gloves", eng: "Examination gloves", colorClass: styles.mixGrad },
    { titleKey: "assortment.items.surg_gloves", eng: "Surgical gloves", colorClass: styles.blueGrad },
    { titleKey: "assortment.items.transfusion", eng: "Transfusion", colorClass: styles.greenGrad },
    { titleKey: "assortment.items.surgery", eng: "Surgery and anesthesia", colorClass: styles.mixGrad },
  ];

  return (
    <section className={styles.gridSection}>
      <div className={styles.gridContainer}>
        {registeredItems.map((item, index) => (
          <Link key={index} to="/coming-soon" className={styles.productCardLink}>
            <div className={styles.productCard}>
              <div className={`${styles.graphicHeader} ${item.colorClass}`}>
                <div className={styles.abstractCircle1} />
                <div className={styles.abstractCircle2} />
                <div className={styles.medicalCrossSign} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardIndicator} />
                <h3>{t(item.titleKey)}</h3>
                {/* <span>{item.eng}</span> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}