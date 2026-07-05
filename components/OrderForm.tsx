"use client";

import { FormEvent, useState } from "react";

import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ClipboardList,
  FileUp,
  MessageSquare,
  PackageCheck,
  Printer,
  ShieldCheck,
  Sparkles,
  UploadCloud,
} from "lucide-react";

import styles from "./OrderForm.module.css";

/*
  换成你的 WhatsApp 号码。
  格式：
  Malaysia: 60 + 手机号码，前面不要 0
  例子：012-3456789 -> 60123456789
*/
const WHATSAPP_NUMBER = "60123456789";

const preparationItems = [
  "Product type selected",
  "Size, quantity and finishing details",
  "Artwork or design reference status",
  "Customer contact and delivery notes",
];

const workflowSteps = [
  {
    icon: UploadCloud,
    title: "Submit request",
    text: "Customer sends product, size, quantity and artwork details.",
  },
  {
    icon: Bot,
    title: "AI organize",
    text: "DELTA T prepares the request into a clearer quote structure.",
  },
  {
    icon: Printer,
    title: "Print review",
    text: "The team checks printing requirements before confirmation.",
  },
  {
    icon: PackageCheck,
    title: "Confirm & deliver",
    text: "Final details are confirmed before printing, packing and delivery.",
  },
];

export default function OrderForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const productType = formData.get("productType") || "";
    const finish = formData.get("finish") || "";
    const quantity = formData.get("quantity") || "";
    const timeline = formData.get("timeline") || "";
    const size = formData.get("size") || "";
    const color = formData.get("color") || "";
    const name = formData.get("name") || "";
    const phone = formData.get("phone") || "";
    const company = formData.get("company") || "";
    const email = formData.get("email") || "";
    const artwork = formData.get("artwork") || "";
    const notes = formData.get("notes") || "";

    const message = `
Hello DELTA T MANUFACTURING SDN. BHD., I want to request a printing quote.

Product Type: ${productType}
Finishing: ${finish}
Quantity: ${quantity}
Timeline: ${timeline}
Size: ${size}
Print Color: ${color}

Contact Name: ${name}
Phone / WhatsApp: ${phone}
Company / Brand: ${company || "-"}
Email: ${email || "-"}

Artwork Status: ${artwork}

Order Details:
${notes || "-"}
`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    setSubmitted(true);
    window.open(whatsappUrl, "_blank");
  }

  return (
    <section className={styles.orderSection} id="order">
      <div className={styles.backgroundGrid} />

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <Sparkles size={16} />
            <span>AI-Assisted Print Order Request</span>
          </div>

          <h2>Request sticker, label, name card and menu printing faster.</h2>

          <p>
            Customers can submit clear print details, quantity, finishing,
            artwork status and contact information before quotation.
          </p>
        </div>

        <div className={styles.orderGrid}>
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <div className={styles.formIcon}>
                <ClipboardList size={24} />
              </div>

              <div>
                <span>Order intake</span>
                <h3>Request a Printing Quote</h3>
              </div>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGrid}>
                <div className={styles.field}>
                  <label htmlFor="productType">Product type</label>
                  <select
                    id="productType"
                    name="productType"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select product
                    </option>
                    <option>Sticker</option>
                    <option>Label</option>
                    <option>Name Card</option>
                    <option>Menu</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label htmlFor="finish">Finishing</label>
                  <select id="finish" name="finish" defaultValue="" required>
                    <option value="" disabled>
                      Select finishing
                    </option>
                    <option>Glossy</option>
                    <option>Matte</option>
                    <option>Lamination</option>
                    <option>Standard finish</option>
                    <option>Need recommendation</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label htmlFor="quantity">Quantity</label>
                  <input
                    id="quantity"
                    name="quantity"
                    type="number"
                    min="1"
                    placeholder="Example: 1000"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="timeline">Timeline</label>
                  <select
                    id="timeline"
                    name="timeline"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select timeline
                    </option>
                    <option>Urgent order</option>
                    <option>Within 3-5 days</option>
                    <option>Within 1-2 weeks</option>
                    <option>Flexible timeline</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label htmlFor="size">Size</label>
                  <input
                    id="size"
                    name="size"
                    type="text"
                    placeholder="Example: 90mm x 54mm"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="color">Print color</label>
                  <select id="color" name="color" defaultValue="" required>
                    <option value="" disabled>
                      Select color
                    </option>
                    <option>Full color</option>
                    <option>Black & white</option>
                    <option>Single color</option>
                    <option>Need recommendation</option>
                  </select>
                </div>

                <div className={styles.field}>
                  <label htmlFor="name">Contact name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="phone">Phone / WhatsApp</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+60..."
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="company">Company / Brand</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Optional"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                  />
                </div>

                <div className={`${styles.field} ${styles.fullWidth}`}>
                  <label htmlFor="artwork">Artwork status</label>
                  <select
                    id="artwork"
                    name="artwork"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select artwork status
                    </option>
                    <option>I already have final artwork</option>
                    <option>I have a reference design</option>
                    <option>I need design assistance</option>
                    <option>I want to discuss first</option>
                  </select>
                </div>

                <div className={`${styles.field} ${styles.fullWidth}`}>
                  <label htmlFor="notes">Order details</label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={5}
                    placeholder="Tell us about product usage, material, size, finishing, delivery area, artwork details or special requirements."
                  />
                </div>
              </div>

              <div className={styles.uploadBox}>
                <div className={styles.uploadIcon}>
                  <FileUp size={22} />
                </div>

                <div>
                  <strong>Artwork upload placeholder</strong>
                  <span>
                    File upload can be connected later. For now, customers can
                    describe their artwork or design reference in the order
                    notes.
                  </span>
                </div>
              </div>

              <button className={styles.submitButton} type="submit">
                Submit Print Request
                <ArrowRight size={18} />
              </button>

              {submitted && (
                <div className={styles.successMessage} aria-live="polite">
                  <CheckCircle2 size={18} />
                  <span>
                    Request captured. WhatsApp will open with the order details.
                  </span>
                </div>
              )}
            </form>
          </div>

          <aside className={styles.sidePanel}>
            <div className={styles.aiCard}>
              <div className={styles.aiHeader}>
                <div className={styles.aiIcon}>
                  <Bot size={24} />
                </div>

                <div>
                  <span>AI preparation</span>
                  <h3>Quote Readiness Check</h3>
                </div>
              </div>

              <div className={styles.readinessBox}>
                <div className={styles.readinessTop}>
                  <span>Quote readiness</span>
                  <strong>86%</strong>
                </div>

                <div className={styles.progressTrack}>
                  <div className={styles.progressFill} />
                </div>
              </div>

              <div className={styles.checkList}>
                {preparationItems.map((item) => (
                  <div className={styles.checkItem} key={item}>
                    <CheckCircle2 size={17} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.workflowCard}>
              <div className={styles.workflowHeader}>
                <span>Printing workflow</span>
                <h3>What happens after submission?</h3>
              </div>

              <div className={styles.workflowList}>
                {workflowSteps.map((step) => {
                  const Icon = step.icon;

                  return (
                    <div className={styles.workflowItem} key={step.title}>
                      <div className={styles.workflowIcon}>
                        <Icon size={18} />
                      </div>

                      <div>
                        <h4>{step.title}</h4>
                        <p>{step.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles.trustCard}>
              <div>
                <ShieldCheck size={22} />
                <strong>Designed for business printing orders</strong>
              </div>

              <p>
                This form is structured for sticker, label, name card and menu
                quotation, not unrelated product categories.
              </p>

              <a href="#contact">
                Talk to sales
                <MessageSquare size={17} />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}