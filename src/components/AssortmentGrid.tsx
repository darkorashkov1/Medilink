import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import assortmentData from "../data/assortmentData.json";
import type { AssortmentItem } from "../types";
import styles from "../styles/AssortmentGrid.module.css";

export default function AssortmentGrid() {
  const { t } = useTranslation();
  const items: AssortmentItem[] = assortmentData as AssortmentItem[];

  return (
    <section className={styles.gridSection}>
      <div className={styles.gridContainer}>
        {items.map((item) => (
          <Link key={item.id} to="/coming-soon" className={styles.productCardLink}>
            <div className={styles.productCard}>
              <div className={styles.imageHeader}>
                <img 
                  src={item.image} 
                  alt={item.eng} 
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/images/products_cards/placeholder.png";
                  }}
                />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardIndicator} />
                <h3>{t(item.titleKey)}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}