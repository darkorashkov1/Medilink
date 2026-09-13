import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleLinkClick() {
    setIsMenuOpen(false);
  }

  function toggleLanguage(lang: string) {
    i18n.changeLanguage(lang);
  }

  const isMk = i18n.language.startsWith("mk");

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarContainer}>
        <Link className={styles.logo} to="/home">
          <img src="/images/logo.png" alt="Medilink Logo" width={40} height={40} />
          <span>{t("nav.logo", "Medilink")}</span>
        </Link>

        <button
          className={`${styles.menuToggle} ${isMenuOpen ? styles.toggleActive : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.navActions} ${isMenuOpen ? styles.menuOpen : ""}`}>
          <ul className={styles.links}>
            <li>
              <Link
                to="/home"
                onClick={handleLinkClick}
                className={location.pathname === "/home" ? styles.activeLink : styles.link}
              >
                {t("nav.home")}
              </Link>
            </li>
            <li>
              <Link
                to="/partners"
                onClick={handleLinkClick}
                className={location.pathname === "/partners" ? styles.activeLink : styles.link}
              >
                {t("nav.partners")}
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                onClick={handleLinkClick}
                className={location.pathname === "/products" ? styles.activeLink : styles.link}
              >
                {t("nav.products")}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={handleLinkClick}
                className={location.pathname === "/about" ? styles.activeLink : styles.link}
              >
                {t("nav.about")}
              </Link>
            </li>
          </ul>

          <div className={styles.langSwitcher}>
            <button
              type="button"
              onClick={() => toggleLanguage("mk")}
              className={`${styles.langBtn} ${isMk ? styles.langBtnActive : ""}`}
            >
              MK
            </button>
            <button
              type="button"
              onClick={() => toggleLanguage("en")}
              className={`${styles.langBtn} ${!isMk ? styles.langBtnActive : ""}`}
            >
              EN
            </button>
          </div>

          <ThemeToggle />

          <Link to="/contact" onClick={handleLinkClick} className={styles.submitButton}>
            {t("nav.contact")}
          </Link>
        </div>
      </div>
    </nav>
  );
}