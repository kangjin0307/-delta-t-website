import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#020617",
          color: "white",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 900,
            letterSpacing: "-0.05em",
          }}
        >
          DELTA T MANUFACTURING
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 26,
            fontSize: 34,
            color: "#93c5fd",
            fontWeight: 800,
          }}
        >
          Sticker · Label · Name Card · Menu Printing
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 26,
            color: "#cbd5e1",
          }}
        >
          Johor Bahru, Malaysia
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}