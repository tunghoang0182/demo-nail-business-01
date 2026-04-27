"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logoImage from "../logo-transparent.png";
import { site } from "../content/site";
import styles from "./home-page.module.css";
import { SocialIcon } from "./social-icons";

export function SiteNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className={styles.navbar}>
      <nav className={styles.navInner} aria-label="Primary navigation">
        <Link
          href="#home"
          className={styles.logo}
          aria-label={`${site.name} home`}
          onClick={(event) => {
            event.preventDefault();
            setIsMenuOpen(false);
            window.location.assign(
              `${window.location.pathname}${window.location.search}`,
            );
          }}
        >
          <Image
            src={logoImage}
            alt={site.logo}
            className={styles.logoImage}
            priority
          />
        </Link>

        <button
          type="button"
          className={styles.menuToggle}
          aria-controls="primary-navigation-menu"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <ul
          id="primary-navigation-menu"
          className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}
        >
          {site.navLinks.map((link) => (
            <li key={link.label}>
              {link.href ? (
                <Link
                  href={link.href}
                  className={styles.navLink}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  type="button"
                  className={styles.navLink}
                  onClick={closeMenu}
                >
                  {link.label}
                </button>
              )}
            </li>
          ))}
        </ul>

        <div className={`${styles.socialLinks} ${styles.navSocialLinks}`}>
          {site.socialLinks.map((social) => (
            <a
              href={social.href}
              className={styles.socialIconLink}
              aria-label={social.label}
              key={social.label}
            >
              <SocialIcon label={social.label} />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
