"use client";
import Link from 'next/link';
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram as faInstagramBrand } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`${styles.header} ${!showHeader ? styles.hidden : ""}`}>
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

      <nav className={styles.right}>
        <Link href="/" className={styles.navLink}>Inicio</Link>
        <Link href="/teams" className={styles.navLink}>Equipos</Link>
        <Link href="/aboutUs" className={styles.navLink}>Sobre nosotros</Link>
        <Link href="/contact" className={styles.navLink}>Contacto</Link>
      </nav>
    </header>
  );
}
