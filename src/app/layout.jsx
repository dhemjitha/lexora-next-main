import Footer from "@/components/Footer";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ThemeProvider from "@/components/ui/theme-provider";

export const metadata = {
  title: "LexoraTech | Building with Bits",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        <Navigation />
        {children}
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
