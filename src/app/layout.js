import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import PageTransition from "@/components/ui/page-transition";
import StairTransition from "@/components/ui/stair-transition";
import { Toaster } from "@/components/ui/toaster"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrainsMono'
});

export const metadata = {
  title: "Rakesh Magar",
  description: "Rakesh Magar portfolio created by next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <>
          <Header />
          <StairTransition />
          <PageTransition>
            {children}
            <Toaster />
          </PageTransition>
        </>
      </body>
    </html>
  );
}
