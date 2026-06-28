import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pod Tracker",
  description: "Pod Tracker is a web-app that helps users track their wins and losses in EDH and displays graphical statistics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
