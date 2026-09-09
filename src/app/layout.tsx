import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import SplashScreen from "@/components/SplashScreen";
import FloatingCartBar from "@/components/FloatingCartBar";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Indische Aastha Restaurant | Berlin",
  description: "Authentische Indische Küche in Berlin. Täglich frisch für Sie zubereitet.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-brand-bg text-brand-text">
        <CartProvider>
          <SplashScreen />
          <Header />
          <main className="flex-grow flex flex-col relative pb-safe">
            {children}
          </main>
          <FloatingCartBar />
          <Footer />
          <BottomNav />
        </CartProvider>
      </body>
    </html>
  );
}
