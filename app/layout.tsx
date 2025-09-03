import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800"]
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Header/>
        {children}
      </body>
    </html>
  );
}