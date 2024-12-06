import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Synolux: Building with Bits | Synolux",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;700&display=swap"
        />
      </head>
      <body className="antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
