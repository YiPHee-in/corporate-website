import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@/components/analytics";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata, Viewport } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://yiphee.in"),
  title: "YiPHee - Your Digital Partner",
  description:
    "YiPHee is your trusted partner in digital transformation, offering innovative solutions for businesses worldwide.",
  keywords: [
    "digital transformation",
    "web development",
    "mobile apps",
    "cloud solutions",
    "IT consulting",
  ],
  authors: [{ name: "YiPHee" }],
  creator: "YiPHee",
  publisher: "YiPHee",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yiphee.in",
    siteName: "YiPHee",
    title: "YiPHee - Your Digital Partner",
    description:
      "YiPHee is your trusted partner in digital transformation, offering innovative solutions for businesses worldwide.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "YiPHee - Your Digital Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YiPHee - Your Digital Partner",
    description:
      "YiPHee is your trusted partner in digital transformation, offering innovative solutions for businesses worldwide.",
    images: ["/og-image.jpg"],
    creator: "@yiphee",
  },
  verification: {
    google: "your-google-site-verification",
  },
  alternates: {
    canonical: "https://yiphee.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className,
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
