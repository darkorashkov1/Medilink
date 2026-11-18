import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";
import styles from "../styles/Navbar.module.css";

const NAV_ITEMS = [
  { path: "/home", labelKey: "nav.home" },
  { path: "/partners", labelKey: "nav.partners" },
  { path: "/products", labelKey: "nav.products" },
  { path: "/about", labelKey: "nav.about" },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle navbar background change on scroll
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleLanguage = (lang: string) => i18n.changeLanguage(lang);
  const isMk = i18n.language.startsWith("mk");

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarContainer}>
        <Link className={styles.logo} to="/home" onClick={closeMenu}>
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

        <div
          className={`${styles.backdrop} ${isMenuOpen ? styles.backdropOpen : ""}`}
          onClick={closeMenu}
        />

        <div className={`${styles.navActions} ${isMenuOpen ? styles.menuOpen : ""}`}>
          <ul className={styles.links}>
            {NAV_ITEMS.map(({ path, labelKey }) => {
              const isActive = location.pathname === path;
              return (
                <li key={path}>
                  <Link
                    to={path}
                    onClick={closeMenu}
                    className={isActive ? styles.activeLink : styles.link}
                  >
                    {t(labelKey)}
                  </Link>
                </li>
              );
            })}
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

          <Link to="/contact" onClick={closeMenu} className={styles.submitButton}>
            {t("nav.contact")}
          </Link>
        </div>
      </div>
    </nav>
  );
}