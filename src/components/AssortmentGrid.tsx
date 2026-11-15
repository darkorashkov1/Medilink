import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "../styles/AssortmentGrid.module.css";

export default function AssortmentGrid() {
  const { t } = useTranslation();

  const registeredItems = [
    { 
      titleKey: "assortment.items.diagnostic", 
      eng: "Diagnostic devices", 
      image: "/images/products_cards/diagnostic_devices.jpg"
    },
    { 
      titleKey: "assortment.items.infusion", 
      eng: "Infusion therapy", 
      image: "/images/products_cards/infusion_therapy.jpg" 
    },
    { 
      titleKey: "assortment.items.sutures", 
      eng: "Surgical sutures", 
      image: "/images/products_cards/surgical_sutures.jpg" 
    },
    { 
      titleKey: "assortment.items.urology", 
      eng: "Urology", 
      image: "/images/products_cards/urology.jpg" 
    },
    { 
      titleKey: "assortment.items.syringes", 
      eng: "Syringes and needles", 
      image: "/images/products_cards/syringes_and_needles.jpg" 
    },
    { 
      titleKey: "assortment.items.exam_gloves", 
      eng: "Examination gloves", 
      image: "/images/products_cards/examination_gloves.jpg" 
    },
    { 
      titleKey: "assortment.items.surg_gloves", 
      eng: "Surgical gloves", 
      image: "/images/products_cards/surgical_gloves.jpg" 
    },
    { 
      titleKey: "assortment.items.transfusion", 
      eng: "Transfusion", 
      image: "/images/products_cards/transfusion.jpg" 
    },
    { 
      titleKey: "assortment.items.surgery", 
      eng: "Surgery and anesthesia", 
      image: "/images/products_cards/surgery_and_anesthesia.jpg" 
    },
  ];

  return (
    <section className={styles.gridSection}>
      <div className={styles.gridContainer}>
        {registeredItems.map((item, index) => (
          <Link key={index} to="/coming-soon" className={styles.productCardLink}>
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