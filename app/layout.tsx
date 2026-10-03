import "./globals.css";

export const metadata = {
  title: "QRX",
  description: "Interactive QR experiences",
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
