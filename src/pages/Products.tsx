import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import productsData from "../data/productsData.json";
import ComingSoon from "./ComingSoon";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import type { Product } from "../components/ProductCard";
import styles from "../styles/Products.module.css";

export default function Products() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.startsWith("en") ? "en" : "mk";

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products: Product[] = productsData as Product[];
  const isCatalogEmpty = products.length === 0;

  const categories = useMemo(() => {
    const categoryMap = new Map();
    products.forEach((p) => {
      const catKeyIdentifier = p.categoryKey["en"] || Object.values(p.categoryKey)[0];
      if (!categoryMap.has(catKeyIdentifier)) {
        categoryMap.set(catKeyIdentifier, p.categoryKey);
      }
    });
    return Array.from(categoryMap.values());
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const name = item.name[currentLang] || item.name["en"] || "";
      const desc = item.description[currentLang] || item.description["en"] || "";
      const categoryStr = item.categoryKey[currentLang] || item.categoryKey["en"] || "";

      const matchesSearch =
        name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        categoryStr.toLowerCase().includes(searchTerm.toLowerCase());

      const itemCategoryIdentifier = item.categoryKey["en"];
      const matchesCategory =
        selectedCategory === "all" || itemCategoryIdentifier === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory, currentLang]);

  if (isCatalogEmpty) {
    return <ComingSoon />;
  }

  return (
    <div className={styles.catalogPage}>
      <section className={styles.catalogHero}>
        <div className="wrapper85">
          <span className={styles.badge}>{t("products_page.badge")}</span>
          <h1>{t("products_page.title")}</h1>
          <p>{t("products_page.subtitle")}</p>

          <div className={styles.filterControls}>
            <input
              type="text"
              placeholder={t("products_page.search_placeholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={styles.categorySelect}
            >
              <option value="all">{t("products_page.category_all")}</option>
              {categories.map((catObj) => {
                const identifier = catObj["en"];
                const displayLabel = catObj[currentLang] || catObj["en"];
                return (
                  <option key={identifier} value={identifier}>
                    {displayLabel}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </section>

      <section className={styles.productsGridSection}>
        <div className="wrapper85">
          {filteredProducts.length === 0 ? (
            <div className={styles.noResults}>
              <p>{t("products_page.no_results")}</p>
            </div>
          ) : (
            <div className={styles.productsGrid}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} currentLang={currentLang} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}