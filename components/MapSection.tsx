"use client";

import styles from "./MapSection.module.css";

export default function MapSection() {
  return (
    <section id="location" className={styles.mapSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Business Location</div>

          <h2>Find DELTA T in Johor Bahru.</h2>

          <p>
            Customers can locate DELTA T MANUFACTURING SDN. BHD. in Johor
            Bahru, Malaysia, or send printing details online before quotation.
          </p>
        </div>

        <div className={styles.mapCard}>
          <iframe
            title="DELTA T MANUFACTURING SDN. BHD. Google Map"
            src="https://www.google.com/maps?q=No.%206%2C%20Jalan%20Kempas%20Utama%203%2F9%2C%20Taman%20Kempas%20Utama%2C%2081300%20Johor%20Bahru%2C%20Johor%2C%20Malaysia&output=embed"
            className={styles.map}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className={styles.infoCard}>
            <strong>DELTA T MANUFACTURING SDN. BHD.</strong>

            <p>
              No. 6, Jalan Kempas Utama 3/9,
              <br />
              Taman Kempas Utama,
              <br />
              81300 Johor Bahru,
              <br />
              Johor, Malaysia.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=No.%206%2C%20Jalan%20Kempas%20Utama%203%2F9%2C%20Taman%20Kempas%20Utama%2C%2081300%20Johor%20Bahru%2C%20Johor%2C%20Malaysia"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}