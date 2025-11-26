"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./CampusPromo.module.css";

export default function CampusPromo() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true); // aparece al entrar
  }, []);

  if (!open) return null;

  return (
    <div className={styles.backdrop} onClick={() => setOpen(false)}>
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        
        <button className={styles.close} onClick={() => setOpen(false)}>
          ×
        </button>

        <Link href="/campusNadal" className={styles.link}>
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/Campus/campus-nadal-promo.jpg"
              alt="Campus de Nadal"
              fill
              className={styles.image}
              sizes="(max-width: 768px) 90vw, 500px"
              priority
            />
          </div>

          <span className={styles.ctaText}>+ INFO I INSCRIPCIONS</span>
        </Link>
      </div>
    </div>
  );
}
