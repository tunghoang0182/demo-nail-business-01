import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import type { CSSProperties } from "react";
import heroImage from "../nail-business-01.png";
import { site } from "../content/site";
import styles from "./home-page.module.css";
import { ScrollRevealEffects } from "./scroll-reveal-effects";
import { ScrollToTopOnRefresh } from "./scroll-to-top-on-refresh";
import { SiteNav } from "./site-nav";
import { SocialIcon } from "./social-icons";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

function revealDelay(delay: string) {
  return { "--reveal-delay": delay } as CSSProperties;
}

export function HomePage() {
  return (
    <main className={`${styles.page} ${poppins.variable} ${inter.variable}`}>
      <ScrollRevealEffects />
      <ScrollToTopOnRefresh />
      <SiteNav />

      <section
        id="home"
        className={styles.heroImageSection}
        aria-label={site.hero.imageAlt}
      >
        <Image
          src={heroImage}
          alt={site.hero.imageAlt}
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}>
          <button type="button" className={styles.heroButton}>
            {site.hero.ctaLabel}
          </button>
        </div>
      </section>

      <section id="about" className={`${styles.section} ${styles.aboutSection}`}>
        <div className={`${styles.container} ${styles.aboutGrid}`}>
          <div className={styles.sectionCopy}>
            <p
              className={styles.eyebrow}
              data-scroll-reveal
              style={revealDelay("0ms")}
            >
              {site.about.eyebrow}
            </p>
            <h2 data-scroll-reveal style={revealDelay("70ms")}>
              {site.about.title}
            </h2>
            <p data-scroll-reveal style={revealDelay("130ms")}>
              {site.about.body}
            </p>
            <p data-scroll-reveal style={revealDelay("190ms")}>
              {site.about.secondary}
            </p>
          </div>

          <div
            className={styles.aboutImages}
            aria-label="Nail studio images"
            data-scroll-reveal
            style={revealDelay("260ms")}
          >
            <div className={styles.aboutImageLarge}>
              <Image
                src={heroImage}
                alt={site.about.imageAlt}
                fill
                sizes="(min-width: 900px) 34vw, 100vw"
                className={styles.aboutImage}
              />
            </div>
            <div className={styles.aboutImageSmall}>
              <Image
                src={heroImage}
                alt="Pink nail polish and manicure detail"
                fill
                sizes="(min-width: 900px) 18vw, 56vw"
                className={styles.aboutImage}
              />
            </div>
          </div>
        </div>
      </section>

      {site.aboutFeatures.map((feature, index) => (
        <section
          className={`${styles.section} ${styles.aboutFeatureSection}`}
          key={feature.title}
        >
          <div
            className={`${styles.container} ${styles.aboutFeatureGrid} ${
              index === 1 ? styles.aboutFeatureReverse : ""
            }`}
          >
            <div
              className={styles.aboutFeatureImage}
              data-scroll-reveal
              style={revealDelay("230ms")}
            >
              <Image
                src={heroImage}
                alt={feature.imageAlt}
                fill
                sizes="(min-width: 900px) 44vw, 100vw"
                className={styles.aboutImage}
              />
            </div>

            <div className={styles.sectionCopy}>
              <p
                className={styles.eyebrow}
                data-scroll-reveal
                style={revealDelay("0ms")}
              >
                {feature.eyebrow}
              </p>
              <h2 data-scroll-reveal style={revealDelay("70ms")}>
                {feature.title}
              </h2>
              <p data-scroll-reveal style={revealDelay("130ms")}>
                {feature.body}
              </p>
            </div>
          </div>
        </section>
      ))}

      <section id="services" className={`${styles.section} ${styles.servicesSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p
              className={styles.eyebrow}
              data-scroll-reveal
              style={revealDelay("0ms")}
            >
              {site.services.eyebrow}
            </p>
            <h2
              className={styles.servicesTitle}
              data-scroll-reveal
              style={revealDelay("70ms")}
            >
              {site.services.title}
            </h2>
            <button
              type="button"
              className={styles.serviceButton}
              data-scroll-reveal
              style={revealDelay("130ms")}
            >
              {site.hero.ctaLabel}
            </button>
          </div>

          <div className={styles.serviceGrid}>
            {site.services.categories.map((category, index) => (
              <article
                className={styles.serviceCategory}
                data-scroll-reveal
                key={category.name}
                style={revealDelay(`${210 + index * 90}ms`)}
              >
                <h3>{category.name}</h3>
                <div className={styles.serviceList}>
                  {category.items.map((item) => (
                    <div className={styles.serviceItem} key={item.name}>
                      <span className={styles.serviceName}>{item.name}</span>
                      <span className={styles.serviceRule} aria-hidden="true" />
                      <span className={styles.servicePrice}>{item.price}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={`${styles.section} ${styles.contactSection}`}>
        <div className={`${styles.container} ${styles.contactPanel}`}>
          <div className={`${styles.sectionCopy} ${styles.contactIntro}`}>
            <p className={styles.eyebrow}>{site.contact.eyebrow}</p>
            <h2>{site.contact.title}</h2>
          </div>

          <dl className={styles.contactList}>
            <div>
              <dt>Business</dt>
              <dd>{site.contact.businessName}</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>{site.contact.phone}</dd>
            </div>
            <div>
              <dt>Address</dt>
              <dd>{site.contact.address}</dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>
                <ul className={styles.hoursList}>
                  {site.contact.hours.map((entry) => (
                    <li key={entry.day}>
                      <span>{entry.day}:</span>
                      <span>{entry.time}</span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
            <div className={styles.contactSocialRow}>
              <dt>Social</dt>
              <dd>
                <span className={`${styles.socialLinks} ${styles.contactSocialLinks}`}>
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
                </span>
              </dd>
            </div>
          </dl>

          <div className={styles.contactMap}>
            <iframe
              src="https://www.google.com/maps?q=123+Rose+Avenue,+New+York,+NY&output=embed"
              className={styles.contactMapFrame}
              loading="lazy"
              title="Nail Studio location map"
            />
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2026 Lotus Web Studio. All rights reserved.</p>
      </footer>
    </main>
  );
}
