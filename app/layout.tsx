import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter_Tight } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
})

export const metadata: Metadata = {
  title: "Zapyon | Premium Web Development & Design Agency",
  description: "Zapyon builds exceptional websites that drive business growth. Professional web development, custom design, and digital solutions for startups and enterprises worldwide.",
  keywords: ["web development", "website design", "business websites", "custom websites", "Zapyon", "web agency", "digital solutions", "responsive design", "SEO optimization", "e-commerce development"],
  authors: [{ name: "Aditya Bobby", url: "https://zapyon.com" }],
  creator: "Aditya Bobby",
  publisher: "Zapyon",
  formatDetection: { email: "aditya@zapyon.com" },
  metadataBase: new URL("https://zapyon.com"),
  alternates: {
    canonical: new URL("https://zapyon.com"),
  },
  openGraph: {
    title: "Zapyon | Premium Web Development & Design Agency",
    description: "Zapyon builds exceptional websites that drive business growth. Professional web development, custom design, and digital solutions for startups and enterprises worldwide.",
    url: "https://zapyon.com",
    siteName: "Zapyon",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/orb.png",
        width: 1200,
        height: 630,
        alt: "Zapyon - Premium Web Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zapyon | Premium Web Development & Design Agency",
    description: "Zapyon builds exceptional websites that drive business growth. Professional web development, custom design, and digital solutions.",
    site: "@zapyon",
    creator: "@adityabobby",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: "Next.js"
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zapyon",
  "url": "https://zapyon.com",
  "logo": "https://zapyon.com/images/orb.png",
  "description": "Premium web development and design agency building exceptional websites for businesses worldwide.",
  "founder": {
    "@type": "Person",
    "name": "Aditya Bobby",
    "jobTitle": "CEO & Founder",
    "email": "aditya@zapyon.com",
    "telephone": "+91 94461 81036"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91 94461 81036",
    "email": "aditya@zapyon.com",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://twitter.com/zapyon",
    "https://linkedin.com/company/zapyon"
  ],
  "serviceType": "Professional Web Development & Design Services"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className={`${interTight.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
