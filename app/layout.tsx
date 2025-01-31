import type { Metadata } from "next";
import "./globals.css";
import BackgroundBlurCircle from "@/components/BackgroundBlurCircle";

export const metadata: Metadata = {
  title: "Gabriel Melo's Portfolio",
  description: "Portfolio of Gabriel Melo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          <div className="relative w-full h-full bg-black">
            <BackgroundBlurCircle />
          {children}
        </div>
      </body>
    </html>
  );
}
