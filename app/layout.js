import "./globals.css";

export const metadata = {
  title: "Ashish Jha | Portfolio",
  description: "Animated portfolio of Ashish Jha built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
