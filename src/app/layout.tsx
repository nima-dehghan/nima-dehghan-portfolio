import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vazirmatn = localFont({
  src: [
    { path: "../../public/fonts/Vazirmatn-Thin.ttf", weight: "100" },
    { path: "../../public/fonts/Vazirmatn-ExtraLight.ttf", weight: "200" },
    { path: "../../public/fonts/Vazirmatn-Light.ttf", weight: "300" },
    { path: "../../public/fonts/Vazirmatn-Regular.ttf", weight: "400" },
    { path: "../../public/fonts/Vazirmatn-Medium.ttf", weight: "500" },
    { path: "../../public/fonts/Vazirmatn-SemiBold.ttf", weight: "600" },
    { path: "../../public/fonts/Vazirmatn-Bold.ttf", weight: "700" },
    { path: "../../public/fonts/Vazirmatn-ExtraBold.ttf", weight: "800" },
    { path: "../../public/fonts/Vazirmatn-Black.ttf", weight: "900" },
  ],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nima Dehghan | .NET Backend Developer",
  description:
    ".NET backend development with C# and ASP.NET Core by Nima Dehghan, with complementary Computer Vision research.",
  icons: {
    icon: "/profile.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" dir="ltr" className={`${geistSans.variable} ${geistMono.variable} ${vazirmatn.variable} h-full antialiased`}>
      <body className="min-h-full font-sans text-white">{children}</body>
    </html>
  );
}
