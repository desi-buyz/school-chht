import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chat Hat High School",
  description: "Official Website of Chat Hat High School",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
