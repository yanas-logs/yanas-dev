import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";

//components
import Header from "@/components/Header";
import TransitionEffect from "@/components/TransitionEffect";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Header />
        <TransitionEffect/>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
