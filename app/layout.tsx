import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "DELTA T MANUFACTURING SDN. BHD. | Sticker, Label, Name Card & Menu Printing",
  description:
    "DELTA T MANUFACTURING SDN. BHD. provides professional printing services for stickers, labels, name cards and menus in Johor Bahru, Malaysia.",
  keywords: [
    "DELTA T MANUFACTURING SDN. BHD.",
    "Johor Bahru printing",
    "Sticker printing",
    "Label printing",
    "Name card printing",
    "Menu printing",
    "Malaysia printing service",
  ],
  authors: [{ name: "DELTA T MANUFACTURING SDN. BHD." }],
  creator: "DELTA T MANUFACTURING SDN. BHD.",
  publisher: "DELTA T MANUFACTURING SDN. BHD.",
  openGraph: {
    title: "DELTA T MANUFACTURING SDN. BHD.",
    description:
      "Professional printing for Sticker, Label, Name Card and Menu orders in Johor Bahru, Malaysia.",
    type: "website",
    locale: "en_MY",
    siteName: "DELTA T MANUFACTURING SDN. BHD.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-MY">
      <body>{children}</body>
    </html>
  );
}