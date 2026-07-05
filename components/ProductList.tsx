"use client";

import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  CreditCard,
  FileText,
  Layers,
  PackageCheck,
  Printer,
  Ruler,
  Sparkles,
  Tag,
} from "lucide-react";

import styles from "./ProductList.module.css";

const products = [
  {
    icon: FileText,
    title: "Sticker",
    description:
      "Custom sticker printing for packaging, branding, promotions and product use.",
    tag: "Custom print",
    details: ["Product stickers", "Logo stickers", "Promotional stickers"],
  },
  {
    icon: Tag,
    title: "Label",
    description:
      "Clean label printing for products, packaging, bottles, boxes and business use.",
    tag: "Packaging ready",
    details: ["Product labels", "Packaging labels", "Custom size labels"],
  },
  {
    icon: CreditCard,
    title: "Name Card",
    description:
      "Professional name card printing for business owners, teams and company branding.",
    tag: "Business essential",
    details: ["Standard name cards", "Premium name cards", "Company branding"],
  },
  {
    icon: BookOpen,
    title: "Menu",
    description:
      "Menu printing for restaurants, cafés, food brands and service businesses.",
    tag: "F&B ready",
    details: ["Restaurant menus", "Café menus", "Service menus"],
  },
];

const capabilities = [
  "Sticker printing request",
  "Label size and finishing details",
  "Name card business information",
  "Menu layout and quantity planning",
  "Artwork and design requirement intake",
  "Quote-ready order preparation",
];

export default function ProductList() {
  return (
    <section className={styles.products} id="products">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <Sparkles size={16} />
            <span>Printing Products</span>
          </div>

          <h2>
            Four core print products, organized into one clean ordering flow.
          </h2>

          <p>
            DELTA T focuses on sticker, label, name card and menu printing —
            helping customers submit clear details before quotation and
            production.
          </p>
        </div>

        <div className={styles.productGrid}>
          {products.map((product) => {
            const Icon = product.icon;

            return (
              <article className={styles.productCard} key={product.title}>
                <div className={styles.cardTop}>
                  <div className={styles.iconBox}>
                    <Icon size={25} />
                  </div>

                  <span>{product.tag}</span>
                </div>

                <h3>{product.title}</h3>

                <p>{product.description}</p>

                <div className={styles.detailList}>
                  {product.details.map((detail) => (
                    <div className={styles.detailItem} key={detail}>
                      <CheckCircle2 size={16} />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <a href="#order" className={styles.cardLink}>
                  Start order
                  <ArrowRight size={17} />
                </a>
              </article>
            );
          })}
        </div>

        <div className={styles.capabilityPanel}>
          <div className={styles.panelLeft}>
            <div className={styles.panelIcon}>
              <Layers size={24} />
            </div>

            <div>
              <span>AI-assisted print order workflow</span>
              <h3>From product choice to quote-ready print details.</h3>
              <p>
                Instead of a basic contact form, DELTA T helps structure each
                order with product type, size, quantity, finishing, artwork and
                customer contact information.
              </p>
            </div>
          </div>

          <div className={styles.panelRight}>
            {capabilities.map((item) => (
              <div className={styles.capabilityItem} key={item}>
                <BadgeCheck size={17} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.miniStats}>
          <div>
            <strong>4</strong>
            <span>main products</span>
          </div>

          <div>
            <strong>AI</strong>
            <span>quote preparation</span>
          </div>

          <div>
            <strong>B2B</strong>
            <span>business printing</span>
          </div>

          <div>
            <strong>Fast</strong>
            <span>order intake</span>
          </div>
        </div>

        <div className={styles.productionStrip}>
          <div>
            <Ruler size={18} />
            <span>Size & quantity details</span>
          </div>

          <div>
            <Printer size={18} />
            <span>Print requirement check</span>
          </div>

          <div>
            <PackageCheck size={18} />
            <span>Quote-ready order flow</span>
          </div>
        </div>
      </div>
    </section>
  );
}