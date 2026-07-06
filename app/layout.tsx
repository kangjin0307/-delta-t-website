import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://delta-t-manufacturing-sdn-bhd.vercel.app"),

  title: {
    default:
      "DELTA T MANUFACTURING SDN. BHD. | Sticker, Label, Name Card & Menu Printing",
    template: "%s | DELTA T MANUFACTURING SDN. BHD.",
  },

  description:
    "DELTA T MANUFACTURING SDN. BHD. provides professional printing services for stickers, labels, name cards and menus in Johor Bahru, Malaysia.",

  keywords: [
    "DELTA T MANUFACTURING SDN. BHD.",
    "Johor Bahru printing",
    "Sticker printing Johor Bahru",
    "Label printing Johor Bahru",
    "Name card printing Johor Bahru",
    "Menu printing Johor Bahru",
    "Malaysia printing service",
    "Business printing Malaysia",
  ],

  authors: [{ name: "DELTA T MANUFACTURING SDN. BHD." }],
  creator: "DELTA T MANUFACTURING SDN. BHD.",
  publisher: "DELTA T MANUFACTURING SDN. BHD.",

  icons: {
    icon: "/favicon.svg?v=200",
    shortcut: "/favicon.svg?v=200",
    apple: "/favicon.svg?v=200",
  },

  alternates: {
    canonical: "https://delta-t-manufacturing-sdn-bhd.vercel.app",
  },

  openGraph: {
    title: "DELTA T MANUFACTURING SDN. BHD.",
    description:
      "Professional printing for Sticker, Label, Name Card and Menu orders in Johor Bahru, Malaysia.",
    url: "https://delta-t-manufacturing-sdn-bhd.vercel.app",
    siteName: "DELTA T MANUFACTURING SDN. BHD.",
    type: "website",
    locale: "en_MY",
  },

  twitter: {
    card: "summary_large_image",
    title: "DELTA T MANUFACTURING SDN. BHD.",
    description:
      "Professional printing for Sticker, Label, Name Card and Menu orders in Johor Bahru, Malaysia.",
  },

  robots: {
    index: true,
    follow: true,
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