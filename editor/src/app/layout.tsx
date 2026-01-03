import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmartHDD Content Editor",
  description: "Local WYSIWYG editor for SmartHDD website content",
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
