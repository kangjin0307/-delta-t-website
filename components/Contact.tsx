import styles from "./Contact.module.css";

const prepareItems = [
  "Product type: Sticker, Label, Name Card or Menu",
  "Size and quantity",
  "Finishing preference",
  "Artwork file or design reference",
  "Delivery or collection details",
];

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.mainCard}>
            <div className={styles.eyebrow}>
              Contact DELTA T MANUFACTURING SDN. BHD.
            </div>

            <h2>Send your print details. We prepare the quote.</h2>

            <p>
              Share your Sticker, Label, Name Card or Menu requirement with
              size, quantity, finishing and artwork details. Our team will
              review it manually and prepare a quotation.
            </p>

            <div className={styles.productTags}>
              {["Sticker", "Label", "Name Card", "Menu"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className={styles.actions}>
              <a href="#order" className={styles.primaryButton}>
                Start Print Request
              </a>

              <a href="#location" className={styles.secondaryButton}>
                View Location
              </a>
            </div>
          </div>

          <div className={styles.side}>
            <div className={styles.addressCard}>
              <span>Business address</span>

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

            <div className={styles.prepareCard}>
              <span>What to prepare</span>

              <div className={styles.prepareList}>
                {prepareItems.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
