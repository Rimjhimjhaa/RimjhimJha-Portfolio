import "./globals.css";

export const metadata = {
  title: "Rimjhim Jha | Portfolio",
  description: "Animated portfolio of Rimjhim Jha built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
