import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "../styles/Products.module.css";

export interface Product {
  id: string;
  code: string;
  inStock: boolean;
  categoryKey: Record<string, string>;
  image: string;
  name: Record<string, string>;
  description: Record<string, string>;
}

interface ProductCardProps {
  product: Product;
  currentLang: string;
}

export default function ProductCard({ product, currentLang }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const name = product.name[currentLang] || product.name["en"];
  const description = product.description[currentLang] || product.description["en"];
  const categoryName = product.categoryKey[currentLang] || product.categoryKey["en"];

  const inStockText = currentLang === "mk" ? "На залиха" : "In Stock";
  const outOfStockText = currentLang === "mk" ? "Нема на залиха" : "Out of Stock";
  const detailsText = currentLang === "mk" ? "Види детали" : "View Details";

  return (
    <>
      {/* Product Card */}
      <div className={styles.productCard} onClick={() => setIsModalOpen(true)}>
        <div className={styles.imageWrapper}>
          <img src={product.image} alt={name} loading="lazy" />
          <span className={`${styles.stockBadge} ${product.inStock ? styles.inStock : styles.outOfStock}`}>
            {product.inStock ? inStockText : outOfStockText}
          </span>
        </div>
        <div className={styles.cardBody}>
          <span className={styles.categoryTag}>{categoryName}</span>
          <h3>{name}</h3>
          <span className={styles.productCode}>REF: {product.code}</span>
          <p className={styles.productDesc}>{description}</p>
          <span className={styles.inquireBtn}>{detailsText}</span>
        </div>
      </div>

      {isModalOpen &&
        createPortal(
          <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className={styles.modalCloseBtn}
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
              >
                ×
              </button>
              <div className={styles.modalBody}>
                <div className={styles.modalImageWrapper}>
                  <img src={product.image} alt={name} />
                </div>
                <div className={styles.modalDetails}>
                  <span className={styles.categoryTag}>{categoryName}</span>
                  <h2>{name}</h2>
                  <span className={styles.productCode}>REF: {product.code}</span>
                  <span className={`${styles.stockBadge} ${product.inStock ? styles.inStock : styles.outOfStock}`}>
                    {product.inStock ? inStockText : outOfStockText}
                  </span>
                  <p className={styles.modalDescription}>{description}</p>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}