"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "/", label: "Inici" },
  { href: "/teams", label: "Equips" },
  { href: "/aboutUs", label: "Sobre nosaltres" },
  { href: "/contact", label: "Contacte" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    onResize();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("noScroll", menuOpen);
  }, [menuOpen]);

  return (
    <>
      {isMobile && (
        <button
          type="button"
          className={styles.mobileMenuToggle}
          onClick={() => setMenuOpen(true)}
          aria-label="Obrir menú"
        >
          <div className={styles.hamburger}></div>
        </button>
      )}

      <nav
        className={`${styles.mobileMenu} ${menuOpen ? styles.active : ""}`}
        aria-label="Menú mòbil"
      >
        <button
          className={styles.closeButton}
          onClick={() => setMenuOpen(false)}
          aria-label="Tancar menú"
        >
          ✕
        </button>

        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={styles.mobileNavLink}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>

      <header className={styles.header}>
        <div className={styles.left}>
          <a href="mailto:coordinacion.atlcfs@gmail.com" title="Correu electrònic">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="tel:+34678677719" title="Telèfon">
            <FontAwesomeIcon icon={faPhone} />
          </a>

          <Link href="/" aria-label="Anar a l'inici" className={styles.logo}>
            <Image
              src="/assets/logo.png"
              alt="Escut Atlètic Les Corts"
              width={60}
              height={60}
            />
          </Link>

          <a
            href="https://www.tiktok.com/@atletic.les.corts"
            target="_blank"
            rel="noopener noreferrer"
            title="TikTok"
          >
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a
            href="https://www.youtube.com/channel/UC35CNKhnzuezjFxM4MPn0ZQ"
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            href="https://www.instagram.com/atlescortsfs/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        <nav className={styles.right} aria-label="Navegació principal">
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
