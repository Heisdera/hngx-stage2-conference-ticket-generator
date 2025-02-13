import type { Metadata } from "next";
import { Roboto, Road_Rage } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: "normal",
  subsets: ["latin"],
});

const roadRage = Road_Rage({
  weight: ["400"],
  style: "normal",
  subsets: ["latin"],
});

const jejuMyeongjoLocalFont = localFont({
  src: "../fonts/JejuMyeongjo.woff",
});

export const metadata: Metadata = {
  title: "Conference Ticket Generator",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${roboto.className} ${jejuMyeongjoLocalFont.className} dark antialiased min-h-screen bg-[#07181C] sm:bg-[radial-gradient(circle_at_50%_200%,var(--tw-gradient-stops))] sm:from-[#4E9EB3] sm:to-[#07181C] sm:to-60% text-white p-5`}
        className={`${roboto.className} ${jejuMyeongjoLocalFont.className} ${roadRage.className} dark antialiased min-h-screen bg-[#07181C] sm:bg-[radial-gradient(52.52%_32.71%_at_50%_97.66%,rgba(36,160,181,0.20)_0%,rgba(36,160,181,0.00)_100%)] sm:from-[#4E9EB3] sm:to-[#07181C] sm:to-60% text-white`}
      >
        {children}
      </body>
    </html>
  );
}
