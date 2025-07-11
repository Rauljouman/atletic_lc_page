"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram as faInstagramBrand } from "@fortawesome/free-brands-svg-icons";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/teams", label: "Equipos" },
  { href: "/aboutUs", label: "Sobre nosotros" },
  { href: "/contact", label: "Contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
  const onResize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

useEffect(() => {
  const onResize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  const raf = requestAnimationFrame(onResize);

  window.addEventListener("resize", onResize);
  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", onResize);
  };
}, []);

  window.addEventListener("resize", onResize);
  return () => {
    clearTimeout(timeout);
    window.removeEventListener("resize", onResize);
  };
}, []);


  useEffect(() => {
    document.body.classList.toggle("noScroll", menuOpen);
  }, [menuOpen]);

  return (
    <>
      {isMobile && (
        <div
          className={styles.mobileMenuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <div className={styles.hamburger}></div>
        </div>
      )}

      <nav
        className={`${styles.mobileMenu} ${menuOpen ? styles.active : ""}`}
        aria-label="Menú móvil"
      >
        <button
          className={styles.closeButton}
          onClick={() => setMenuOpen(false)}
          aria-label="Cerrar menú"
        >
          ✕
        </button>
        {NAV_LINKS.map(({ href, label }) => (
          <Link key={href} href={href} className={styles.navLink} onClick={() => setMenuOpen(false)}>
            {label}
          </Link>
        ))}
      </nav>

      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/" aria-label="Ir a la página de inicio">
            <Image
              src="/assets/logo.png"
              alt="Escudo Atletic Les Corts"
              width={isMobile ? 40 : 60}
              height={isMobile ? 40 : 60}
            />
          </Link>
          <a
            href="https://www.instagram.com/atlescortsfs/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <FontAwesomeIcon icon={faInstagramBrand} />
          </a>
          <a href="mailto:cscfutsal2017@gmail.com" title="Correo electrónico">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="tel:+34678677719" title="Teléfono">
            <FontAwesomeIcon icon={faPhone} />
          </a>
        </div>
        <nav className={styles.right} aria-label="Navegación principal">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className={styles.navLink}>
              {label}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
