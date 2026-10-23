import type { Metadata } from "next";
import "./globals.css";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Peak Pursuit — Everest Region Trekking",
  description:
    "Experience the Himalayas with expert Nepali guides. Book Everest Base Camp, Three High Passes, Ama Dablam, and more with Peak Pursuit.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
