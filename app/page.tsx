"use client";

import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import OrderForm from "../components/OrderForm";
import MapSection from "../components/MapSection";

export default function Page() {
  return (
    <main>
      {/* Navigation */}
      <nav className="nav">
        <div className="container nav-inner">
          <div className="logo">DELTA T MANUFACTURING SDN. BHD.</div>

          <div className="nav-links">
            <a href="#products">Products</a>
            <a href="#order">Order</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
            <a href="#location">Location</a>
            <a href="#order" className="btn primary">
              Start Order
            </a>
          </div>
        </div>
      </nav>

      <Hero />
      <ProductList />
      <OrderForm />

      {/* Process */}
      <section
        id="process"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "110px 0",
          background:
            "radial-gradient(circle at top left, rgba(37, 99, 235, 0.16), transparent 34%), radial-gradient(circle at bottom right, rgba(14, 165, 233, 0.14), transparent 34%), linear-gradient(180deg, #e8eef7 0%, #f8fbff 50%, #edf4ff 100%)",
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: 760,
              margin: "0 auto 56px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "9px 14px",
                marginBottom: 22,
                border: "1px solid rgba(37, 99, 235, 0.22)",
                borderRadius: 999,
                background: "rgba(255, 255, 255, 0.78)",
                color: "#1d4ed8",
                fontSize: 14,
                fontWeight: 800,
                boxShadow: "0 16px 45px rgba(15, 23, 42, 0.09)",
              }}
            >
              Printing Workflow
            </div>

            <h2
              style={{
                margin: 0,
                color: "#020617",
                fontSize: "clamp(38px, 5vw, 62px)",
                lineHeight: 1.02,
                letterSpacing: "-0.055em",
                fontWeight: 850,
              }}
            >
              A cleaner way to handle business printing orders.
            </h2>

            <p
              style={{
                maxWidth: 690,
                margin: "22px auto 0",
                color: "#475569",
                fontSize: 17,
                lineHeight: 1.75,
              }}
            >
              From customer request to quote preparation and delivery, DELTA T
              MANUFACTURING SDN. BHD. gives every Sticker, Label, Name Card and
              Menu order a structured workflow.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
              gap: 16,
            }}
          >
            {[
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
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  minHeight: 260,
                  padding: 22,
                  border: "1px solid rgba(15, 23, 42, 0.12)",
                  borderRadius: 30,
                  background: "rgba(255, 255, 255, 0.78)",
                  boxShadow: "0 26px 72px rgba(15, 23, 42, 0.11)",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    marginBottom: 24,
                    color: "#1d4ed8",
                    fontSize: 13,
                    fontWeight: 900,
                    letterSpacing: "0.12em",
                  }}
                >
                  STEP {item.step}
                </span>

                <h3
                  style={{
                    margin: 0,
                    color: "#020617",
                    fontSize: 24,
                    lineHeight: 1.1,
                    letterSpacing: "-0.035em",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    margin: "14px 0 0",
                    color: "#475569",
                    fontSize: 14,
                    lineHeight: 1.65,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 24,
              padding: 28,
              borderRadius: 36,
              background:
                "linear-gradient(135deg, #020617 0%, #0f172a 48%, #172554 100%)",
              color: "white",
              boxShadow: "0 30px 84px rgba(15, 23, 42, 0.22)",
            }}
          >
            <strong
              style={{
                display: "block",
                fontSize: 24,
                letterSpacing: "-0.035em",
              }}
            >
              Built for Sticker · Label · Name Card · Menu orders
            </strong>

            <p
              style={{
                maxWidth: 760,
                margin: "12px 0 0",
                color: "#cbd5e1",
                fontSize: 15,
                lineHeight: 1.7,
              }}
            >
              This process prepares the future system for WhatsApp enquiry,
              quotation, database, admin dashboard and order tracking.
            </p>
          </div>
        </div>
      </section>

      {/* Contact 2.0 */}
      <section
        id="contact"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "115px 0",
          background:
            "radial-gradient(circle at top right, rgba(37, 99, 235, 0.22), transparent 34%), radial-gradient(circle at bottom left, rgba(14, 165, 233, 0.16), transparent 34%), linear-gradient(180deg, #edf4ff 0%, #020617 54%, #020617 100%)",
        }}
      >
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 24,
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                padding: 34,
                borderRadius: 38,
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.96), rgba(226,232,240,0.9))",
                border: "1px solid rgba(255, 255, 255, 0.24)",
                boxShadow: "0 34px 90px rgba(15, 23, 42, 0.28)",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "9px 14px",
                  marginBottom: 24,
                  borderRadius: 999,
                  background: "#dbeafe",
                  color: "#1d4ed8",
                  fontSize: 14,
                  fontWeight: 850,
                }}
              >
                Contact DELTA T MANUFACTURING SDN. BHD.
              </div>

              <h2
                style={{
                  margin: 0,
                  color: "#020617",
                  fontSize: "clamp(38px, 5vw, 62px)",
                  lineHeight: 1.02,
                  letterSpacing: "-0.055em",
                  fontWeight: 850,
                }}
              >
                Send your print details. We prepare the quote.
              </h2>

              <p
                style={{
                  margin: "22px 0 0",
                  color: "#475569",
                  fontSize: 17,
                  lineHeight: 1.75,
                  maxWidth: 620,
                }}
              >
                Share your Sticker, Label, Name Card or Menu requirement with
                size, quantity, finishing and artwork details. Our team will
                review it manually and prepare a quotation.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                  marginTop: 28,
                }}
              >
                {["Sticker", "Label", "Name Card", "Menu"].map((item) => (
                  <span
                    key={item}
                    style={{
                      padding: "10px 14px",
                      borderRadius: 999,
                      background: "#f1f5f9",
                      color: "#1e293b",
                      fontSize: 13,
                      fontWeight: 800,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href="#order"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 34,
                  height: 54,
                  padding: "0 24px",
                  borderRadius: 999,
                  background:
                    "linear-gradient(135deg, #020617, #0f172a 45%, #1e3a8a)",
                  color: "white",
                  fontSize: 15,
                  fontWeight: 850,
                  textDecoration: "none",
                  boxShadow: "0 22px 54px rgba(15, 23, 42, 0.3)",
                }}
              >
                Start Print Request
              </a>
            </div>

            <div
              style={{
                display: "grid",
                gap: 18,
              }}
            >
              <div
                style={{
                  padding: 28,
                  borderRadius: 34,
                  background:
                    "linear-gradient(135deg, #020617 0%, #0f172a 48%, #172554 100%)",
                  color: "white",
                  boxShadow: "0 34px 90px rgba(15, 23, 42, 0.34)",
                }}
              >
                <span
                  style={{
                    display: "block",
                    color: "#93c5fd",
                    fontSize: 13,
                    fontWeight: 850,
                    marginBottom: 10,
                  }}
                >
                  Business address
                </span>

                <strong
                  style={{
                    display: "block",
                    fontSize: 22,
                    lineHeight: 1.2,
                    letterSpacing: "-0.035em",
                  }}
                >
                  DELTA T MANUFACTURING SDN. BHD.
                </strong>

                <p
                  style={{
                    margin: "16px 0 0",
                    color: "#cbd5e1",
                    fontSize: 15,
                    lineHeight: 1.75,
                  }}
                >
                  No. 6, Jalan Kempas Utama 3/9,
                  <br />
                  Taman Kempas Utama,
                  <br />
                  81300 Johor Bahru,
                  <br />
                  Johor, Malaysia.
                </p>
              </div>

              <div
                style={{
                  padding: 28,
                  borderRadius: 34,
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.14)",
                  color: "white",
                  boxShadow: "0 30px 80px rgba(15, 23, 42, 0.24)",
                  backdropFilter: "blur(18px)",
                }}
              >
                <span
                  style={{
                    display: "block",
                    color: "#93c5fd",
                    fontSize: 13,
                    fontWeight: 850,
                    marginBottom: 14,
                  }}
                >
                  What to prepare
                </span>

                <div
                  style={{
                    display: "grid",
                    gap: 12,
                  }}
                >
                  {[
                    "Product type: Sticker, Label, Name Card or Menu",
                    "Size and quantity",
                    "Finishing preference",
                    "Artwork file or design reference",
                    "Delivery or collection details",
                  ].map((item) => (
                    <div
                      key={item}
                      style={{
                        padding: "13px 14px",
                        borderRadius: 18,
                        background: "rgba(255, 255, 255, 0.08)",
                        color: "#e2e8f0",
                        fontSize: 14,
                        fontWeight: 650,
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MapSection />

      {/* Footer 2.0 */}
      <footer
        style={{
          padding: "46px 0",
          background: "#020617",
          color: "#cbd5e1",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: 28,
            alignItems: "start",
          }}
        >
          <div>
            <strong
              style={{
                display: "block",
                color: "white",
                fontSize: 22,
                letterSpacing: "-0.035em",
                marginBottom: 12,
              }}
            >
              DELTA T MANUFACTURING SDN. BHD.
            </strong>

            <p
              style={{
                maxWidth: 560,
                margin: 0,
                color: "#94a3b8",
                fontSize: 14,
                lineHeight: 1.7,
              }}
            >
              Professional printing platform for Sticker, Label, Name Card and
              Menu orders in Johor Bahru, Malaysia.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginTop: 18,
              }}
            >
              {["Sticker", "Label", "Name Card", "Menu"].map((item) => (
                <span
                  key={item}
                  style={{
                    padding: "8px 12px",
                    borderRadius: 999,
                    background: "rgba(255, 255, 255, 0.08)",
                    color: "#e2e8f0",
                    fontSize: 13,
                    fontWeight: 750,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gap: 10,
              justifyItems: "end",
              textAlign: "right",
            }}
          >
            <a
              href="#products"
              style={{ color: "#cbd5e1", textDecoration: "none" }}
            >
              Products
            </a>

            <a
              href="#order"
              style={{ color: "#cbd5e1", textDecoration: "none" }}
            >
              Order
            </a>

            <a
              href="#process"
              style={{ color: "#cbd5e1", textDecoration: "none" }}
            >
              Process
            </a>

            <a
              href="#contact"
              style={{ color: "#cbd5e1", textDecoration: "none" }}
            >
              Contact
            </a>

            <a
              href="#location"
              style={{ color: "#cbd5e1", textDecoration: "none" }}
            >
              Location
            </a>
          </div>
        </div>

        <div
          className="container"
          style={{
            marginTop: 34,
            paddingTop: 22,
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            color: "#64748b",
            fontSize: 13,
          }}
        >
          <span>© 2026 DELTA T MANUFACTURING SDN. BHD.</span>
          <span>All Rights Reserved.</span>
        </div>
      </footer>

      {/* Premium WhatsApp Floating Button */}
      <a
        href="https://wa.me/60177148883?text=Hello%20DELTA%20T%20MANUFACTURING%20SDN.%20BHD.%2C%20I%20would%20like%20to%20ask%20about%20printing%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with DELTA T MANUFACTURING SDN. BHD. on WhatsApp"
        style={{
          position: "fixed",
          right: 22,
          bottom: 22,
          zIndex: 9999,
          display: "inline-flex",
          alignItems: "center",
          gap: 13,
          padding: "12px 17px 12px 12px",
          borderRadius: 999,
          background:
            "linear-gradient(135deg, rgba(2, 6, 23, 0.92), rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.9))",
          color: "white",
          textDecoration: "none",
          border: "1px solid rgba(255, 255, 255, 0.16)",
          boxShadow:
            "0 24px 70px rgba(15, 23, 42, 0.34), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
        }}
      >
        <span
          style={{
            width: 42,
            height: 42,
            borderRadius: 999,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "linear-gradient(135deg, rgba(37, 211, 102, 0.18), rgba(34, 197, 94, 0.08))",
            border: "1px solid rgba(37, 211, 102, 0.32)",
            boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.16)",
          }}
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M16.02 3C8.84 3 3 8.73 3 15.77c0 2.41.7 4.68 1.9 6.59L3.73 29l6.85-1.78A13.2 13.2 0 0 0 16.02 28C23.2 28 29 22.27 29 15.23S23.2 3 16.02 3Z"
              fill="#25D366"
            />
            <path
              d="M22.9 19.14c-.3.83-1.55 1.52-2.19 1.62-.58.09-1.31.13-2.12-.13-.49-.16-1.12-.36-1.92-.7-3.38-1.45-5.58-4.8-5.75-5.02-.16-.22-1.37-1.82-1.37-3.48 0-1.66.87-2.47 1.18-2.81.3-.34.66-.43.88-.43h.63c.2.01.48-.08.75.57.3.72 1.02 2.49 1.11 2.67.09.18.15.4.03.63-.12.23-.18.37-.36.57-.18.21-.38.46-.54.62-.18.18-.37.38-.16.75.21.37.94 1.55 2.02 2.51 1.39 1.23 2.56 1.61 2.93 1.79.37.18.58.15.8-.09.21-.25.92-1.07 1.17-1.44.24-.37.49-.31.83-.18.34.12 2.15 1.01 2.52 1.19.37.18.61.28.7.43.09.15.09.86-.21 1.69Z"
              fill="white"
            />
          </svg>
        </span>

        <span
          style={{
            display: "grid",
            gap: 4,
            lineHeight: 1.05,
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              color: "white",
              fontSize: 14,
              fontWeight: 850,
              letterSpacing: "-0.02em",
            }}
          >
            WhatsApp Quote
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: 999,
                background: "#22c55e",
                boxShadow: "0 0 0 5px rgba(34, 197, 94, 0.13)",
              }}
            />
          </span>

          <span
            style={{
              color: "#cbd5e1",
              fontSize: 12,
              fontWeight: 650,
              letterSpacing: "-0.01em",
            }}
          >
            Fast printing enquiry
          </span>
        </span>
      </a>
    </main>
  );
}