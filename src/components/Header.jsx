"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram as faInstagramBrand } from "@fortawesome/free-brands-svg-icons";
import styles from "./Header.module.css";
import Logo from "../assets/logo.png";

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
    const onResize = () => setIsMobile(window.innerWidth <= 767);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("noScroll", menuOpen);
  }, [menuOpen]);

  return (
    <>
      {isMobile && (
        <div className={styles.mobileMenuToggle} onClick={() => setMenuOpen(!menuOpen)}>
          <div className={styles.hamburger}></div>
        </div>
      )}

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.active : ""}`}>
        <button className={styles.closeButton} onClick={() => setMenuOpen(false)}>✕</button>
        {NAV_LINKS.map(({ href, label }) => (
          <Link key={href} href={href} className={styles.navLink} onClick={() => setMenuOpen(false)}>
            {label}
          </Link>
        ))}
      </div>

      <header className={styles.header}>
        <div className={styles.left}>
          <Image src={Logo} alt="Escudo Atletic Les Corts" width={50} height={50} />
          <a href="https://www.instagram.com/atlescortsfs/" target="_blank" rel="noopener noreferrer" title="Instagram">
            <FontAwesomeIcon icon={faInstagramBrand} />
          </a>
          <a href="mailto:cscfutsal2017@gmail.com" title="Email">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="tel:+34678677719" title="Teléfono">
            <FontAwesomeIcon icon={faPhone} />
          </a>
        </div>
        <div className={styles.right}>
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className={styles.navLink}>
              {label}
            </Link>
          ))}
        </div>
      </header>
    </>
  );
}
