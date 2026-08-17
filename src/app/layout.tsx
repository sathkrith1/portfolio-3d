import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sathkrith Gaur — Game Developer",
  description: "Game developer specializing in Unreal Engine, C++, gameplay systems, AI, combat and animation.",
  keywords: ["Game Developer", "Unreal Engine", "C++", "Gameplay Programming", "AI", "Combat Systems", "Animation"],
  authors: [{ name: "Sathkrith Gaur" }],
  openGraph: {
    title: "Sathkrith Gaur — Game Developer",
    description: "Game developer specializing in Unreal Engine, C++, gameplay systems, AI, combat and animation.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-bg-primary text-fg-primary">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}