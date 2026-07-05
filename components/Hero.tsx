"use client";

import {
  ArrowRight,
  Bot,
  CheckCircle2,
  CreditCard,
  Factory,
  FileText,
  Layers,
  PackageCheck,
  Sparkles,
  Tag,
  Truck,
  UploadCloud,
} from "lucide-react";

import styles from "./Hero.module.css";

const metrics = [
  {
    value: "4",
    label: "Core print products",
  },
  {
    value: "AI",
    label: "Assisted quotation",
  },
  {
    value: "B2B",
    label: "Printing workflow",
  },
];

const workflow = [
  {
    icon: UploadCloud,
    title: "Submit Details",
    text: "Customers send product type, size, quantity and design requirements.",
  },
  {
    icon: Bot,
    title: "AI Pre-check",
    text: "The platform helps organize printing details before quotation.",
  },
  {
    icon: Factory,
    title: "Print Production",
    text: "Orders move into sticker, label, name card or menu production.",
  },
  {
    icon: Truck,
    title: "Delivery",
    text: "Finished print items are packed and delivered to customers.",
  },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundGlow} />
      <div className={styles.gridPattern} />

      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.badge}>
            <Sparkles size={16} />
            <span>AI Printing Platform for Business Print Orders</span>
          </div>

          <h1 className={styles.title}>
            Smarter printing orders,
            <span> from quote to delivery.</span>
          </h1>

          <p className={styles.description}>
            DELTA T helps customers request stickers, labels, name cards and
            menus through a clean AI-assisted printing order platform.
          </p>

          <div className={styles.actions}>
            <a href="#order" className={styles.primaryButton}>
              Start an Order
              <ArrowRight size={18} />
            </a>

            <a href="#products" className={styles.secondaryButton}>
              View Products
            </a>
          </div>

          <div className={styles.trustRow}>
            <div className={styles.trustItem}>
              <CheckCircle2 size={17} />
              <span>Sticker printing</span>
            </div>

            <div className={styles.trustItem}>
              <CheckCircle2 size={17} />
              <span>Label printing</span>
            </div>

            <div className={styles.trustItem}>
              <CheckCircle2 size={17} />
              <span>Name card & menu</span>
            </div>
          </div>

          <div className={styles.metrics}>
            {metrics.map((item) => (
              <div className={styles.metricCard} key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.dashboardCard}>
            <div className={styles.cardHeader}>
              <div>
                <p>DELTA T Platform</p>
                <h3>Print Order Center</h3>
              </div>

              <div className={styles.statusBadge}>
                <span />
                Live
              </div>
            </div>

            <div className={styles.previewPanel}>
              <div className={styles.previewTop}>
                <div className={styles.productIcon}>
                  <Layers size={22} />
                </div>

                <div>
                  <p>Business Printing</p>
                  <h4>Sticker & Label Order</h4>
                </div>
              </div>

              <div className={styles.orderDetails}>
                <div>
                  <span>Quantity</span>
                  <strong>1,000 pcs</strong>
                </div>

                <div>
                  <span>Product</span>
                  <strong>Label</strong>
                </div>

                <div>
                  <span>Finish</span>
                  <strong>Matte</strong>
                </div>
              </div>

              <div className={styles.progressArea}>
                <div className={styles.progressInfo}>
                  <span>Quote readiness</span>
                  <strong>82%</strong>
                </div>

                <div className={styles.progressTrack}>
                  <div className={styles.progressFill} />
                </div>
              </div>
            </div>

            <div className={styles.workflowList}>
              {workflow.map((item) => {
                const Icon = item.icon;

                return (
                  <div className={styles.workflowItem} key={item.title}>
                    <div className={styles.workflowIcon}>
                      <Icon size={18} />
                    </div>

                    <div>
                      <h5>{item.title}</h5>
                      <p>{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.footerIcon}>
                <PackageCheck size={19} />
              </div>

              <div>
                <span>Available products</span>
                <strong>Sticker, Label, Name Card and Menu</strong>
              </div>
            </div>
          </div>

          <div className={styles.floatingCardOne}>
            <span>AI Quote</span>
            <strong>Ready faster</strong>
          </div>

          <div className={styles.floatingCardTwo}>
            <span>Print Status</span>
            <strong>Preparing order</strong>
          </div>
        </div>
      </div>
    </section>
  );
}