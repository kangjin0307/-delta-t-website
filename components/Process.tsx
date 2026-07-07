import styles from "./Process.module.css";

const steps = [
  {
    step: "01",
    title: "Submit Details",
    text: "Customer chooses Sticker, Label, Name Card or Menu.",
  },
  {
    step: "02",
    title: "AI Organize",
    text: "Order details are arranged into a clearer quote request.",
  },
  {
    step: "03",
    title: "Quote Confirm",
    text: "Team confirms price, timeline and print requirements.",
  },
  {
    step: "04",
    title: "Print Prepare",
    text: "Artwork, size, quantity and finishing are checked.",
  },
  {
    step: "05",
    title: "Pack & Deliver",
    text: "Finished print items are packed and delivered.",
  },
];

export default function Process() {
  return (
    <section id="process" className={styles.process}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Printing Workflow</div>

          <h2>A cleaner way to handle business printing orders.</h2>

          <p>
            From customer request to quote preparation and delivery, DELTA T
            MANUFACTURING SDN. BHD. gives every Sticker, Label, Name Card and
            Menu order a structured workflow.
          </p>
        </div>

        <div className={styles.grid}>
          {steps.map((item) => (
            <div key={item.step} className={styles.card}>
              <span>STEP {item.step}</span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.bottomPanel}>
          <strong>Built for Sticker · Label · Name Card · Menu orders</strong>

          <p>
            This process prepares the future system for WhatsApp enquiry,
            quotation, database, admin dashboard and order tracking.
          </p>
        </div>
      </div>
    </section>
  );
}
