import "./globals.css";
import Navigation from "@/components/Navigation";
import ThemeProvider from "@/components/ui/theme-provider";

export const metadata = {
  title: "Synolux: Building with Bits | Synolux",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;700&display=swap"
        />
      </head>
      <body className="antialiased">
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navigation />
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
